import { Request,Response,NextFunction,ErrorRequestHandler, Router } from "express";
import filesRouter from "./filesRouter";

const mainRouter = Router();

mainRouter.get('/',(req,res)=>{
  return res.send('hello')
})

mainRouter.use('/api/files',filesRouter)

// ---
mainRouter.use((req:Request, res:Response, next:NextFunction) => {
  const error:any = new Error(`La ruta ${req.originalUrl} con el método ${req.method} no está implementada`);
  error.status = 404;
  next(error);
});

mainRouter.use((error:any, req:Request, res:Response, next:NextFunction) => {
  res.status(error.status || 500).json({
    message: error.message || 'Error interno del servidor'
  });
});

export default mainRouter