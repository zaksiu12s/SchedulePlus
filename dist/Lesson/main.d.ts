import { HTMLElement as ParsedHTMLElement } from 'node-html-parser';
export interface LessonGetData {
    wholeName: string | null;
    lessonNumber: number | null;
    teacherData: {
        shortName: string | undefined;
        link?: string | undefined;
    }[];
    classroomData: undefined | {
        shortName: string | undefined;
        link?: string | undefined;
    }[];
    classData: undefined | {
        shortName: string | undefined;
        link?: string | undefined;
    }[];
    subject: string[];
    attributes: string[];
    wholeHour: string | null;
    startHour: string | null;
    endHour: string | null;
    dayNumber: number | null;
    classAttributes: string[];
    teacherAttributes: string[];
    classroomAttributes: string[];
}
export default class Lesson {
    readonly schoolDays: number;
    private lesson;
    protected header: string | undefined;
    protected wholeName: string | null;
    private lessonNumber;
    protected teacherData: {
        shortName: string | undefined;
        link?: string | undefined;
    }[];
    protected classroomData: {
        shortName: string | undefined;
        link?: string | undefined;
    }[];
    protected classData: {
        shortName: string | undefined;
        link?: string | undefined;
    }[];
    protected subject: string[];
    protected attributes: string[];
    private wholeHour;
    private startHour;
    private endHour;
    private dayNumber;
    protected classAttributes: string[];
    protected teacherAttributes: string[];
    protected classroomAttributes: string[];
    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber?: number, attributes?: string[], wholeHour?: string);
    generateSubject(): this;
    generateClassroomData(): this;
    generateTeacherData(): this;
    generateClassData(): this;
    setDayNumber(dayNumber: number): this;
    setSpecifiedAttribute(): this;
    setHeader(header: string | undefined, link: string | undefined): this;
    getData(): LessonGetData;
}
