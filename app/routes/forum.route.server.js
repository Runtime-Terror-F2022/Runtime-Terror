import { application, Router } from "express";

import {DisplayForumList, DisplayForumEditPage, DisplayForumAddPage, ProcessForumAddPage, ProcessForumEditPage, ProcessForumDelete, DisplayCommentsPage, GetComments, SendComments} from "../controllers/forum.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

//routers for displaying forum pages.
router.get('/forum-list', DisplayForumList);
router.get('/forum-add', AuthGuard, DisplayForumAddPage);
router.post('/forum-add', AuthGuard, ProcessForumAddPage);
router.get('/forum-edit/:id', AuthGuard, DisplayForumEditPage);
router.post('/forum-edit/:id', AuthGuard, ProcessForumEditPage);
router.get('/forum-delete/:id', AuthGuard, ProcessForumDelete);

// routers for processing and displaying the comments for the forums 
router.post('/forum-comments/:id', AuthGuard, SendComments);
router.get('/forum-comments/:id', AuthGuard, DisplayCommentsPage);
router.get('/forum-comments/:id', AuthGuard, GetComments)



export default router;