import Lesson from "./main.js";
export default class ClassroomLesson extends Lesson {
    constructor(lesson, wholeName, lessonNumber, attributes, wholeHour) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }
    setHeader(header, link) {
        if (header) {
            this.header = header;
            this.classroomData.push({
                shortName: this.header,
                link
            });
        }
        if (link) {
            this.classroomAttributes.push(link);
            this.attributes.push(link);
        }
        return this;
    }
    generateSubject() {
        if (!this.wholeName)
            return this;
        const subject = this.wholeName.split(" ")[2];
        if (!subject)
            return this;
        this.subject.push(subject);
        return this;
    }
    generateClassData() {
        if (!this.wholeName)
            return this;
        if (!this.wholeName.split(" ")[1])
            return this;
        if (!this.attributes || !this.attributes[1]) {
            this.classData.push({
                shortName: this.wholeName.split(" ")[1],
            });
            return this;
        }
        ;
        this.classData.push({
            shortName: this.wholeName.split(" ")[1],
            link: this.attributes[1],
        });
        return this;
    }
    generateTeacherData() {
        if (!this.wholeName)
            return this;
        if (!this.wholeName.split(" ")[0])
            return this;
        if (!this.attributes || !this.attributes[0]) {
            this.teacherData.push({
                shortName: this.wholeName.split(" ")[0],
            });
            return this;
        }
        ;
        this.teacherData.push({
            shortName: this.wholeName.split(" ")[0],
            link: this.attributes[0],
        });
        return this;
    }
}
//# sourceMappingURL=ClassroomLesson.js.map