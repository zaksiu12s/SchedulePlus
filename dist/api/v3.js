import express from "express";
import { parse } from "node-html-parser";
import TeacherData from "../classes/BranchData/TeacherData.js";
import ClassData from "../classes/BranchData/ClassesData.js";
import ClassroomData from "../classes/BranchData/ClassroomData.js";
import ClassLesson from "../classes/Lesson/ClassLesson.js";
import ClassroomLesson from "../classes/Lesson/ClassroomLesson.js";
import TeacherLesson from "../classes/Lesson/TeacherLesson.js";
const router = express.Router();
router.get("/specifiedTimetable", async (req, res, next) => {
    const link = req.query.link?.toString();
    const formatAsDays = (req.query.formatAsDays == "true");
    const shortLink = link?.substring(link.lastIndexOf("/") + 1);
    if (!link) {
        res.status(400).json({ message: "Please provide a valid link." });
        return;
    }
    const branchType = link.substring(link.lastIndexOf("/") + 1)[0];
    if (!branchType || (branchType !== "n" && branchType !== "s" && branchType !== "o")) {
        res.status(400).json({ message: "Please provide a valid link." });
        return;
    }
    try {
        const timetableWebsiteData = await getWebsiteData(link);
        const timetableWebsiteDataDOM = parse(timetableWebsiteData);
        const header = timetableWebsiteDataDOM.querySelector(".tytulnapis")?.innerText;
        const lessonElements = timetableWebsiteDataDOM.querySelectorAll("td.l");
        const lessonsAsObjects = getLessonsAsObject(lessonElements, branchType);
        res.send(createResponseObject(lessonsAsObjects, header, shortLink, formatAsDays));
    }
    catch (err) {
        next(err);
        return;
    }
});
router.get("/allBranches", async (req, res, next) => {
    const link = req.query.link?.toString();
    if (!link) {
        res.status(400).json({ message: "Please provide a valid link." });
    }
    try {
        const responseObject = [];
        const schoolWebsiteData = await getWebsiteData(link);
        for (let i = 0; i <= 2; i++) {
            const branchElements = getSpecifiedElements(schoolWebsiteData, i);
            if (branchElements) {
                const branchData = getBranchData(branchElements, i);
                responseObject[i] = branchData;
            }
        }
        res.json(responseObject);
    }
    catch (err) {
        next(err);
    }
});
function createResponseObject(lessonsAsObjects, header, shortLink, asDays) {
    const schoolDays = 5;
    if (!asDays) {
        return lessonsAsObjects.map((lesson, index) => lesson.setDayNumber(index).setHeader(header, shortLink).getData());
    }
    const daysOfLessons = [];
    for (let day = 0; day < schoolDays; day++) {
        const lessonsForDay = lessonsAsObjects
            .filter((_, index) => index % schoolDays === day)
            .map((lesson) => lesson.setDayNumber(day).setHeader(header, shortLink).getData());
        daysOfLessons.push(lessonsForDay);
    }
    return daysOfLessons;
}
;
async function getWebsiteData(schoolLink = "https://zsem.edu.pl/plany/lista.html") {
    // Fetching data from specified school website
    const request = await fetch(schoolLink);
    // School website data in string format
    const schoolWebsiteData = await request.text();
    return schoolWebsiteData;
}
function getLessonsAsObject(lessonsByDay, branchType) {
    const lessonsAsObjects = [];
    lessonsByDay.forEach((lesson) => {
        const links = lesson.querySelectorAll('a');
        const attributes = [];
        links.forEach((link) => {
            if (link.attributes.href) {
                attributes.push(link.attributes.href);
            }
        });
        const lessonNumber = Number(lesson.parentNode.querySelector('.nr')?.innerText);
        const hour = lesson.parentNode.querySelector('.g')?.innerText;
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
    });
    return lessonsAsObjects;
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
function getBranchData(classesElements, branchType) {
    const classesData = [];
    classesElements.forEach((classElement) => {
        if (classElement && classElement.attributes.href) {
            const wholeName = classElement.text.trim();
            const link = classElement.attributes.href;
            let singleClassData;
            if (branchType == 0) {
                singleClassData = new ClassData(wholeName, link);
                singleClassData.generateClassName().generateProfileName().generateYear().generateShortName().generateLongName();
                classesData.push(singleClassData);
            }
            else if (branchType == 1) {
                singleClassData = new TeacherData(wholeName, link);
                singleClassData.generateClassName().generateProfileName().generateYear().generateShortName().generateLongName();
                classesData.push(singleClassData);
            }
            else if (branchType == 2) {
                singleClassData = new ClassroomData(wholeName, link);
                singleClassData.generateClassName().generateProfileName().generateYear().generateShortName().generateLongName();
                classesData.push(singleClassData);
            }
        }
    });
    return classesData;
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
//# sourceMappingURL=v3.js.map