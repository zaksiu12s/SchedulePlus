import express, { Request, Response, NextFunction, response } from "express";
import { parse, HTMLElement as ParsedHTMLElement } from "node-html-parser";

import BranchData from "../BranchData/main.js";
import TeacherData from "../BranchData/TeacherData.js";
import ClassData from "../BranchData/ClassesData.js";
import ClassroomData from "../BranchData/ClassroomData.js";

import Lesson, { LessonGetData } from "../Lesson/main.js";
import ClassLesson from "../Lesson/ClassLesson.js";
import ClassroomLesson from "../Lesson/ClassroomLesson.js";
import TeacherLesson from "../Lesson/TeacherLesson.js";

const router = express.Router();

router.get("/specifiedTimetable", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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

  try {
    const timetableWebsiteData: string = await getWebsiteData(link);
    const timetableWebsiteDataDOM = parse(timetableWebsiteData);

    const header = timetableWebsiteDataDOM.querySelector(".tytulnapis")?.innerText;

    const lessonElements: ParsedHTMLElement[] = getLessonElements(timetableWebsiteData);
    const lessonsAsObjects: Lesson[] = getLessonsAsObject(lessonElements, branchType);

    if (!formatAsDays) {
      const responseObject: LessonGetData[] = [];

      lessonsAsObjects.forEach((lesson: Lesson, index: number) => {
        responseObject.push(lesson.setDayNumber(index).setHeader(header, shortLink).getData());
      })

      res.send(responseObject);
    }

    if (formatAsDays) {
      const responseObject: (LessonGetData | undefined)[][] = [];
      const schoolDays = 5;

      for (let i = 0; i < schoolDays; i++) {
        const currentDayLessons: (LessonGetData | undefined)[] = [];
        for (let j = i; j < lessonsAsObjects.length; j += 5) {
          const currentLesson = lessonsAsObjects[j];

          if (currentLesson) {
            currentDayLessons.push(currentLesson.setDayNumber(i).setHeader(header, shortLink).getData());
          }
        }

        responseObject.push(currentDayLessons);
      }

      res.send(responseObject);
    }
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

async function getWebsiteData(schoolLink = "https://zsem.edu.pl/plany/lista.html"): Promise<string> {
  // Fetching data from specified school website
  const request: globalThis.Response = await fetch(schoolLink);

  // School website data in string format
  const schoolWebsiteData: string = await request.text();
  return schoolWebsiteData;
}

function getLessonsAsObject(lessonsByDay: (ParsedHTMLElement | undefined)[], branchType: "o" | "n" | "s" | undefined): Lesson[] {
  const lessonsAsObjects: Lesson[] = []

  lessonsByDay.forEach((lesson: ParsedHTMLElement | undefined) => {
    if (lesson) {
      const links: ParsedHTMLElement[] = lesson.querySelectorAll('a');
      const attributes: string[] = [];
      links.forEach((link: ParsedHTMLElement) => {
        if (link.attributes && link.attributes.href) {
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
        lessonObject.generateTeacherData().generateSubject().generateClassroomData().generateClassData().divideToGroups();
        lessonsAsObjects.push(lessonObject);
      }
    }
  })

  return lessonsAsObjects;
}

function getLessonElements(timetableWebsiteData: string): ParsedHTMLElement[] {
  const timetableWebsiteDOM: ParsedHTMLElement = parse(timetableWebsiteData);

  const lessons: ParsedHTMLElement[] = [];

  const lessonsElements: ParsedHTMLElement[] = timetableWebsiteDOM.querySelectorAll("td.l");
  lessonsElements.forEach((lessonElement: ParsedHTMLElement) => {
    lessons.push(lessonElement);
  })

  return lessons;
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
