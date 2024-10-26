import BranchData from './main.js';
export default class ClassData extends BranchData {
    constructor(wholeName, link) {
        super(wholeName, link);
    }
    generateClassName() {
        if (this.wholeName.indexOf(" ") == -1)
            return this;
        const classNameEnd = this.wholeName.indexOf(" ");
        this.className = this.wholeName.substring(0, classNameEnd);
        return this;
    }
    generateProfileName() {
        if (this.wholeName.indexOf(" ") == -1)
            return this;
        // Adding 2 because the profile name is like: 2informatyk so as to delete the 2 in front
        const profileNameStart = this.wholeName.indexOf(" ") + 2;
        this.profileName = this.wholeName.substring(profileNameStart);
        return this;
    }
    generateYear() {
        if (this.wholeName.indexOf(" ") == -1)
            return this;
        const yearStart = this.wholeName.indexOf(" ") + 1;
        const yearEnd = yearStart + 1;
        const year = Number(this.wholeName.substring(yearStart, yearEnd));
        if (isNaN(year)) {
            return this;
        }
        this.year = year;
        return this;
    }
}
//# sourceMappingURL=ClassesData.js.map