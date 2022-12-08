import { Router } from "express";
import { displayResultPage } from "../controllers/result.controller.server.js";

const router = Router();

router.get('/result', displayResultPage);

export default router;