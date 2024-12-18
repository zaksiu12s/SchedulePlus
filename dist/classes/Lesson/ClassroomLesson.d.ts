import { HTMLElement as ParsedHTMLElement } from "node-html-parser";
import Lesson from "./main.js";
export default class ClassroomLesson extends Lesson {
    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string);
    setHeader(header: string | undefined, link: string | undefined): this;
    generateSubject(): this;
    generateClassData(): this;
    generateTeacherData(): this;
}
