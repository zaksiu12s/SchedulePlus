import Lesson from "./main.js";
import { HTMLElement as ParsedHTMLElement } from "node-html-parser";

export default class ClassLesson extends Lesson {
    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }

    override generateSubject(): this {
        this.wholeName.split("\n").forEach((group) => {
            const split = group.trim().split(" ")[0];

            if (split) {
                this.subject.push(split);
            }
        })

        return this;
    }

    override generateClassroomData(): this {
        this.wholeName.split("\n").forEach((group, index) => {
            const split = group.trim().split(" ")[2];
            const attributes = this.classroomAttributes;
            if (split && attributes[index]) {
                this.classroomData.push({
                    shortName: split.trim(),
                    link: attributes[index],
                });
            };
        })

        return this;
    }

    override generateTeacherData(): this {
        this.wholeName.split("\n").forEach((group, index) => {
            const split = group.trim().split(" ")[1];
            const attributes = this.teacherAttributes;
            if (split && attributes[index]) {
                this.teacherData.push({
                    shortName: split.trim(),
                    link: attributes[index],
                });
            };
        })

        return this;
    }

    override setHeader(header: string | undefined, link: string | undefined): this {
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