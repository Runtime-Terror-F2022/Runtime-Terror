import { Router } from "express";
import { displayHomePage } from "../controllers/index.controller.server.js";

const router = Router();

//routers for displaying home pages

router.get('/', displayHomePage);
router.get('/home', displayHomePage);


export default router;
