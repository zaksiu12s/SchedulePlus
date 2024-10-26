import Lesson from "./main.js";
export default class ClassroomLesson extends Lesson {
    constructor(lesson, wholeName, lessonNumber, attributes, wholeHour) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }
    setHeader(header, link) {
        this.header = header || null;
        this.classroomData.push({
            shortName: this.header || null,
            link: link || null
        });
        if (link) {
            this.classroomAttributes.push(link);
            this.attributes.push(link);
        }
        return this;
    }
    generateSubject() {
        const subject = this.wholeName?.split(" ")[2];
        if (subject) {
            this.subject.push(subject);
        }
        return this;
    }
    generateClassData() {
        const shortName = this.wholeName?.split(" ")[1];
        this.classData.push({
            shortName: shortName || null,
            link: this.attributes[1] || null,
        });
        return this;
    }
    generateTeacherData() {
        const shortName = this.wholeName?.split(" ")[0];
        this.teacherData.push({
            shortName: shortName || null,
            link: this.attributes[0] || null,
        });
        return this;
    }
}
//# sourceMappingURL=ClassroomLesson.js.map