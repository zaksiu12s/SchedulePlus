import express, { Request, Response, NextFunction } from "express";
import { parse, HTMLElement as ParsedHTMLElement } from "node-html-parser";
import "dotenv/config";

class ClassroomData {
  private wholeName: string;
  private link: string;
  private shortName?: string;
  private longName?: string;

  constructor(wholeName: string, link: string) {
    this.wholeName = wholeName;
    this.link = link.substring(link.indexOf("/") + 1);
  }

  public generateShortName(): this {
    if (this.wholeName.indexOf(" ") == -1) return this;

    const shortName: string = this.wholeName.substring(0, this.wholeName.indexOf(" "));
    this.shortName = shortName;

    return this;
  }

  public generateLongName(): this {
    if (this.wholeName.indexOf(" ") == -1) return this;

    const longName: string = this.wholeName.substring(this.wholeName.indexOf(" ") + 1);
    this.longName = longName;

    return this;
  }
}

class TeacherData {
  private wholeName: string;
  private link: string;
  private shortName?: string;
  private longName?: string;

  constructor(wholeName: string, link: string) {
    this.wholeName = wholeName;
    this.link = link.substring(link.indexOf("/") + 1);
  };

  public generateShortName(): this {
    if (this.wholeName.indexOf("(") == -1 || this.wholeName.indexOf(")") == -1) return this;

    const shortNameStart: number = this.wholeName.indexOf("(") + 1;
    const shortNameEnd: number = this.wholeName.indexOf(")");

    const shortName: string = this.wholeName.substring(shortNameStart, shortNameEnd).trim();
    this.shortName = shortName;

    return this;
  }

  public generateLongName(): this {
    if (this.wholeName.indexOf("(") == -1) return this;

    const longNameEnd: number = this.wholeName.indexOf("(");

    const longName: string = this.wholeName.substring(0, longNameEnd).trim();
    this.longName = longName;

    return this;
  }
}

class ClassData {
  private wholeName: string;
  private link: string;
  private className?: string;
  private profileName?: string;
  private year?: number;

  constructor(wholeName: string, link: string) {
    this.wholeName = wholeName;
    this.link = link.substring(link.indexOf("/") + 1);
  }

  public generateClassName(): this {
    if (this.wholeName.indexOf(" ") == -1) return this;

    const classNameEnd = this.wholeName.indexOf(" ")
    this.className = this.wholeName.substring(0, classNameEnd);

    return this;
  }

  public generateProfileName(): this {
    if (this.wholeName.indexOf(" ") == -1) return this;

    // Adding 2 because the profile name is like: 2informatyk so as to delete the 2 in front
    const profileNameStart = this.wholeName.indexOf(" ") + 2;
    this.profileName = this.wholeName.substring(profileNameStart);

    return this;
  }

  public generateYear(): this {
    if (this.wholeName.indexOf(" ") == -1) return this;

    const yearStart = this.wholeName.indexOf(" ") + 1;
    const yearEnd = yearStart + 1;
    const year = Number(this.wholeName.substring(yearStart, yearEnd))
    if (isNaN(year)) {
      return this;
    }

    this.year = year;
    return this;
  }
}

class Lesson {
  protected dayNumber: number;
  protected wholeName: string;
  protected lessonNumber?: number;
  protected teacherData?: {
    shortName: string | undefined;
    link?: string | undefined;
  };
  protected classroomData?: {
    shortName: string | undefined,
    link?: string | undefined,
  }
  protected classData?: {
    shortName: string | undefined,
    link?: string | undefined,
  }
  protected subject?: string | undefined;
  protected attributes?: string[];
  protected wholeHour?: string;
  protected startHour?: string;
  protected endHour?: string;

  public generateSubject() { return this };
  public generateClassroomData() { return this };
  public generateTeacherData() { return this };
  public generateClassData() { return this };

  constructor(dayNumber: number, wholeName: string, lessonNumber?: number, attributes?: string[], wholeHour?: string) {
    this.dayNumber = dayNumber;
    if (lessonNumber && !isNaN(lessonNumber)) this.lessonNumber = lessonNumber - 1;
    this.wholeName = wholeName.replace("\n", "");
    if (attributes && attributes.length > 0) this.attributes = attributes;
    if (wholeHour) {
      this.wholeHour = wholeHour.trim();
      const hourSplit = this.wholeHour.split("-");
      if (hourSplit.length === 2 && hourSplit[0] && hourSplit[1]) {
        this.startHour = hourSplit[0].trim();
        this.endHour = hourSplit[1].trim();
      }
    }
  }
}

class ClassLesson extends Lesson {
  constructor(dayNumber: number, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string) {
    super(dayNumber, wholeName, lessonNumber, attributes, wholeHour);
  }

  override generateSubject(): this {
    if (!this.wholeName.split(" ")[0]) return this;

    this.subject = this.wholeName.split(" ")[0];

    return this;
  }

  override generateTeacherData(): this {
    if (!this.wholeName.split(" ")[1]) return this;
    if (!this.attributes || !this.attributes[0]) {
      this.teacherData = {
        shortName: this.wholeName.split(" ")[1],
      }

      return this;
    };

    this.teacherData = {
      shortName: this.wholeName.split(" ")[1],
      link: this.attributes[0],
    }

    return this;
  }

  override generateClassroomData(): this {
    if (!this.wholeName.split(" ")[2]) return this;
    if (!this.attributes || !this.attributes[1]) {
      this.classroomData = {
        shortName: this.wholeName.split(" ")[2],
      }

      return this;
    };

    this.classroomData = {
      shortName: this.wholeName.split(" ")[2],
      link: this.attributes[1],
    }

    return this;
  }
}

class TeacherLesson extends Lesson {
  constructor(dayNumber: number, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string) {
    super(dayNumber, wholeName, lessonNumber, attributes, wholeHour);
  }

  override generateSubject(): this {
    if (!this.wholeName.split(" ")[1]) return this;

    this.subject = this.wholeName.split(" ")[1];

    return this;
  }

  override generateClassData(): this {
    if (!this.wholeName.split(" ")[0]) return this;
    if (!this.attributes || !this.attributes[0]) {
      this.classData = {
        shortName: this.wholeName.split(" ")[0],
      }

      return this;
    };

    this.classData = {
      shortName: this.wholeName.split(" ")[0],
      link: this.attributes[0],
    }

    return this;
  }

  override generateClassroomData(): this {
    if (!this.wholeName.split(" ")[2]) return this;
    if (!this.attributes || !this.attributes[1]) {
      this.classroomData = {
        shortName: this.wholeName.split(" ")[2],
      }

      return this;
    };

    this.classroomData = {
      shortName: this.wholeName.split(" ")[2],
      link: this.attributes[1],
    }

    return this;
  }
}

class classroomLesson extends Lesson {
  constructor(dayNumber: number, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string) {
    super(dayNumber, wholeName, lessonNumber, attributes, wholeHour);
  }

  override generateSubject(): this {
    if (!this.wholeName.split(" ")[2]) return this;

    this.subject = this.wholeName.split(" ")[2];

    return this;
  }

  override generateClassData(): this {
    if (!this.wholeName.split(" ")[1]) return this;
    if (!this.attributes || !this.attributes[1]) {
      this.classData = {
        shortName: this.wholeName.split(" ")[1],
      }

      return this;
    };

    this.classData = {
      shortName: this.wholeName.split(" ")[1],
      link: this.attributes[1],
    }

    return this;
  }

  override generateTeacherData(): this {
    if (!this.wholeName.split(" ")[0]) return this;
    if (!this.attributes || !this.attributes[0]) {
      this.teacherData = {
        shortName: this.wholeName.split(" ")[0],
      }
      return this;

    };

    this.teacherData = {
      shortName: this.wholeName.split(" ")[0],
      link: this.attributes[0],
    }

    return this;
  }
}
const router = express.Router();

router.get("/specifiedTimetable", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const link: string | undefined = req.query.link?.toString();

  if (!link) {
    res.status(400).json({ message: "Please provide a valid link." });
    return;
  }

  const branchType: string | undefined = link.substring(link.lastIndexOf("/") + 1)[0];
  try {
    const timetableWebsiteData = await getWebsiteData(link);

    const lessons: ParsedHTMLElement[] = getLessons(timetableWebsiteData);
    const lessonsByDay: (ParsedHTMLElement | undefined)[][] = getLessonsByDay(lessons);

    const lessonsAsObjects: Lesson[][] = getLessonsAsObject(lessonsByDay, branchType);

    // If lesson is for classes
    addDataToClassLessons(lessonsAsObjects as Lesson[][]);

    res.send(lessonsAsObjects);
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
    const responseObject: {
      teachersData?: TeacherData[],
      classesData: ClassData[],
      classroomsData?: ClassroomData[]
    } = { classesData: [] };
    const schoolWebsiteData: string = await getWebsiteData(link);

    const teachersElements: ParsedHTMLElement[] | null = getSpecifiedElements(schoolWebsiteData, 1);
    if (teachersElements) {
      const teachersData: TeacherData[] = getTeachersData(teachersElements);
      responseObject.teachersData = teachersData;
    }

    const classesElements: ParsedHTMLElement[] | null = getSpecifiedElements(schoolWebsiteData, 0);
    if (!classesElements) {
      res.status(404).json({ message: "No classes found on the website." });
      return;
    }
    const classesData: ClassData[] = getClassesData(classesElements);
    responseObject.classesData = classesData;

    const classroomsElements: ParsedHTMLElement[] | null = getSpecifiedElements(schoolWebsiteData, 2);
    if (classroomsElements) {
      const classroomData: ClassroomData[] = getClassroomsData(classroomsElements);
      responseObject.classroomsData = classroomData;
    }

    res.json(responseObject);
  } catch (err) {
    next(err);
  }
})

function addDataToClassLessons(lessons: Lesson[][]): void {
  lessons.forEach((day: Lesson[]): void => {
    day.forEach((lesson: Lesson) => {
      lesson.generateSubject().generateTeacherData().generateClassroomData().generateClassData();
    })
  })
}

function getLessonsAsObject(lessonsByDay: (ParsedHTMLElement | undefined)[][], branchType: string | undefined): Lesson[][] {
  const lessonsAsObjects: Lesson[][] = []

  lessonsByDay.forEach((day: (ParsedHTMLElement | undefined)[], dayNumber: number) => {
    const daysArray: Lesson[] = [];

    day.forEach((lesson: ParsedHTMLElement | undefined) => {
      if (lesson) {
        const links = lesson.querySelectorAll('a');
        const attributes: string[] = [];
        links.forEach(link => {
          if (link && link.attributes && link.attributes.href) {
            attributes.push(link.attributes.href);
          }
        });

        const lessonNumber: number | undefined = Number(lesson.parentNode.querySelector('.nr')?.innerText);

        const hour: string | undefined = lesson.parentNode.querySelector('.g')?.innerText;

        if (branchType == "o") {
          daysArray.push(new ClassLesson(dayNumber, lesson.innerText, lessonNumber, attributes, hour));
        }
        if (branchType == "n") {
          daysArray.push(new TeacherLesson(dayNumber, lesson.innerText, lessonNumber, attributes, hour));
        }
        if (branchType == "s") {
          daysArray.push(new classroomLesson(dayNumber, lesson.innerText, lessonNumber, attributes, hour));
        }
      }
    })

    lessonsAsObjects.push(daysArray);
  })

  return lessonsAsObjects;
}

function getLessons(timetableWebsiteData: string): ParsedHTMLElement[] {
  const timetableWebsiteDOM: ParsedHTMLElement = parse(timetableWebsiteData);

  const lessons: ParsedHTMLElement[] = [];

  const lessonsElements: ParsedHTMLElement[] = timetableWebsiteDOM.querySelectorAll("td.l");
  lessonsElements.forEach(lessonElement => {
    lessons.push(lessonElement);
  })

  return lessons;
}

function getLessonsByDay(lessons: ParsedHTMLElement[]): (ParsedHTMLElement | undefined)[][] {
  const schoolDays: number = 5;
  const lessonsByDayObject: (ParsedHTMLElement | undefined)[][] = [];

  for (let i = 0; i < schoolDays; i++) {
    const currentDayLessons: (ParsedHTMLElement | undefined)[] = [];
    for (let j = i; j < lessons.length; j += 5) {
      currentDayLessons.push(lessons[j]);
    }

    lessonsByDayObject.push(currentDayLessons);
  }

  return lessonsByDayObject;
}

async function getWebsiteData(schoolLink = "https://zsem.edu.pl/plany/lista.html"): Promise<string> {
  // Fetching data from specified school website
  const request: globalThis.Response = await fetch(schoolLink);

  // School website data in string format
  const schoolWebsiteData: string = await request.text();
  return schoolWebsiteData;
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

function getClassesData(classesElements: ParsedHTMLElement[]): ClassData[] {
  const classesData: ClassData[] = [];
  classesElements.forEach((classElement: ParsedHTMLElement) => {
    if (classElement && classElement.attributes.href) {
      const wholeName: string = classElement.text.trim();
      const link: string = classElement.attributes.href;

      const singleClassData: ClassData = new ClassData(wholeName, link);
      singleClassData.generateClassName().generateProfileName().generateYear();

      classesData.push(singleClassData);
    }
  });

  return classesData;
}

function getClassroomsData(classroomsElements: ParsedHTMLElement[]): ClassroomData[] {
  const classroomsData: ClassroomData[] = [];
  classroomsElements.forEach((classroomElement: ParsedHTMLElement) => {
    if (classroomElement && classroomElement.attributes.href) {
      const wholeName: string = classroomElement.text.trim();
      const link: string = classroomElement.attributes.href;

      const singleClassroomData: ClassroomData = new ClassroomData(wholeName, link);
      singleClassroomData.generateShortName().generateLongName();

      classroomsData.push(singleClassroomData);
    }
  });

  return classroomsData;
}

function getTeachersData(teachersElements: ParsedHTMLElement[]): TeacherData[] {
  const teachersData: TeacherData[] = [];
  teachersElements.forEach((teacherElement: ParsedHTMLElement) => {
    if (teacherElement && teacherElement.attributes.href) {
      const wholeName: string = teacherElement.text.trim();
      const link: string = teacherElement.attributes.href;

      const singleTeacherData: TeacherData = new TeacherData(wholeName, link);
      singleTeacherData.generateShortName().generateLongName();

      teachersData.push(singleTeacherData);
    }
  });

  return teachersData;
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
