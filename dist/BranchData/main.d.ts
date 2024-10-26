export default class BranchData {
    protected wholeName: string;
    protected link: string;
    protected shortName?: string;
    protected longName?: string;
    generateShortName(): this;
    generateLongName(): this;
    generateProfileName(): this;
    generateClassName(): this;
    generateYear(): this;
    constructor(wholeName: string, link: string);
}
