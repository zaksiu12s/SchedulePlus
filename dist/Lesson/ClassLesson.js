import Lesson from "./main.js";
export default class ClassLesson extends Lesson {
    constructor(lesson, wholeName, lessonNumber, attributes, wholeHour) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }
    generateSubject() {
        this.wholeName.split("\n").forEach((group) => {
            const split = group.trim().split(" ")[0];
            if (split) {
                this.subject.push(split);
            }
        });
        return this;
    }
    generateClassroomData() {
        this.wholeName.split("\n").forEach((group, index) => {
            const split = group.trim().split(" ")[2];
            const attributes = this.classroomAttributes;
            if (split && attributes[index]) {
                this.classroomData.push({
                    shortName: split.trim(),
                    link: attributes[index],
                });
            }
            ;
        });
        return this;
    }
    generateTeacherData() {
        this.wholeName.split("\n").forEach((group, index) => {
            const split = group.trim().split(" ")[1];
            const attributes = this.teacherAttributes;
            if (split && attributes[index]) {
                this.teacherData.push({
                    shortName: split.trim(),
                    link: attributes[index],
                });
            }
            ;
        });
        return this;
    }
    setHeader(header, link) {
        if (header) {
            this.header = header;
            this.classData.push({
                shortName: this.header,
                link
            });
        }
        if (link) {
            this.classAttributes.push(link);
            this.attributes.push(link);
        }
        return this;
    }
}
//# sourceMappingURL=ClassLesson.js.map