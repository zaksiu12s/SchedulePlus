// importing libraries
// working on:
// express - to handle requests from client
// node-html-parser - to convert text data from fetch request to js objects with HTML DOM
import { error } from "console";
import express from "express";
import { parse } from "node-html-parser";
import "dotenv/config";

const router = express.Router();
// const useDB = Boolean(process.env.useDB) || false;

interface classBranchesObject {
  [key: string]: {
    name: string;
    link: string;
  };
}

interface scheduleObject {
  branchName: string;
  branchType: string;
  branchTimetableLink: string;
  days: string[];
  hours: string[];
  daysLanguage: string[];
}

interface practiceDatesObject {
  [key: string]: {
    startDate: string;
    endDate: string;
  };
}

// fetches the classroom branches from the website and returns them to client
router.get("/getClassrooms", async (req, res) => {
  try {
    // returns all the branches
    const classrooms = await getAllBranches();

    // leaves only the classrooms branches
    for (let branch in classrooms) {
      // classroom regexp, either only contains letters or contains 0 or more letters followed by numbers
      const classRoomRegexp = /[a-zA-Z]*[0-9]$|^[a-zA-Z]*$/;

      if (!classRoomRegexp.test(branch)) {
        delete classrooms[branch];
      }
    }

    res.status(200).json({
      status: "ok",
      notes: "data sent successfully",
      error: "",
      data: classrooms,
    });

    return;
  } catch (error) {
    res.status(503).json({
      status: "failed",
      notes: "try again later",
      error: "school server didn't respond",
    });

    return;
  }
});

// fetches all the techer branches from website and returns them to client
router.get("/getTeachers", async (req, res) => {
  try {
    // fetches all the branches
    const teachers = await getAllBranches();

    // removes every branch that isnt teacher
    for (let branch in teachers) {
      // teacher regexp, contains the
      const techersRegexp = /[.]/;

      if (!techersRegexp.test(branch)) {
        delete teachers[branch];
        continue;
      }

      // replaces teachers object name property with its name and then removes parenthesis
      teachers[teachers[branch].name.replace("(", "").replace(")", "")] = {
        name: branch,
        link: teachers[branch].link,
      };
      delete teachers[branch];
    }

    res.status(200).json({
      status: "ok",
      notes: "data sent successfully",
      error: "",
      data: teachers,
    });

    return;
  } catch (error) {
    res.status(503).json({
      status: "failed",
      notes: "try again later",
      error: "school server didn't respond",
    });

    return;
  }
});

// fetches and returns to client all the practice dates
router.get("/getPracticeDates", async (req, res) => {
  const practiceDatesObject: practiceDatesObject = {};

  try {
    const request = await fetch("https://zsem.edu.pl/plany/praktyki_lista.php");
    const websiteData = await request.text();
    websiteData.replace("<!DOCTYPE html>", "");

    const root = parse(websiteData);
    const practiceDateElements = root.querySelectorAll("tr");

    // for each tr (tr contains two tds) every [0] is class name [1] is date
    practiceDateElements.forEach((element) => {
      // splits the class name into multiple classes (3m, 2p, 1e) etc
      element.childNodes[0].innerText.split(",").forEach((elem) => {
        // if class name is null then it returns
        if (elem.trim() == "") {
          return;
        }

        // creates object property as the class name that contains end and start date
        const date = element.childNodes[1].innerText;
        practiceDatesObject[elem.trim()] = {
          startDate: date.split(" - ")[0].trim(),
          endDate: date.split(" - ")[1].trim(),
        };
      });
    });

    res.status(200).json({
      status: "ok",
      notes: "data sent successfully",
      error: "",
      data: practiceDatesObject,
    });

    return;
  } catch (error) {
    res.status(503).json({
      status: "failed",
      notes: "try again later",
      error: "school server didn't respond",
    });

    return;
  }
});

// function fetches all the branches from the website and returns them to client
router.get("/getClassBranches", async (req, res) => {
  try {
    // returns all the branches
    const classBranchesObject = await getAllBranches();

    // removes the branches that arent classes'
    for (let branch in classBranchesObject) {
      const classRegexp = /[0-9][a-zA-Z]/;
      if (!classRegexp.test(branch)) {
        delete classBranchesObject[branch];
      }
    }

    res.status(200).json({
      status: "ok",
      notes: "data sent successfully",
      error: "",
      data: classBranchesObject,
    });

    return;
  } catch (error) {
    res.status(503).json({
      status: "failed",
      notes: "try again later",
      error: "school server didn't respond",
    });

    return;
  }
});

router.get("/getBranchTimetable", async (req, res) => {
  // if user didn't specify query: classTimetableLink = "o14.html"
  // responds with status 400 and sends fail data and returns
  if (!req.query.branchLink) {
    res.status(400).json({
      status: "failed",
      notes:
        "Please specify classTimetableLink query. For example ?classTimetableLink=o14.html",
      error: "No classTimetableLink query specified.",
    });

    return;
  }

  const branchLink = req.query.branchLink;
  let branchType: string;

  if (typeof branchLink === "string" && /[o]/.test(branchLink)) {
    branchType = "class";
  } else if (typeof branchLink === "string" && /[n]/.test(branchLink)) {
    branchType = "teacher";
  } else if (typeof branchLink === "string" && /[s]/.test(branchLink)) {
    branchType = "classroom";
  } else {
    res.status(400).json({
      status: "failed",
      notes:
        "Please specify classTimetableLink query. For example ?classTimetableLink=o14.html",
      error: "No classTimetableLink query specified.",
    });

    return;
  }

  // tries to fetch data from school schedule, then edit data and send to client
  try {
    const branchTimetableLink = `https://zsem.edu.pl/plany/plany/${branchLink}`;
    const request = await fetch(branchTimetableLink);

    let websiteData = await request.text();
    websiteData.replace("<!DOCTYPE html>", "");

    const root = parse(websiteData);
    const lessonElements = root.querySelectorAll(".l"); //array of all the lessons in the week
    const hourElements = root.querySelectorAll(".g"); //array of all the hours of the current schedule
    const branchNameElement = root.querySelector(".tytulnapis");

    // check if className exists if not responds with error and returns
    // if it exists saves the text
    if (branchNameElement.childNodes[0] === undefined) {
      res.status(503).json({
        status: "failed",
        notes: "try again later",
        error: "school server didn't respond",
      });

      return;
    }
    const branchName = branchNameElement.childNodes[0].innerText;

    // check if the lessons exist
    // if not then send error response and return
    if (lessonElements.length == 0) {
      res.status(503).json({
        status: "failed",
        notes: "try again later",
        error: "school server didn't respond",
      });

      return;
    }

    // creates schedule object that is later added to response object and sent via it
    const scheduleObject: scheduleObject = {
      branchName,
      branchType,
      branchTimetableLink: branchTimetableLink,
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      hours: [],
      daysLanguage: [],
    };

    // in future add language api
    scheduleObject.daysLanguage = scheduleObject.days;

    // adds the hours to the schedule object
    hourElements.forEach((hourElement) => {
      scheduleObject.hours.push(hourElement.innerText);
    });

    // for each day in the schedule.days array creates a new variable in schedule object => schedule[day]
    scheduleObject.days.forEach((day, index) => {
      scheduleObject[day] = [];

      // the first lesson is index of current day and then its every 5th lesson after that, that's because
      // the lessons aren't ordered in daily way but rather in left to right way => that's why its adding 5
      // because there are 5 days in the week
      for (
        let i = index;
        i < lessonElements.length;
        i += lessonElements[i].parentNode.querySelectorAll(".l").length
      ) {
        // adds number of days                            ^^^^^
        const lessonName = lessonElements[i].textContent;
        const classBranches: string[] = []; // contains link for teacher's/classes or where the lesson will be

        lessonElements[i].querySelectorAll("a").forEach((classBranch) => {
          classBranches.push(classBranch.attributes.href);
        });

        // saves the lesson hour
        const hour = {
          start: lessonElements[i].parentNode
            .querySelector(".g")
            .childNodes[0].innerText.split("-")[0]
            .trim(),
          end: lessonElements[i].parentNode
            .querySelector(".g")
            .childNodes[0].innerText.split("-")[1]
            .trim(),
        };

        scheduleObject[day].push({
          lesson: lessonName.split("\n"),
          attributes: classBranches,
          hour,
        });
      }
    });

    res.json({
      status: "ok",
      error: "",
      notes: "data sent successfully",
      data: scheduleObject,
    });
  } catch (error) {
    res.status(503).json({
      status: "failed",
      notes: "try again with correct class link",
      error: "wrong class link",
    });
  }
});

router.get("/info", (req, res) => {
  const workingAPIS: string[] = [];
  router.stack.forEach((stack) => {
    workingAPIS.push(stack.route.path);
  });

  res.status(200).json({
    status: "ok",
    workingLinksAPI: workingAPIS,
  });
});

// gets all the branches and returns them (classes, teachers, rooms etc)
async function getAllBranches(): Promise<classBranchesObject> {
  // all the branches will be stored here
  const branchesObject: classBranchesObject = {};

  // tries to fetch
  try {
    const request = await fetch("https://zsem.edu.pl/plany/lista.html");
    const websiteData = await request.text();
    websiteData.replace("<!DOCTYPE html>", "");

    const root = parse(websiteData);
    const classBranchElements = root.querySelectorAll("a");

    // check if classBranchElements exists, if not respond with error and return
    if (classBranchElements.length == 0) {
      return new error();
    }

    classBranchElements.forEach((classBranch) => {
      // check if classBranch has elements inside of it else return error
      if (classBranch.childNodes[0] === undefined) {
        return new error();
      }

      // the classBranchName is the whole class name for example 44, 2p 2programista etc
      const classBranchName = classBranch.childNodes[0].innerText.trim();
      // the key name of the object is the first word of the classBranchName
      const classBranchesObjectKey = classBranchName.split(" ")[0];

      branchesObject[classBranchesObjectKey] = {
        link: classBranch.attributes.href.replace("plany/", ""),
        // name is everything after the first word
        name: classBranchName.substring(classBranchName.indexOf(" ") + 1),
      };
    });

    return branchesObject;
  } catch (error) {
    return new error();
  }
}

export default router;
