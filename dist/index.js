// importing libraries
// working on:
// express - to handle requests from client
// node-html-parser - to convert text data from fetch request to js objects with HTML DOM
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
const app = express();
const PORT = Number(process.env.PORT) || 4000;
if (process.env.USE_DB === "true" && process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log("Connected to MongoDB"))
        .catch((error) => console.error("Failed to connect to MongoDB", error));
}
else {
    console.log("Not connected to MongoDB");
}
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});
// importing modules
import routerAPIv3 from "./api/v3.js";
app.use("/api/v3", routerAPIv3);
app.listen(PORT, () => {
    console.log(`App running on: localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map