import { Router } from "express";

import { DisplayTournamentList, DisplayTournamentAddPage, ProcessTournamentAddPage } from "../controllers/tournament.controller.server.js";

const router = Router();

router.get('/tournament-list', DisplayTournamentList);
router.get('/tournament-add', DisplayTournamentAddPage);
router.post('/tournament-add', ProcessTournamentAddPage);

export default router;