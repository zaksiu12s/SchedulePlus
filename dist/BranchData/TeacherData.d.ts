import BranchData from './main.js';
export default class TeacherData extends BranchData {
    constructor(wholeName: string, link: string);
    generateShortName(): this;
    generateLongName(): this;
}
