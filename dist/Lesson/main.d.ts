import { HTMLElement as ParsedHTMLElement } from 'node-html-parser';
export interface LessonGetData {
    wholeName: string;
    lessonNumber: number | null;
    teacherData: {
        shortName: string | undefined;
        link?: string | undefined;
    } | {
        shortName: string | undefined;
        link?: string | undefined;
    }[] | {};
    classroomData: {
        shortName: string | undefined;
        link?: string | undefined;
    } | undefined | {
        shortName: string | undefined;
        link?: string | undefined;
    }[] | {};
    classData: {
        shortName: string | undefined;
        link?: string | undefined;
    } | undefined | {
        shortName: string | undefined;
        link?: string | undefined;
    }[] | {};
    subject: string | null | string[];
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
    header: string | undefined;
    protected wholeName: string;
    private lessonNumber;
    protected teacherData: {
        shortName: string | undefined;
        link?: string | undefined;
    } | {
        shortName: string | undefined;
        link?: string | undefined;
    }[] | {};
    protected classroomData: {
        shortName: string | undefined;
        link?: string | undefined;
    } | {
        shortName: string | undefined;
        link?: string | undefined;
    }[] | {};
    protected classData: {
        shortName: string | undefined;
        link?: string | undefined;
    } | {
        shortName: string | undefined;
        link?: string | undefined;
    }[] | {};
    protected subject: string | null | string[];
    protected attributes: string[];
    private wholeHour;
    private startHour;
    private endHour;
    private dayNumber;
    protected classAttributes: string[];
    protected teacherAttributes: string[];
    protected classroomAttributes: string[];
    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber?: number, attributes?: string[], wholeHour?: string);
    divideToGroups(): void;
    generateSubject(): this;
    generateClassroomData(): this;
    generateTeacherData(): this;
    generateClassData(): this;
    setDayNumber(dayNumber: number): this;
    setSpecifiedAttribute(): this;
    setHeader(header: string | undefined, link: string | undefined): this;
    getData(): LessonGetData;
}
