import { Router } from "express";

import { DisplayTournamentList, DisplayTournamentAddPage, ProcessTournamentAddPage, DisplayTournamentEditPage, ProcessTournamentEditPage, ProcessTournamentDelete, DisplayBracket } from "../controllers/tournament.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

//routers for displaying tournament pages.
router.get('/tournament-list', DisplayTournamentList);
router.get('/tournament-add', AuthGuard, DisplayTournamentAddPage);
router.post('/tournament-add', AuthGuard, ProcessTournamentAddPage);
router.get('/tournament-edit/:id', AuthGuard, DisplayTournamentEditPage);
router.post('/tournament-edit/:id', AuthGuard, ProcessTournamentEditPage);
router.get('/tournament-delete/:id', AuthGuard, ProcessTournamentDelete);
router.get('/tournament-view/:id', DisplayBracket);

export default router;