import { Router } from "express";
import {
    displayHomePage, 
    } from "../controllers/index.controller.server.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/tournament-add', DisplayTournamentAddPage);
router.post('/tournament-add', ProcessTournamentAddPage);

export default router;
