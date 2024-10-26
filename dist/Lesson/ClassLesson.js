import Lesson from "./main.js";
export default class ClassLesson extends Lesson {
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
        const teacherDataArray = [];
        this.wholeName.split("\n").forEach((group, index) => {
            const split = group.trim().split(" ")[1];
            const attributes = this.teacherAttributes;
            if (split && attributes[index]) {
                teacherDataArray.push({
                    shortName: split.trim(),
                    link: attributes[index],
                });
            }
            ;
        });
        this.teacherData = teacherDataArray;
        const classroomDataArray = [];
        this.wholeName.split("\n").forEach((group, index) => {
            const split = group.trim().split(" ")[2];
            const attributes = this.classroomAttributes;
            if (split && attributes[index]) {
                classroomDataArray.push({
                    shortName: split.trim(),
                    link: attributes[index],
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
    setHeader(header, link) {
        if (header) {
            this.header = header;
            this.classData = {
                shortName: this.header,
                link
            };
        }
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
//# sourceMappingURL=ClassLesson.js.map