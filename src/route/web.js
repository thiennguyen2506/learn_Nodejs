import express from "express";
import homepage from "../controllers/homepage";
let router = express.Router();

const initWebRoute = (app) => {
    router.get("/", homepage.getHomepage)

    return app.use('/', router);  // thêm tiền tố bất kì trước các Route ở trên.
}

export default initWebRoute;