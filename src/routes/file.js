import { Router } from "express";
import { fileController } from "../controllers/file.js";

export const fileRouter = Router();

fileRouter.get("/crear", fileController.convertToPdf);
