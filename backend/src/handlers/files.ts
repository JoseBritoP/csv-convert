import { Request,Response } from "express";

export async function POSTFiles(req:Request,res:Response){
  // 1. Extraer archivo de la request
  // 2. Validar que esté el archivo
  // 3. Validar el tipo de archivo (csv)
  // 4. Tranformar el archivo a string
  // 5. Transformar el string a CSV
  // 6. Guardar el json in memory
  // 7. Retornar estado 200 con el mensaje y el JSON
  

  return res.status(200).json({data:[], message:'Archivo cargado correctamente'})
}