import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "../data/conversions.json");

export function readConversionData() {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading conversion data:", error);
    return [];
  }
}
