import { readConversionData } from './fileHandler.js';

// Load the data from your JSON file
const conversionList = readConversionData();

/**
 * Main conversion function
 * @param {number} inputValue - The value from index.html
 * @param {string} conversionType - The type (e.g., 'kmToMiles', 'cToF')
 * @returns {number|string} The converted value or an error message
 */
export function convertValue(inputValue, conversionType) {
    // 1. Check if the specific value exists in your conversions.json list (optional validation)
    const knownValue = conversionList.find(item => 
        item.type === conversionType && item.value === inputValue
    );

    // 2. Perform the actual calculation based on the type
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
            return "Unsupported conversion type";
    }

    return parseFloat(result.toFixed(2));
}