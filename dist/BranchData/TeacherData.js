import BranchData from './main.js';
export default class TeacherData extends BranchData {
    constructor(wholeName, link) {
        super(wholeName, link);
    }
    generateShortName() {
        if (this.wholeName.indexOf("(") == -1 || this.wholeName.indexOf(")") == -1)
            return this;
        const shortNameStart = this.wholeName.indexOf("(") + 1;
        const shortNameEnd = this.wholeName.indexOf(")");
        const shortName = this.wholeName.substring(shortNameStart, shortNameEnd).trim();
        this.shortName = shortName;
        return this;
    }
    generateLongName() {
        if (this.wholeName.indexOf("(") == -1)
            return this;
        const longNameEnd = this.wholeName.indexOf("(");
        const longName = this.wholeName.substring(0, longNameEnd).trim();
        this.longName = longName;
        return this;
    }
}
//# sourceMappingURL=TeacherData.js.map