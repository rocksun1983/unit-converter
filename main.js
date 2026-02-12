import { convertValue } from "./logic/conversion.js";

document.addEventListener("DOMContentLoaded", () => {
  
  const inputValue = document.getElementById("value");
  const conversionSelect = document.getElementById("target-unit");
  const convertBtn = document.getElementById("convert");
  const resultDisplay = document.getElementById("result");

  convertBtn.addEventListener("click", () => {
    const value = parseFloat(inputValue.value);

    if (isNaN(value)) {
      resultDisplay.textContent = "Please enter a valid number";
      return;
    }

    // Get conversion type from select element
    const conversionType = conversionSelect.value;

    const result = convertValue(value, conversionType);

    resultDisplay.textContent =
      `${value} = ${result}`;
  });

});