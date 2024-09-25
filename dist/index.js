// importing libraries
// working on:
// express - to handle requests from client
// node-html-parser - to convert text data from fetch request to js objects with HTML DOM
import express from "express";
const app = express();
const PORT = 4000;
// importing modules
import routerApi from "./api.js";
app.use("/api", routerApi);
app.listen(PORT, () => {
    console.log(`App running on: localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map