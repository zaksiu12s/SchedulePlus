import BranchData from './main.js';
export default class ClassroomData extends BranchData {
    constructor(wholeName, link) {
        super(wholeName, link);
    }
    generateShortName() {
        if (this.wholeName.indexOf(" ") == -1)
            return this;
        const shortName = this.wholeName.substring(0, this.wholeName.indexOf(" "));
        this.shortName = shortName;
        return this;
    }
    generateLongName() {
        if (this.wholeName.indexOf(" ") == -1)
            return this;
        const longName = this.wholeName.substring(this.wholeName.indexOf(" ") + 1);
        this.longName = longName;
        return this;
    }
}
//# sourceMappingURL=ClassroomData.js.map