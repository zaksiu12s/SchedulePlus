import Lesson from "./main.js";
export default class TeacherLesson extends Lesson {
    constructor(lesson, wholeName, lessonNumber, attributes, wholeHour) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }
    setHeader(header, link) {
        this.header = header || null;
        this.teacherData.push({
            shortName: this.header || null,
            link: link || null
        });
        if (link) {
            this.teacherAttributes.push(link);
            this.attributes.push(link);
        }
        return this;
    }
    generateSubject() {
        const subject = this.wholeName?.split(" ")[1];
        if (subject) {
            this.subject.push(subject);
        }
        return this;
    }
    generateClassData() {
        const shortName = this.wholeName?.split(" ")[0];
        this.classData.push({
            shortName: shortName || null,
            link: this.attributes[0] || null,
        });
        return this;
    }
    generateClassroomData() {
        const shortName = this.wholeName?.split(" ")[2];
        this.classroomData.push({
            shortName: shortName || null,
            link: this.attributes[1] || null,
        });
        return this;
    }
}
//# sourceMappingURL=TeacherLesson.js.map