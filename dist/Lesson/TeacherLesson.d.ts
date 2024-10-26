import Lesson from "./main.js";
import { HTMLElement as ParsedHTMLElement } from "node-html-parser";
export default class TeacherLesson extends Lesson {
    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string);
    setHeader(header: string | undefined, link: string | undefined): this;
    generateSubject(): this;
    generateClassData(): this;
    generateClassroomData(): this;
}
