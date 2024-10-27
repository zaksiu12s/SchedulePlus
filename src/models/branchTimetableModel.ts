import mongoose from "mongoose";
import Lesson, { LessonGetData } from "../classes/Lesson/main.js";

export interface IBranchTimetableSchema {
    link: string,
    header: string,
    lastScrapeTime?: Date,
    nextScrapeTime?: Date,
    timetableData: string,
    timetableDataAsDays: string,
}

const getMidnightToday = (): Date => {
    const today = new Date();

    if (today.getHours() > 12) {
        today.setDate(today.getDate() + 1);
    }

    today.setHours(12, 0, 0, 0);
    return today;
};

const BranchTimetableSchema = new mongoose.Schema<IBranchTimetableSchema>({
    link: {
        type: String
    },
    header: {
        type: String
    },
    lastScrapeTime: {
        type: Date, default: Date.now()
    },
    nextScrapeTime: {
        type: Date,
        default: getMidnightToday
    },
    timetableData: {
        type: String
    },
    timetableDataAsDays: {
        type: String,
    }
});

export default mongoose.model<IBranchTimetableSchema>('branchTimetable', BranchTimetableSchema);