import { Router } from "express";

import { DisplayTournamentList, DisplayTournamentAddPage, ProcessTournamentAddPage, DisplayTournamentEditPage, ProcessTournamentEditPage, ProcessTournamentDelete } from "../controllers/tournament.controller.server.js";

const router = Router();

router.get('/tournament-list', DisplayTournamentList);
router.get('/tournament-add', DisplayTournamentAddPage);
router.post('/tournament-add', ProcessTournamentAddPage);
router.get('/tournament-edit/:id', DisplayTournamentEditPage);
router.post('/tournament-edit/:id', ProcessTournamentEditPage);
router.get('/tournament-delete/:id', ProcessTournamentDelete);

export default router;