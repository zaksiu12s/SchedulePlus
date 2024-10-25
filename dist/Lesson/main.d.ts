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
    subject: string | undefined | string[];
    attributes: string[];
    wholeHour: string | null;
    startHour: string | null;
    endHour: string | null;
    dayNumber: number | null;
    classAttributes: string[] | undefined;
    teacherAttributes: string[] | undefined;
    classroomAttributes: string[] | undefined;
}
export default class Lesson {
    readonly schoolDays: number;
    private lesson;
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
    protected subject: string | undefined | string[];
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
    getData(): LessonGetData;
}
