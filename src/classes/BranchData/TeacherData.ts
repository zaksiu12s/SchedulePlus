import BranchData from './main.js';

export default class TeacherData extends BranchData {
    constructor(wholeName: string, link: string) {
        super(wholeName, link);
    }

    override generateShortName(): this {
        if (this.wholeName.indexOf("(") == -1 || this.wholeName.indexOf(")") == -1) return this;

        const shortNameStart: number = this.wholeName.indexOf("(") + 1;
        const shortNameEnd: number = this.wholeName.indexOf(")");

        const shortName: string = this.wholeName.substring(shortNameStart, shortNameEnd).trim();
        this.shortName = shortName;

        return this;
    }

    override generateLongName(): this {
        if (this.wholeName.indexOf("(") == -1) return this;

        const longNameEnd: number = this.wholeName.indexOf("(");

        const longName: string = this.wholeName.substring(0, longNameEnd).trim();
        this.longName = longName;

        return this;
    }
}