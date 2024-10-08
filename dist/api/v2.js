import express from "express";
import { parse } from "node-html-parser";
import "dotenv/config";
class ClassroomData {
    constructor(wholeName, link) {
        this.wholeName = wholeName;
        this.link = link.substring(link.indexOf("/") + 1);
    }
    generateShortName() {
        if (this.wholeName.indexOf(" ") == -1)
            return this;
        const shortName = this.wholeName.substring(0, this.wholeName.indexOf(" "));
        this.shortName = shortName;
        return this;
    }
    generateLongName() {
        if (this.wholeName.indexOf(" ") == -1)
            return this;
        const longName = this.wholeName.substring(this.wholeName.indexOf(" ") + 1);
        this.longName = longName;
        return this;
    }
}
class TeacherData {
    constructor(wholeName, link) {
        this.wholeName = wholeName;
        this.link = link.substring(link.indexOf("/") + 1);
    }
    ;
    generateShortName() {
        if (this.wholeName.indexOf("(") == -1 || this.wholeName.indexOf(")") == -1)
            return this;
        const shortNameStart = this.wholeName.indexOf("(") + 1;
        const shortNameEnd = this.wholeName.indexOf(")");
        const shortName = this.wholeName.substring(shortNameStart, shortNameEnd).trim();
        this.shortName = shortName;
        return this;
    }
    generateLongName() {
        if (this.wholeName.indexOf("(") == -1)
            return this;
        const longNameEnd = this.wholeName.indexOf("(");
        const longName = this.wholeName.substring(0, longNameEnd).trim();
        this.longName = longName;
        return this;
    }
}
class ClassData {
    constructor(wholeName, link) {
        this.wholeName = wholeName;
        this.link = link.substring(link.indexOf("/") + 1);
    }
    generateClassName() {
        if (this.wholeName.indexOf(" ") == -1)
            return this;
        const classNameEnd = this.wholeName.indexOf(" ");
        this.className = this.wholeName.substring(0, classNameEnd);
        return this;
    }
    generateProfileName() {
        if (this.wholeName.indexOf(" ") == -1)
            return this;
        // Adding 2 because the profile name is like: 2informatyk so as to delete the 2 in front
        const profileNameStart = this.wholeName.indexOf(" ") + 2;
        this.profileName = this.wholeName.substring(profileNameStart);
        return this;
    }
    generateYear() {
        if (this.wholeName.indexOf(" ") == -1)
            return this;
        const yearStart = this.wholeName.indexOf(" ") + 1;
        const yearEnd = yearStart + 1;
        const year = Number(this.wholeName.substring(yearStart, yearEnd));
        if (isNaN(year)) {
            return this;
        }
        this.year = year;
        return this;
    }
}
const router = express.Router();
router.get("/allBranches", async (req, res, next) => {
    try {
        const schoolWebsiteData = await getWebsiteData();
        const teachersElements = getTeachersElements(schoolWebsiteData);
        if (!teachersElements) {
            res.status(404).json({ message: "No teachers found on the website." });
            return;
        }
        const teachersData = getTeachersData(teachersElements);
        const classesElements = getClassesElements(schoolWebsiteData);
        if (!classesElements) {
            res.status(404).json({ message: "No classes found on the website." });
            return;
        }
        const classesData = getClassesData(classesElements);
        const classroomsElements = getClassroomsElements(schoolWebsiteData);
        if (!classroomsElements) {
            res.status(404).json({ message: "No classrooms found on the website." });
            return;
        }
        const classroomData = getClassroomsData(classroomsElements);
        res.json({ classroomData, teachersData, classesData });
    }
    catch (err) {
        next(err);
    }
});
async function getWebsiteData(schoolLink = "https://zsem.edu.pl/plany/lista.html") {
    // Fetching data from specified school website
    const request = await fetch(schoolLink);
    // School website data in string format
    const schoolWebsiteData = await request.text();
    return schoolWebsiteData;
}
function getTeachersElements(schoolWebsiteData) {
    const schoolWebsiteDOM = parse(schoolWebsiteData);
    const list = schoolWebsiteDOM.querySelectorAll("ul")[1];
    if (!list)
        return null;
    const teachersList = list.querySelectorAll("a");
    if (teachersList && teachersList.length <= 0)
        return null;
    return teachersList;
}
function getClassesElements(schoolWebsiteData) {
    const schoolWebsiteDOM = parse(schoolWebsiteData);
    const list = schoolWebsiteDOM.querySelectorAll("ul")[0];
    if (!list)
        return null;
    const classList = list.querySelectorAll("a");
    if (classList && classList.length <= 0)
        return null;
    return classList;
}
function getClassroomsElements(schoolWebsiteData) {
    const schoolWebsiteDOM = parse(schoolWebsiteData);
    const list = schoolWebsiteDOM.querySelectorAll("ul")[2];
    if (!list)
        return null;
    const classroomList = list.querySelectorAll("a");
    if (classroomList && classroomList.length <= 0)
        return null;
    return classroomList;
}
function getClassesData(classesElements) {
    const classesData = [];
    classesElements.forEach((classElement) => {
        if (classElement && classElement.attributes.href) {
            const wholeName = classElement.text.trim();
            const link = classElement.attributes.href;
            const singleClassData = new ClassData(wholeName, link);
            singleClassData.generateClassName().generateProfileName().generateYear();
            classesData.push(singleClassData);
        }
    });
    return classesData;
}
function getClassroomsData(classroomsElements) {
    const classroomsData = [];
    classroomsElements.forEach((classroomElement) => {
        if (classroomElement && classroomElement.attributes.href) {
            const wholeName = classroomElement.text.trim();
            const link = classroomElement.attributes.href;
            const singleClassroomData = new ClassroomData(wholeName, link);
            singleClassroomData.generateShortName().generateLongName();
            classroomsData.push(singleClassroomData);
        }
    });
    return classroomsData;
}
function getTeachersData(teachersElements) {
    const teachersData = [];
    teachersElements.forEach((teacherElement) => {
        if (teacherElement && teacherElement.attributes.href) {
            const wholeName = teacherElement.text.trim();
            const link = teacherElement.attributes.href;
            const singleTeacherData = new TeacherData(wholeName, link);
            singleTeacherData.generateShortName().generateLongName();
            teachersData.push(singleTeacherData);
        }
    });
    return teachersData;
}
router.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json({
        status: "failed",
        notes: "internal server error",
        error: error,
    });
});
export default router;
//# sourceMappingURL=v2.js.map