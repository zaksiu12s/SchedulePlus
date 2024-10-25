import express from "express";
import { parse } from "node-html-parser";
import TeacherData from "../BranchData/TeacherData.js";
import ClassData from "../BranchData/ClassesData.js";
import ClassroomData from "../BranchData/ClassroomData.js";
import ClassLesson from "../Lesson/ClassLesson.js";
import ClassroomLesson from "../Lesson/ClassroomLesson.js";
import TeacherLesson from "../Lesson/TeacherLesson.js";
const router = express.Router();
router.get("/specifiedTimetable", async (req, res, next) => {
    const link = req.query.link?.toString();
    const formatAsDays = (req.query.formatAsDays == "true");
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
        const lessonElements = getLessonElements(timetableWebsiteData);
        const lessonsAsObjects = getLessonsAsObject(lessonElements, branchType);
        if (!formatAsDays) {
            const responseObject = [];
            lessonsAsObjects.forEach((lesson, index) => {
                lesson.setDayNumber(index);
                responseObject.push(lesson.getData());
            });
            res.send(responseObject);
        }
        if (formatAsDays) {
            const responseObject = [];
            const schoolDays = 5;
            for (let i = 0; i < schoolDays; i++) {
                const currentDayLessons = [];
                for (let j = i; j < lessonsAsObjects.length; j += 5) {
                    currentDayLessons.push(lessonsAsObjects[j]?.setDayNumber(i).getData());
                }
                responseObject.push(currentDayLessons);
            }
            res.send(responseObject);
        }
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
        if (lesson) {
            const links = lesson.querySelectorAll('a');
            const attributes = [];
            links.forEach((link) => {
                if (link.attributes && link.attributes.href) {
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
                lessonObject.generateTeacherData().generateSubject().generateClassroomData().generateClassData().divideToGroups();
                lessonsAsObjects.push(lessonObject);
            }
        }
    });
    return lessonsAsObjects;
}
function getLessonElements(timetableWebsiteData) {
    const timetableWebsiteDOM = parse(timetableWebsiteData);
    const lessons = [];
    const lessonsElements = timetableWebsiteDOM.querySelectorAll("td.l");
    lessonsElements.forEach((lessonElement) => {
        lessons.push(lessonElement);
    });
    return lessons;
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