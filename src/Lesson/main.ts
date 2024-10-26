import { HTMLElement as ParsedHTMLElement } from 'node-html-parser';

export interface LessonGetData {
    wholeName: string | null,
    lessonNumber: number | null,
    teacherData: {
        shortName: string | undefined;
        link?: string | undefined;
    }[],
    classroomData: undefined | {
        shortName: string | undefined,
        link?: string | undefined,
    }[],
    classData: undefined | {
        shortName: string | undefined,
        link?: string | undefined,
    }[],
    subject: string[],
    attributes: string[],
    wholeHour: string | null,
    startHour: string | null,
    endHour: string | null,
    dayNumber: number | null,
    classAttributes: string[],
    teacherAttributes: string[],
    classroomAttributes: string[],
}

export default class Lesson {
    readonly schoolDays: number = 5;

    private lesson: ParsedHTMLElement;
    protected header: string | undefined;
    protected wholeName: string | null = null;
    private lessonNumber: number | null = null;

    protected teacherData: {
        shortName: string | undefined;
        link?: string | undefined;
    }[] = [];

    protected classroomData: {
        shortName: string | undefined,
        link?: string | undefined,
    }[] = [];

    protected classData: {
        shortName: string | undefined,
        link?: string | undefined,
    }[] = [];

    protected subject: string[] = [];
    protected attributes: string[] = [];
    private wholeHour: string | null = null;
    private startHour: string | null = null;
    private endHour: string | null = null;
    private dayNumber: number | null = null;
    protected classAttributes: string[] = [];
    protected teacherAttributes: string[] = [];
    protected classroomAttributes: string[] = [];

    constructor(lesson: ParsedHTMLElement, wholeName: string, lessonNumber?: number, attributes?: string[], wholeHour?: string) {
        this.lesson = lesson;

        if (lessonNumber && !isNaN(lessonNumber)) this.lessonNumber = lessonNumber - 1;

        if (wholeName !== "&nbsp;") {
            this.wholeName = wholeName.replace("\n", " \n ").trim();
        }

        if (attributes && attributes.length > 0) this.attributes = attributes;

        if (wholeHour) {
            this.wholeHour = wholeHour;
            const hourSplit = this.wholeHour.split("-");
            if (hourSplit.length === 2 && hourSplit[0] && hourSplit[1]) {
                this.startHour = hourSplit[0].trim();
                this.endHour = hourSplit[1].trim();
            }
        }

        if (attributes) {
            this.setSpecifiedAttribute();
        }
    }

    public generateSubject(): this { return this };
    public generateClassroomData(): this { return this };
    public generateTeacherData(): this { return this };
    public generateClassData(): this { return this };
    public setDayNumber(dayNumber: number): this {
        this.dayNumber = dayNumber % 5;

        return this;
    }
    public setSpecifiedAttribute(): this {
        this.attributes?.forEach((attribute: string): void => {
            if (attribute.indexOf("o") !== -1) {
                this.classAttributes.push(attribute);
            } else if (attribute.indexOf("s") !== -1) {
                this.classroomAttributes.push(attribute);
            } else if (attribute.indexOf("n") !== -1) {
                this.teacherAttributes.push(attribute);
            }
        })

        return this;
    }

    public setHeader(header: string | undefined, link: string | undefined): this { return this };


    public getData(): LessonGetData {
        return {
            wholeName: this.wholeName,
            lessonNumber: this.lessonNumber,
            teacherData: this.teacherData,
            classroomData: this.classroomData,
            classData: this.classData,
            subject: this.subject,
            attributes: this.attributes,
            wholeHour: this.wholeHour,
            startHour: this.startHour,
            endHour: this.endHour,
            dayNumber: this.dayNumber,
            classAttributes: this.classAttributes,
            teacherAttributes: this.teacherAttributes,
            classroomAttributes: this.classroomAttributes,
        }
    }
}