import { HTMLElement as ParsedHTMLElement } from "node-html-parser";
import Lesson from "./main.js";

export default class ClassroomLesson extends Lesson {
    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }

    override setHeader(header: string | undefined, link: string | undefined): this {
        this.header = header || null;

        this.classroomData.push({
            shortName: this.header || null,
            link: link || null
        });

        if (link) {
            this.classroomAttributes.push(link);
            this.attributes.push(link);
        }

        return this;
    }

    override generateSubject(): this {
        const subject: string | undefined = this.wholeName?.split(" ")[2];

        if (subject) {
            this.subject.push(subject);
        }

        return this;
    }

    override generateClassData(): this {
        const shortName: string | undefined = this.wholeName?.split(" ")[1];

        this.classData.push({
            shortName: shortName || null,
            link: this.attributes[1] || null,
        })

        return this;
    }

    override generateTeacherData(): this {
        const shortName: string | undefined = this.wholeName?.split(" ")[0];

        this.teacherData.push({
            shortName: shortName || null,
            link: this.attributes[0] || null,
        })

        return this;
    }
}