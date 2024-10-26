import Lesson from "./main.js";
import { HTMLElement as ParsedHTMLElement } from "node-html-parser";

export default class TeacherLesson extends Lesson {
    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string) {
        super(lesson, wholeName, lessonNumber, attributes, wholeHour);
    }

    override setHeader(header: string | undefined, link: string | undefined): this {
        if (header) {
            this.header = header;
            this.teacherData.push({
                shortName: this.header,
                link
            });
        }

        if (link) {
            this.teacherAttributes.push(link);
            this.attributes.push(link);
        }

        return this;
    }

    override generateSubject(): this {
        if (!this.wholeName) return this;
        const subject = this.wholeName.split(" ")[1]
        if (!subject) return this;

        this.subject.push(subject);

        return this;
    }

    override generateClassData(): this {
        if (!this.wholeName) return this;
        if (!this.wholeName.split(" ")[0]) return this;
        if (!this.attributes || !this.attributes[0]) {
            this.classData.push({
                shortName: this.wholeName.split(" ")[0],
            })

            return this;
        };

        this.classData.push({
            shortName: this.wholeName.split(" ")[0],
            link: this.attributes[0],
        })

        return this;
    }

    override generateClassroomData(): this {
        if (!this.wholeName) return this;
        if (!this.wholeName.split(" ")[2]) return this;
        if (!this.attributes || !this.attributes[1]) {
            this.classroomData.push({
                shortName: this.wholeName.split(" ")[2],
            })

            return this;
        };

        this.classroomData.push({
            shortName: this.wholeName.split(" ")[2],
            link: this.attributes[1],
        })

        return this;
    }
}