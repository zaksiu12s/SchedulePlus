import Lesson from "./main.js";
import { HTMLElement as ParsedHTMLElement } from "node-html-parser";

export default class ClassLesson extends Lesson {
    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }

    override setHeader(header: string | undefined, link: string | undefined): this {
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

    override generateSubject(): this {
        this.wholeName?.split("\n").forEach((group) => {
            const split: string | undefined = group.trim().split(" ")[0];

            if (split) {
                this.subject.push(split);
            }
        })

        return this;
    }

    override generateClassroomData(): this {
        this.wholeName?.split("\n").forEach((group, index) => {
            const split: string | undefined = group.trim().split(" ")[2];
            const attributes: string[] = this.classroomAttributes;

            this.classroomData.push({
                shortName: split?.trim() || null,
                link: attributes[index] || null,
            });
        })

        return this;
    }

    override generateTeacherData(): this {
        this.wholeName?.split("\n").forEach((group, index) => {
            const split: string | undefined = group.trim().split(" ")[1];
            const attributes: string[] = this.teacherAttributes;

            this.teacherData.push({
                shortName: split?.trim() || null,
                link: attributes[index] || null,
            });
        })

        return this;
    }
}