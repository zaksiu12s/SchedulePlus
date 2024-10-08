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

const router = express.Router();

router.get("/allBranches", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schoolWebsiteData: string = await getWebsiteData();

    const teachersElements: ParsedHTMLElement[] | null = getTeachersElements(schoolWebsiteData);
    if (!teachersElements) {
      res.status(404).json({ message: "No teachers found on the website." });
      return;
    }
    const teachersData = getTeachersData(teachersElements);

    const classesElements: ParsedHTMLElement[] | null = getClassesElements(schoolWebsiteData);
    if (!classesElements) {
      res.status(404).json({ message: "No classes found on the website." });
      return;
    }
    const classesData = getClassesData(classesElements);

    const classroomsElements: ParsedHTMLElement[] | null = getClassroomsElements(schoolWebsiteData);
    if (!classroomsElements) {
      res.status(404).json({ message: "No classrooms found on the website." });
      return;
    }
    const classroomData = getClassroomsData(classroomsElements);

    res.json({ classroomData, teachersData, classesData });
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

function getTeachersElements(schoolWebsiteData: string) {
  const schoolWebsiteDOM = parse(schoolWebsiteData);

  const list = schoolWebsiteDOM.querySelectorAll("ul")[1];
  if (!list) return null;

  const teachersList = list.querySelectorAll("a");
  if (teachersList && teachersList.length <= 0) return null;

  return teachersList;
}

function getClassesElements(schoolWebsiteData: string) {
  const schoolWebsiteDOM = parse(schoolWebsiteData);

  const list = schoolWebsiteDOM.querySelectorAll("ul")[0];
  if (!list) return null;

  const classList = list.querySelectorAll("a");
  if (classList && classList.length <= 0) return null;

  return classList;
}

function getClassroomsElements(schoolWebsiteData: string) {
  const schoolWebsiteDOM = parse(schoolWebsiteData);

  const list = schoolWebsiteDOM.querySelectorAll("ul")[2];
  if (!list) return null;

  const classroomList = list.querySelectorAll("a");
  if (classroomList && classroomList.length <= 0) return null;

  return classroomList;
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
