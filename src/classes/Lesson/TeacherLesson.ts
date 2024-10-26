import Lesson from "./main.js";
import { HTMLElement as ParsedHTMLElement } from "node-html-parser";

export default class TeacherLesson extends Lesson {
    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }

    override setHeader(header: string | undefined, link: string | undefined): this {
        this.header = header || null;

        this.teacherData.push({
            shortName: this.header || null,
            link: link || null
        });

        if (link) {
            this.teacherAttributes.push(link);
            this.attributes.push(link);
        }

        return this;
    }

    override generateSubject(): this {
        const subject: string | undefined = this.wholeName?.split(" ")[1]

        if (subject) {
            this.subject.push(subject);
        }

        return this;
    }

    override generateClassData(): this {
        const shortName: string | undefined = this.wholeName?.split(" ")[0]

        this.classData.push({
            shortName: shortName || null,
            link: this.attributes[0] || null,
        })

        return this;
    }

    override generateClassroomData(): this {
        const shortName: string | undefined = this.wholeName?.split(" ")[2];

        this.classroomData.push({
            shortName: shortName || null,
            link: this.attributes[1] || null,
        })

        return this;
    }
}