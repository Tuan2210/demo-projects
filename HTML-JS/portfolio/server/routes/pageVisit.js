import { Router } from "express";
import pageVisitController from "../controllers/pageVisitController.js";

const router = Router();

router.post("/addPageVisit", pageVisitController.addPageVisit);
router.get("/getPageVisit", pageVisitController.getPageVisit);

export default router;
