export default class BranchData {
    protected wholeName: string;
    protected link: string;
    protected shortName?: string;
    protected longName?: string;

    public generateShortName() { return this };
    public generateLongName() { return this };
    public generateProfileName() { return this; };
    public generateClassName() { return this };
    public generateYear() { return this };

    constructor(wholeName: string, link: string) {
        this.wholeName = wholeName;
        this.link = link.substring(link.indexOf("/") + 1);
    }
}