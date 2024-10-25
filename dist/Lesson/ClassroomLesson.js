import Lesson from "./main.js";
export default class ClassroomLesson extends Lesson {
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
//# sourceMappingURL=ClassroomLesson.js.map