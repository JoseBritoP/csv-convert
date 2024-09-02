import { Request, Response } from "express";
import csvToJson from "convert-csv-to-json";

let productsData: Array<Record<string, string>> = [];

export async function POSTFiles(req: Request, res: Response) {
  // 1. Extraer archivo de la request
  const { file } = req;
  // 2. Validar que esté el archivo
  if (!file) return res.status(400).json({ message: "File is required" });
  // 3. Validar el tipo de archivo (csv)
  if (file.mimetype !== "text/csv")
    return res.status(400).json({ message: "File must be CSV" });
  // 4. Tranformar el archivo a string
  try {
    const rawCsv = Buffer.from(file.buffer).toString("utf-8");
    console.log(rawCsv);
    // 5. Transformar el string a CSV

    const json = csvToJson.csvStringToJson(rawCsv);
    // 6. Guardar el json in memory
    productsData = json;
    // 7. Retornar estado 200 con el mensaje y el JSON
    return res
      .status(200)
      .json({ data: productsData, message: "File uploaded successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Error parsing the file" });
  }
}

export async function GETProducts(req: Request, res: Response) {
  // 1. Extrar query de request
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ message: `Query param 'q' is required` });
  }

  if (Array.isArray(q)) {
    return res.status(400).json({
      message: `Query param 'q' must be a string`,
    });
  }
  // 2. Validar que tenemos la query
  const search = q.toString().toLowerCase();
  // 3. Filtrar la información de la memoria con query

  const filteredData = productsData.filter((row) =>
    Object.values(row).some((value) => value.toLowerCase().includes(search))
  );

  if (!filteredData.length) {
    return res.status(404).json({ message: "No products" });
  }
  // 4. Retornar estado 200 con los datos filtrados
  return res.status(200).json({ data: filteredData });
}
