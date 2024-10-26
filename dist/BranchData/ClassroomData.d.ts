import BranchData from './main.js';
export default class ClassroomData extends BranchData {
    constructor(wholeName: string, link: string);
    generateShortName(): this;
    generateLongName(): this;
}
