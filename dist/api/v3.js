import express from "express";
import { parse } from "node-html-parser";
class BranchData {
    generateShortName() { return this; }
    ;
    generateLongName() { return this; }
    ;
    generateProfileName() { return this; }
    ;
    generateClassName() { return this; }
    ;
    generateYear() { return this; }
    ;
    constructor(wholeName, link) {
        this.wholeName = wholeName;
        this.link = link.substring(link.indexOf("/") + 1);
    }
}
class ClassroomData extends BranchData {
    constructor(wholeName, link) {
        super(wholeName, link);
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
class TeacherData extends BranchData {
    constructor(wholeName, link) {
        super(wholeName, link);
    }
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
class ClassData extends BranchData {
    constructor(wholeName, link) {
        super(wholeName, link);
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
class Lesson {
    constructor(lesson, wholeName, lessonNumber, attributes, wholeHour) {
        this.schoolDays = 5;
        this.lesson = lesson;
        if (lessonNumber && !isNaN(lessonNumber))
            this.lessonNumber = lessonNumber - 1;
        this.wholeName = wholeName.replace("\n", " \n ").trim();
        if (attributes && attributes.length > 0)
            this.attributes = attributes;
        if (wholeHour) {
            this.wholeHour = wholeHour.trim();
            const hourSplit = this.wholeHour.split("-");
            if (hourSplit.length === 2 && hourSplit[0] && hourSplit[1]) {
                this.startHour = hourSplit[0].trim();
                this.endHour = hourSplit[1].trim();
            }
        }
    }
    divideToGroups() { }
    generateSubject() { return this; }
    ;
    generateClassroomData() { return this; }
    ;
    generateTeacherData() { return this; }
    ;
    generateClassData() { return this; }
    ;
    setDayNumber(dayNumber) {
        this.dayNumber = dayNumber % 5;
        return this;
    }
    getData() {
        return {
            wholeName: this.wholeName,
            lessonNumber: this.lessonNumber,
            teacherData: this.teacherData,
            classroomData: this.classroomData,
            classData: this.classData,
            subject: this.subject,
            attributes: this.attributes,
            wholeHour: this.wholeHour,
            startHour: this.startHour,
            endHour: this.endHour,
            dayNumber: this.dayNumber,
        };
    }
}
class ClassLesson extends Lesson {
    constructor(lesson, wholeName, lessonNumber, attributes, wholeHour) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }
    generateSubject() {
        if (!this.wholeName.split(" ")[0])
            return this;
        this.subject = this.wholeName.split(" ")[0];
        return this;
    }
    generateTeacherData() {
        if (!this.wholeName.split(" ")[1])
            return this;
        if (!this.attributes || !this.attributes[0]) {
            this.teacherData = {
                shortName: this.wholeName.split(" ")[1],
            };
            return this;
        }
        ;
        this.teacherData = {
            shortName: this.wholeName.split(" ")[1],
            link: this.attributes[0],
        };
        return this;
    }
    divideToGroups() {
        if (!this.wholeName.split("\n")[1])
            return this;
        if (!this.attributes || !this.attributes[2])
            return this;
        const teacherDataArray = [];
        this.wholeName.split("\n").forEach((group, index) => {
            const split = group.trim().split(" ")[1];
            const attributes = this.attributes;
            if (split !== undefined && attributes && (index * 2) in attributes) {
                teacherDataArray.push({
                    shortName: split.trim(),
                });
            }
            ;
        });
        this.teacherData = teacherDataArray;
        const classroomDataArray = [];
        this.wholeName.split("\n").forEach((group) => {
            const split = group.trim().split(" ")[2];
            if (split) {
                classroomDataArray.push({
                    shortName: split.trim(),
                });
            }
            ;
        });
        this.classroomData = classroomDataArray;
        const subjectArray = [];
        this.wholeName.split("\n").forEach((group) => {
            const split = group.trim().split(" ")[0];
            if (split) {
                subjectArray.push(split);
            }
        });
        this.subject = subjectArray;
        return this;
    }
    generateClassroomData() {
        if (!this.wholeName.split(" ")[2])
            return this;
        if (!this.attributes || !this.attributes[1]) {
            this.classroomData = {
                shortName: this.wholeName.split(" ")[2],
            };
            return this;
        }
        ;
        this.classroomData = {
            shortName: this.wholeName.split(" ")[2],
            link: this.attributes[1],
        };
        return this;
    }
}
class TeacherLesson extends Lesson {
    constructor(lesson, wholeName, lessonNumber, attributes, wholeHour) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }
    generateSubject() {
        if (!this.wholeName.split(" ")[1])
            return this;
        this.subject = this.wholeName.split(" ")[1];
        return this;
    }
    generateClassData() {
        if (!this.wholeName.split(" ")[0])
            return this;
        if (!this.attributes || !this.attributes[0]) {
            this.classData = {
                shortName: this.wholeName.split(" ")[0],
            };
            return this;
        }
        ;
        this.classData = {
            shortName: this.wholeName.split(" ")[0],
            link: this.attributes[0],
        };
        return this;
    }
    generateClassroomData() {
        if (!this.wholeName.split(" ")[2])
            return this;
        if (!this.attributes || !this.attributes[1]) {
            this.classroomData = {
                shortName: this.wholeName.split(" ")[2],
            };
            return this;
        }
        ;
        this.classroomData = {
            shortName: this.wholeName.split(" ")[2],
            link: this.attributes[1],
        };
        return this;
    }
}
class ClassroomLesson extends Lesson {
    constructor(lesson, wholeName, lessonNumber, attributes, wholeHour) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }
    generateSubject() {
        if (!this.wholeName.split(" ")[2])
            return this;
        this.subject = this.wholeName.split(" ")[2];
        return this;
    }
    generateClassData() {
        if (!this.wholeName.split(" ")[1])
            return this;
        if (!this.attributes || !this.attributes[1]) {
            this.classData = {
                shortName: this.wholeName.split(" ")[1],
            };
            return this;
        }
        ;
        this.classData = {
            shortName: this.wholeName.split(" ")[1],
            link: this.attributes[1],
        };
        return this;
    }
    generateTeacherData() {
        if (!this.wholeName.split(" ")[0])
            return this;
        if (!this.attributes || !this.attributes[0]) {
            this.teacherData = {
                shortName: this.wholeName.split(" ")[0],
            };
            return this;
        }
        ;
        this.teacherData = {
            shortName: this.wholeName.split(" ")[0],
            link: this.attributes[0],
        };
        return this;
    }
}
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