import { Router } from "express";

import {DisplayForumList, DisplayForumEditPage, DisplayForumAddPage, ProcessForumAddPage, ProcessForumEditPage, ProcessForumDelete } from "../controllers/forum.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

//routers for displaying tournament pages.
router.get('/forum-list', DisplayForumList);
router.get('/forum-add', AuthGuard, DisplayForumAddPage);
router.post('/forum-add', AuthGuard, ProcessForumAddPage);
router.get('/forum-edit/:id', AuthGuard, DisplayForumEditPage);
router.post('/forum-edit/:id', AuthGuard, ProcessForumEditPage);
router.get('/forum-delete/:id', AuthGuard, ProcessForumDelete);


export default router;