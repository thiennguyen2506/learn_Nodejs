import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
require('dotenv').config();

const app = express();
const port = process.env.PORT;

configViewEngine(app);
initWebRoute(app);



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})