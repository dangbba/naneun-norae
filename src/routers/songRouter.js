import express from "express";
import { music, upload } from "../controllers/songController";

const songRouter = express.Router();

songRouter.get("/", upload);
songRouter.get("/:id", music);

export default songRouter;
