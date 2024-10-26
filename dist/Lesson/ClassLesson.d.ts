import Lesson from "./main.js";
import { HTMLElement as ParsedHTMLElement } from "node-html-parser";
export default class ClassLesson extends Lesson {
    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber: number, attributes?: string[], wholeHour?: string);
    generateSubject(): this;
    generateClassroomData(): this;
    generateTeacherData(): this;
    setHeader(header: string | undefined, link: string | undefined): this;
}
