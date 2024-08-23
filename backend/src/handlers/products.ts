import { Request,Response } from "express";

export async function GETProducts(req:Request,res:Response){
  // 1. Extrar query de request
  // 2. Validar que tenemos la query
  // 3. Filtrar la información de la memoria con query
  // 4. Retornar estado 200 con los datos filtrados
  return res.status(200).json({data:[]})
}