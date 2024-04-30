import { Router } from "express";
import { fileController } from "../controllers/file.js";

export const fileRouter = Router();

fileRouter.get("/crear", fileController.getPdf);
fileRouter.get("/crear/:id", fileController.getLocalfile);

fileRouter.post("/crear", fileController.getBase64ToPdf);
