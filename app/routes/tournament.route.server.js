import { Router } from "express";

import { DisplayTournamentList, DisplayTournamentAddPage, ProcessTournamentAddPage, DisplayTournamentEditPage, ProcessTournamentEditPage, ProcessTournamentDelete, DisplayBracket } from "../controllers/tournament.controller.server.js";

const router = Router();

//routers for displaying tournament pages.
router.get('/tournament-list', DisplayTournamentList);
router.get('/tournament-add', DisplayTournamentAddPage);
router.post('/tournament-add', ProcessTournamentAddPage);
router.get('/tournament-edit/:id', DisplayTournamentEditPage);
router.post('/tournament-edit/:id', ProcessTournamentEditPage);
router.get('/tournament-delete/:id', ProcessTournamentDelete);
router.get('/tournament-view/:id', DisplayBracket);

export default router;