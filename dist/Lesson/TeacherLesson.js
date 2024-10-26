import Lesson from "./main.js";
export default class TeacherLesson extends Lesson {
    constructor(lesson, wholeName, lessonNumber, attributes, wholeHour) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }
    setHeader(header, link) {
        if (header) {
            this.header = header;
            this.teacherData.push({
                shortName: this.header,
                link
            });
        }
        if (link) {
            this.teacherAttributes.push(link);
            this.attributes.push(link);
        }
        return this;
    }
    generateSubject() {
        const subject = this.wholeName.split(" ")[1];
        if (!subject)
            return this;
        this.subject.push(subject);
        return this;
    }
    generateClassData() {
        if (!this.wholeName.split(" ")[0])
            return this;
        if (!this.attributes || !this.attributes[0]) {
            this.classData.push({
                shortName: this.wholeName.split(" ")[0],
            });
            return this;
        }
        ;
        this.classData.push({
            shortName: this.wholeName.split(" ")[0],
            link: this.attributes[0],
        });
        return this;
    }
    generateClassroomData() {
        if (!this.wholeName.split(" ")[2])
            return this;
        if (!this.attributes || !this.attributes[1]) {
            this.classroomData.push({
                shortName: this.wholeName.split(" ")[2],
            });
            return this;
        }
        ;
        this.classroomData.push({
            shortName: this.wholeName.split(" ")[2],
            link: this.attributes[1],
        });
        return this;
    }
}
//# sourceMappingURL=TeacherLesson.js.map