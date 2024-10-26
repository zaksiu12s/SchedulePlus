import Lesson from "./main.js";
import { HTMLElement as ParsedHTMLElement } from "node-html-parser";

export default class ClassLesson extends Lesson {
    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }

    override generateSubject(): this {
        if (!this.wholeName.split(" ")[0]) return this;

        this.subject = this.wholeName.split(" ")[0];

        return this;
    }
    override generateTeacherData(): this {
        if (!this.wholeName.split(" ")[1]) return this;
        if (!this.attributes || !this.attributes[0]) {
            this.teacherData = {
                shortName: this.wholeName.split(" ")[1],
            }

            return this;
        };

        this.teacherData = {
            shortName: this.wholeName.split(" ")[1],
            link: this.attributes[0],
        }

        return this;
    }

    override divideToGroups(): this {
        const teacherDataArray: { shortName: string, link?: string | undefined }[] = [];
        this.wholeName.split("\n").forEach((group, index) => {
            const split = group.trim().split(" ")[1];
            const attributes = this.teacherAttributes;
            if (split && attributes[index]) {
                teacherDataArray.push({
                    shortName: split.trim(),
                    link: attributes[index],
                });
            };
        })

        this.teacherData = teacherDataArray;

        const classroomDataArray: { shortName: string, link?: string | undefined }[] = [];
        this.wholeName.split("\n").forEach((group, index) => {
            const split = group.trim().split(" ")[2];
            const attributes = this.classroomAttributes;
            if (split && attributes[index]) {
                classroomDataArray.push({
                    shortName: split.trim(),
                    link: attributes[index],
                });
            };
        })

        this.classroomData = classroomDataArray;

        const subjectArray: string[] = [];
        this.wholeName.split("\n").forEach((group) => {
            const split = group.trim().split(" ")[0];

            if (split) {
                subjectArray.push(split);
            }
        })

        this.subject = subjectArray;

        return this;
    }

    override setHeader(header: string | undefined, link: string | undefined): this {
        if (header) {
            this.header = header;
            this.classData = {
                shortName: this.header,
                link
            };
        }

        return this;
    }

    override generateClassroomData(): this {
        if (!this.wholeName.split(" ")[2]) return this;
        if (!this.attributes || !this.attributes[1]) {
            this.classroomData = {
                shortName: this.wholeName.split(" ")[2],
            }

            return this;
        };

        this.classroomData = {
            shortName: this.wholeName.split(" ")[2],
            link: this.attributes[1],
        }

        return this;
    }
}