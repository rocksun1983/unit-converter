
// Embedded conversion data
const conversionList = [
  { "type": "kmToMiles", "value": 1 },
  { "type": "kmToMiles", "value": 5 },
  { "type": "kmToMiles", "value": 10 },
  { "type": "milesToKm", "value": 1 },
  { "type": "milesToKm", "value": 3 },
  { "type": "milesToKm", "value": 7 },
  { "type": "cToF", "value": 0 },
  { "type": "cToF", "value": 25 },
  { "type": "cToF", "value": 100 },
  { "type": "fToC", "value": 32 },
  { "type": "fToC", "value": 77 },
  { "type": "fToC", "value": 212 },
  { "type": "kgToLb", "value": 1 },
  { "type": "kgToLb", "value": 5 },
  { "type": "kgToLb", "value": 10 },
  { "type": "lbToKg", "value": 1 },
  { "type": "lbToKg", "value": 5 },
  { "type": "lbToKg", "value": 10 },
  { "type": "kmToMiles", "value": 42 },
  { "type": "cToF", "value": -10 },
  { "type": "kgToLb", "value": 70 }
];

/**
 * @param {number} inputValue - variable for the value from index.html
 * @param {string} conversionType - The type of conversion to be done (e.g., 'kmToMiles', 'cToF')
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