import express, { Router } from "express";
import { postController, viewpostController } from "../controllers/UserPosts.controller.js";
import middleauth from "../middleware/middle_auth.js";
import multer from "multer";
import path from "path";

const handleUpload = multer({ dest: "uploadedPosts" });

const postRouter = Router();

postRouter.put('/postUpload', [middleauth, handleUpload.single("image")], postController);

postRouter.use('/viewposts', viewpostController);

export default postRouter;