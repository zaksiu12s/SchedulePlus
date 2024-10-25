import BranchData from './main.js';
export default class ClassData extends BranchData {
    private year?;
    private className?;
    private profileName?;
    constructor(wholeName: string, link: string);
    generateClassName(): this;
    generateProfileName(): this;
    generateYear(): this;
}
