export default class BranchData {
    generateShortName() { return this; }
    ;
    generateLongName() { return this; }
    ;
    generateProfileName() { return this; }
    ;
    generateClassName() { return this; }
    ;
    generateYear() { return this; }
    ;
    constructor(wholeName, link) {
        this.wholeName = wholeName;
        this.link = link.substring(link.indexOf("/") + 1);
    }
}
//# sourceMappingURL=main.js.map