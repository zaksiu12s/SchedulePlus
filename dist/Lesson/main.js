export default class Lesson {
    constructor(lesson, wholeName, lessonNumber, attributes, wholeHour) {
        this.schoolDays = 5;
        this.wholeName = null;
        this.lessonNumber = null;
        this.teacherData = [];
        this.classroomData = [];
        this.classData = [];
        this.subject = [];
        this.attributes = [];
        this.wholeHour = null;
        this.startHour = null;
        this.endHour = null;
        this.dayNumber = null;
        this.classAttributes = [];
        this.teacherAttributes = [];
        this.classroomAttributes = [];
        this.lesson = lesson;
        if (lessonNumber && !isNaN(lessonNumber))
            this.lessonNumber = lessonNumber - 1;
        if (wholeName !== "&nbsp;") {
            this.wholeName = wholeName.replace("\n", " \n ").trim();
        }
        if (attributes && attributes.length > 0)
            this.attributes = attributes;
        if (wholeHour) {
            this.wholeHour = wholeHour;
            const hourSplit = this.wholeHour.split("-");
            if (hourSplit.length === 2 && hourSplit[0] && hourSplit[1]) {
                this.startHour = hourSplit[0].trim();
                this.endHour = hourSplit[1].trim();
            }
        }
        if (attributes) {
            this.setSpecifiedAttribute();
        }
    }
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
    setSpecifiedAttribute() {
        this.attributes?.forEach((attribute) => {
            if (attribute.indexOf("o") !== -1) {
                this.classAttributes.push(attribute);
            }
            else if (attribute.indexOf("s") !== -1) {
                this.classroomAttributes.push(attribute);
            }
            else if (attribute.indexOf("n") !== -1) {
                this.teacherAttributes.push(attribute);
            }
        });
        return this;
    }
    setHeader(header, link) { return this; }
    ;
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
            classAttributes: this.classAttributes,
            teacherAttributes: this.teacherAttributes,
            classroomAttributes: this.classroomAttributes,
        };
    }
}
//# sourceMappingURL=main.js.map