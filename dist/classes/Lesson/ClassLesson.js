import Lesson from "./main.js";
export default class ClassLesson extends Lesson {
    constructor(lesson, wholeName, lessonNumber, attributes, wholeHour) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }
    setHeader(header, link) {
        this.header = header || null;
        this.classData.push({
            shortName: this.header,
            link: link || null
        });
        if (link) {
            this.classAttributes.push(link);
            this.attributes.push(link);
        }
        return this;
    }
    generateSubject() {
        this.wholeName?.split("\n").forEach((group) => {
            const split = group.trim().split(" ")[0];
            if (split) {
                this.subject.push(split);
            }
        });
        return this;
    }
    generateClassroomData() {
        this.wholeName?.split("\n").forEach((group, index) => {
            const split = group.trim().split(" ")[2];
            const attributes = this.classroomAttributes;
            this.classroomData.push({
                shortName: split?.trim() || null,
                link: attributes[index] || null,
            });
        });
        return this;
    }
    generateTeacherData() {
        this.wholeName?.split("\n").forEach((group, index) => {
            const split = group.trim().split(" ")[1];
            const attributes = this.teacherAttributes;
            this.teacherData.push({
                shortName: split?.trim() || null,
                link: attributes[index] || null,
            });
        });
        return this;
    }
}
//# sourceMappingURL=ClassLesson.js.map