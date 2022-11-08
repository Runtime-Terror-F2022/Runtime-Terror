import { Router } from "express";

import { DisplayTournamentList} from "../controllers/tournament.controller.server.js";

const router = Router();

router.get('/tournament-list', DisplayTournamentList);


export default router;