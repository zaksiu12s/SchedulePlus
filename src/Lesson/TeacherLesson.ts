import Lesson from "./main.js";
import { HTMLElement as ParsedHTMLElement } from "node-html-parser";

export default class TeacherLesson extends Lesson {
    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }

    override setHeader(header: string | undefined, link: string | undefined): this {
        if (header) {
            this.header = header;
            this.teacherData = {
                shortName: this.header,
                link
            };
        }

        return this;
    }

    override generateSubject(): this {
        if (!this.wholeName.split(" ")[1]) return this;

        this.subject = this.wholeName.split(" ")[1];

        return this;
    }

    override generateClassData(): this {
        if (!this.wholeName.split(" ")[0]) return this;
        if (!this.attributes || !this.attributes[0]) {
            this.classData = {
                shortName: this.wholeName.split(" ")[0],
            }

            return this;
        };

        this.classData = {
            shortName: this.wholeName.split(" ")[0],
            link: this.attributes[0],
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