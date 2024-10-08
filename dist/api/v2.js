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
        const responseObject = { classesData: [] };
        const schoolWebsiteData = await getWebsiteData();
        const teachersElements = getSpecifiedElements(schoolWebsiteData, 1);
        if (teachersElements) {
            const teachersData = getTeachersData(teachersElements);
            responseObject.teachersData = teachersData;
        }
        const classesElements = getSpecifiedElements(schoolWebsiteData, 0);
        if (!classesElements) {
            res.status(404).json({ message: "No classes found on the website." });
            return;
        }
        const classesData = getClassesData(classesElements);
        responseObject.classesData = classesData;
        const classroomsElements = getSpecifiedElements(schoolWebsiteData, 2);
        if (classroomsElements) {
            const classroomData = getClassroomsData(classroomsElements);
            responseObject.classroomsData = classroomData;
        }
        res.json(responseObject);
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
function getSpecifiedElements(schoolWebsiteData, elementsType) {
    const schoolWebsiteDOM = parse(schoolWebsiteData);
    if (elementsType > 2 || elementsType < 0) {
        return null;
    }
    const list = schoolWebsiteDOM.querySelectorAll("ul")[elementsType];
    if (!list)
        return null;
    const specifiedList = list.querySelectorAll("a");
    if (specifiedList && specifiedList.length <= 0)
        return null;
    return specifiedList;
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