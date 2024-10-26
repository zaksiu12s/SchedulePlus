import BranchData from './main.js';

export default class ClassroomData extends BranchData {
    constructor(wholeName: string, link: string) {
        super(wholeName, link);
    }

    override generateShortName(): this {
        if (this.wholeName.indexOf(" ") == -1) return this;

        const shortName: string = this.wholeName.substring(0, this.wholeName.indexOf(" "));
        this.shortName = shortName;

        return this;
    }

    override generateLongName(): this {
        if (this.wholeName.indexOf(" ") == -1) return this;

        const longName: string = this.wholeName.substring(this.wholeName.indexOf(" ") + 1);
        this.longName = longName;

        return this;
    }
}