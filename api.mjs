// importing libraries
// working on:
// express - to handle requests from client
// node-html-parser - to convert text data from fetch request to js objects with HTML DOM
import express from "express";
import { parse } from "node-html-parser";

const router = express.Router();

// function fetches all the branches from the website and returns them to client
router.get("/getClassBranches", async (req, res) => {
  // all the branches will be stored here
  const classBranchesObject = {};

  // tries to fetch
  try {
    const request = await fetch("https://zsem.edu.pl/plany/lista.html");
    const websiteData = await request.text();
    websiteData.replace("<!DOCTYPE html>", "");

    const root = parse(websiteData);
    const classBranchElements = root.querySelectorAll("a");

    // check if classBranchElements exists, if not respond with error and return
    if (classBranchElements.length == 0) {
      res.status(503).json({
        status: "failed",
        notes: "try again later",
        error: "school server didn't respond",
      });

      return;
    }

    classBranchElements.forEach((classBranch) => {
      // check if classBranch has elements inside of it else return error
      if (classBranch.childNodes[0] === undefined) {
        res.status(503).json({
          status: "failed",
          notes: "try again later",
          error: "school server didn't respond",
        });

        return;
      }

      classBranchesObject[classBranch.childNodes[0].innerText] =
        classBranch.attributes.href.replace("plany/", "");
    });

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
      error: "something went wrong",
    });
  }
});

router.get("/getClassTimetable", async (req, res) => {
  // if user didn't specify query: classTimetableLink = "o14.html"
  // responds with status 400 and sends fail data and returns
  if (!req.query.classTimetableLink) {
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
    const classTimetableLink = `https://zsem.edu.pl/plany/plany/${req.query.classTimetableLink}`;
    const request = await fetch(classTimetableLink);

    let websiteData = await request.text();
    websiteData.replace("<!DOCTYPE html>", "");

    const root = parse(websiteData);
    const lessonElements = root.querySelectorAll(".l"); //array of all the lessons in the week
    const hourElements = root.querySelectorAll(".g"); //array of all the hours of the current schedule
    const classNameElement = root.querySelector(".tytulnapis");

    // check if className exists if not responds with error and returns
    // if it exists saves the text
    if (classNameElement.childNodes[0] === undefined) {
      res.status(503).json({
        status: "failed",
        notes: "try again later",
        error: "school server didn't respond",
      });

      return;
    }
    const className = classNameElement.childNodes[0].innerText;

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
    const schedule = {
      className,
      classTimetableLink: classTimetableLink,
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      hours: [],
    };

    // adds the hours to the schedule object
    hourElements.forEach((hourElement) => {
      schedule.hours.push(hourElement.innerText);
    });

    // for each day in the schedule.days array creates a new variable in schedule object => schedule[day]
    schedule.days.forEach((day, index) => {
      schedule[day] = [];

      // the first lesson is index of current day and then its every 5th lesson after that, that's becouse
      // the lessons aren't ordered in daily way but rather in left to right way => that's why its adding 5
      // becouse there are 5 days in the week
      for (let i = index; i < lessonElements.length; i += 5) {
        const lessonName = lessonElements[i].textContent;
        const classBranches = []; // contains link for teacher's/classe's or where the lesson will be

        lessonElements[i].querySelectorAll("a").forEach((classBranch) => {
          classBranches.push(classBranch.attributes.href);
        });

        // saves the lesson hour
        const hour =
          lessonElements[i].parentNode.querySelector(".g").childNodes[0]
            .innerText;

        schedule[day].push({
          lesson: lessonName,
          attributes: classBranches,
          hour,
        });
      }
    });

    res.json({
      status: "ok",
      error: "",
      notes: "data sent successfully",
      data: schedule,
    });
  } catch (error) {
    res.status(503).json({
      status: "failed",
      notes: "try again with correct class link",
      error: "wrong class link",
    });
  }
});

export default router;
