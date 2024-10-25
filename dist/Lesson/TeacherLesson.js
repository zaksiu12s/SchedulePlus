import Lesson from "./main.js";
export default class TeacherLesson extends Lesson {
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
//# sourceMappingURL=TeacherLesson.js.map