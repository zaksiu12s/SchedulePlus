import mongoose from "mongoose";
export interface IBranchTimetableSchema {
    link: string;
    header: string;
    lastScrapeTime?: Date;
    nextScrapeTime?: Date;
    timetableData: string;
    timetableDataAsDays: string;
}
declare const _default: mongoose.Model<IBranchTimetableSchema, {}, {}, {}, mongoose.Document<unknown, {}, IBranchTimetableSchema> & IBranchTimetableSchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>;
export default _default;
