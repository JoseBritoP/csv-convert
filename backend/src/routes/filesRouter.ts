import { Router } from "express";
import { POSTFiles } from "../handlers/files";

const filesRouter = Router();

filesRouter.post('/',POSTFiles)

export default filesRouter