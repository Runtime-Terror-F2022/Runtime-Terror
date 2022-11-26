import { Router } from "express";

import { DisplayProfileList,
     DisplayProfileAddPage, ProcessProfileAddPage, DisplayProfileEditPage,
      ProcessProfileEditPage, ProcessProfileDelete } from "../controllers/profile.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

//routers for displaying profile pages.
router.get('/profile-list', AuthGuard, DisplayProfileList);
router.get('/profile-add', AuthGuard, DisplayProfileAddPage);
router.post('/profile-add', AuthGuard, ProcessProfileAddPage);
router.get('/profile-edit/:id', AuthGuard, DisplayProfileEditPage);
router.post('/profile-edit/:id', AuthGuard, ProcessProfileEditPage);
router.get('/profileer-delete/:id', AuthGuard, ProcessProfileDelete);


export default router;