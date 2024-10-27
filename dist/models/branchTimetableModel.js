import mongoose from "mongoose";
const getMidnightToday = () => {
    const today = new Date();
    if (today.getHours() > 12) {
        today.setDate(today.getDate() + 1);
    }
    today.setHours(12, 0, 0, 0);
    return today;
};
const BranchTimetableSchema = new mongoose.Schema({
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
export default mongoose.model('branchTimetable', BranchTimetableSchema);
//# sourceMappingURL=branchTimetableModel.js.map