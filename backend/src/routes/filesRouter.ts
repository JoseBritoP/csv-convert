import { Router } from "express";
import { GETProducts, POSTFiles } from "../handlers/files";
import upload from "../middlewares/multer";

const filesRouter = Router();

filesRouter.post("/files/", upload.single("file"), POSTFiles);
filesRouter.get("/products/", GETProducts);

export default filesRouter;