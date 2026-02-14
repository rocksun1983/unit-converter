

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/conversions.json");

/**
 * @param {number} inputValue - variable for the value from index.html
 * @param {string} conversionType - The type of conversion to be done (e.g., 'kmToMiles', 'cToF')
 * @returns {number|string} The converted value or an error message
 */

export function convertValue(inputValue, conversionType) {
    // Performs the actual calculation based on the conversion type
    let result;

    switch (conversionType) {
        case 'kmToMiles':
            result = inputValue * 0.621371;
            break;
        case 'milesToKm':
            result = inputValue / 0.621371;
            break;
        case 'cToF':
            result = (inputValue * 9/5) + 32;
            break;
        case 'fToC':
            result = (inputValue - 32) * 5/9;
            break;
        case 'kgToLb':
            result = inputValue * 2.20462;
            break;
        case 'lbToKg':
            result = inputValue / 2.20462;
            break;
        default:
                        return null;
    }

    return parseFloat(result.toFixed(2));
}

export async function fetchConversionList() {
    if (typeof fetch === "function") {
        try {
            const url = new URL("../data/conversions.json", import.meta.url).href;
            const res = await fetch(url);
            if (res.ok) {
                return await res.json();
            }
        } catch (e) {

        }
    }

    try {
        const raw = fs.readFileSync(dataPath, "utf-8");
        return JSON.parse(raw);
    } catch (err) {
        console.error("Error loading conversions.json:", err);
        return [];
    }
}
