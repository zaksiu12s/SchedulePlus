import express, { Request, Response, NextFunction, Router } from "express";
import { parse, HTMLElement as ParsedHTMLElement } from "node-html-parser";

import BranchTimetableSchema, { IBranchTimetableSchema } from "../models/branchTimetableModel.js";


import BranchData from "../classes/BranchData/main.js";
import TeacherData from "../classes/BranchData/TeacherData.js";
import ClassData from "../classes/BranchData/ClassesData.js";
import ClassroomData from "../classes/BranchData/ClassroomData.js";

import Lesson, { LessonGetData } from "../classes/Lesson/main.js";
import ClassLesson from "../classes/Lesson/ClassLesson.js";
import ClassroomLesson from "../classes/Lesson/ClassroomLesson.js";
import TeacherLesson from "../classes/Lesson/TeacherLesson.js";

const router: Router = express.Router();

router.get("/specifiedTimetable", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  console.log("request received");
  const link: string | undefined = req.query.link?.toString();
  const formatAsDays: boolean = (req.query.formatAsDays == "true");

  const shortLink = link?.substring(link.lastIndexOf("/") + 1);

  if (!link) {
    res.status(400).json({ message: "Please provide a valid link." });
    return;
  }

  const branchType: string | undefined = link.substring(link.lastIndexOf("/") + 1)[0];
  if (!branchType || (branchType !== "n" && branchType !== "s" && branchType !== "o")) {
    res.status(400).json({ message: "Please provide a valid link." });
    return;
  }

  if (process.env.USE_DB === "true") {
    try {
      const data = await BranchTimetableSchema.findOne<IBranchTimetableSchema>({ link: shortLink });

      const currentDate = new Date();

      if (data?.timetableData && data?.timetableDataAsDays) {
        if (data?.nextScrapeTime && data?.nextScrapeTime < currentDate) {
          console.log("Scrape time");
          await BranchTimetableSchema.deleteMany({ link: shortLink });
        } else {
          if (formatAsDays) {
            res.send(JSON.parse(data.timetableDataAsDays));
            return;
          } else {
            res.send(JSON.parse(data.timetableData));
            return;
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  try {
    const timetableWebsiteData: string = await getWebsiteData(link);
    const timetableWebsiteDataDOM: ParsedHTMLElement = parse(timetableWebsiteData);

    const header: string | undefined = timetableWebsiteDataDOM.querySelector(".tytulnapis")?.innerText;

    const lessonElements: ParsedHTMLElement[] = timetableWebsiteDataDOM.querySelectorAll("td.l");
    const lessonsAsObjects: Lesson[] = getLessonsAsObject(lessonElements, branchType);

    if (process.env.USE_DB === "true") {
      await saveTimetableToDB(lessonsAsObjects, header, shortLink, formatAsDays);
    }

    res.send(createResponseObject(lessonsAsObjects, header, shortLink, formatAsDays));
  } catch (err) {
    next(err);
    return;
  }
})

router.get("/allBranches", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const link: string | undefined = req.query.link?.toString();

  if (!link) {
    res.status(400).json({ message: "Please provide a valid link." });
  }

  try {
    const responseObject: BranchData[][] = [];
    const schoolWebsiteData: string = await getWebsiteData(link);

    for (let i = 0; i <= 2; i++) {
      const branchElements: ParsedHTMLElement[] | null = getSpecifiedElements(schoolWebsiteData, i);
      if (branchElements) {
        const branchData: BranchData[] = getBranchData(branchElements, i);
        responseObject[i] = branchData;
      }
    }

    res.json(responseObject);
  } catch (err) {
    next(err);
  }
})

async function saveTimetableToDB(lessonsAsObjects: Lesson[], header: string | undefined, shortLink: string | undefined, asDays: boolean) {
  if (!shortLink || !header) {
    return
  }

  const schoolDays: number = 5;

  const data = lessonsAsObjects.map((lesson, index) =>
    lesson.setDayNumber(index).setHeader(header, shortLink).getData()
  );

  const daysOfLessons: LessonGetData[][] = [];
  for (let day: number = 0; day < schoolDays; day++) {
    const lessonsForDay: LessonGetData[] = lessonsAsObjects
      .filter((_, index) => index % schoolDays === day)
      .map((lesson) => lesson.setDayNumber(day).setHeader(header, shortLink).getData());

    daysOfLessons.push(lessonsForDay);
  }


  const timetableData = new BranchTimetableSchema<IBranchTimetableSchema>({
    link: shortLink,
    header: header,
    timetableData: JSON.stringify(data),
    timetableDataAsDays: JSON.stringify(daysOfLessons),
  })

  console.log('saving');
  timetableData.save();
}

function createResponseObject(lessonsAsObjects: Lesson[], header: string | undefined, shortLink: string | undefined, asDays: boolean): LessonGetData[] | LessonGetData[][] {
  const schoolDays: number = 5;

  if (!asDays) {
    const data = lessonsAsObjects.map((lesson, index) =>
      lesson.setDayNumber(index).setHeader(header, shortLink).getData()
    );

    return data;
  }

  const daysOfLessons: LessonGetData[][] = [];
  for (let day: number = 0; day < schoolDays; day++) {
    const lessonsForDay: LessonGetData[] = lessonsAsObjects
      .filter((_, index) => index % schoolDays === day)
      .map((lesson) => lesson.setDayNumber(day).setHeader(header, shortLink).getData());

    daysOfLessons.push(lessonsForDay);
  }

  return daysOfLessons;
};

async function getWebsiteData(schoolLink = "https://zsem.edu.pl/plany/lista.html"): Promise<string> {
  // Fetching data from specified school website
  const request: globalThis.Response = await fetch(schoolLink);

  // School website data in string format
  const schoolWebsiteData: string = await request.text();
  return schoolWebsiteData;
}

function getLessonsAsObject(lessonsByDay: ParsedHTMLElement[], branchType: "o" | "n" | "s"): Lesson[] {
  const lessonsAsObjects: Lesson[] = [];

  lessonsByDay.forEach((lesson: ParsedHTMLElement): void => {
    const links: ParsedHTMLElement[] = lesson.querySelectorAll('a');
    const attributes: string[] = [];

    links.forEach((link: ParsedHTMLElement): void => {
      if (link.attributes.href) {
        attributes.push(link.attributes.href);
      }
    });

    const lessonNumber: number | undefined = Number(lesson.parentNode.querySelector('.nr')?.innerText);
    const hour: string | undefined = lesson.parentNode.querySelector('.g')?.innerText;

    let lessonObject;
    if (branchType == "o") {
      lessonObject = new ClassLesson(lesson, lesson.innerText, lessonNumber, attributes, hour);
    }
    if (branchType == "n") {
      lessonObject = new TeacherLesson(lesson, lesson.innerText, lessonNumber, attributes, hour);
    }
    if (branchType == "s") {
      lessonObject = new ClassroomLesson(lesson, lesson.innerText, lessonNumber, attributes, hour);
    }

    if (lessonObject !== undefined) {
      lessonObject.generateTeacherData().generateSubject().generateClassroomData().generateClassData();
      lessonsAsObjects.push(lessonObject);
    }
  })

  return lessonsAsObjects;
}

function getSpecifiedElements(schoolWebsiteData: string, elementsType: number): ParsedHTMLElement[] | null {
  const schoolWebsiteDOM: ParsedHTMLElement = parse(schoolWebsiteData);
  if (elementsType > 2 || elementsType < 0) {
    return null;
  }

  const list: ParsedHTMLElement | undefined = schoolWebsiteDOM.querySelectorAll("ul")[elementsType];
  if (!list) return null;

  const specifiedList: ParsedHTMLElement[] = list.querySelectorAll("a");
  if (specifiedList && specifiedList.length <= 0) return null;

  return specifiedList;
}

function getBranchData(classesElements: ParsedHTMLElement[], branchType: number): BranchData[] {
  const classesData: ClassData[] = [];
  classesElements.forEach((classElement: ParsedHTMLElement) => {
    if (classElement && classElement.attributes.href) {
      const wholeName: string = classElement.text.trim();
      const link: string = classElement.attributes.href;

      let singleClassData: BranchData;

      if (branchType == 0) {
        singleClassData = new ClassData(wholeName, link);
        singleClassData.generateClassName().generateProfileName().generateYear().generateShortName().generateLongName();

        classesData.push(singleClassData);
      } else if (branchType == 1) {
        singleClassData = new TeacherData(wholeName, link);
        singleClassData.generateClassName().generateProfileName().generateYear().generateShortName().generateLongName();

        classesData.push(singleClassData);
      } else if (branchType == 2) {
        singleClassData = new ClassroomData(wholeName, link);
        singleClassData.generateClassName().generateProfileName().generateYear().generateShortName().generateLongName();

        classesData.push(singleClassData);
      }
    }
  });

  return classesData;
}

router.use((error: unknown, req: Request, res: Response, next: NextFunction): void => {
  console.log(error);
  res.status(500).json({
    status: "failed",
    notes: "internal server error",
    error: error,
  });
});

export default router;
