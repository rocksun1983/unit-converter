document.addEventListener("DOMContentLoaded", () => {
  
  const inputValue = document.getElementById("value");
  const conversionSelect = document.getElementById("target-unit");
  const convertBtn = document.getElementById("convert");
  const resultDisplay = document.getElementById("result");

  convertBtn.addEventListener("click", async () => {

    const value = parseFloat(inputValue.value);
    const type = conversionSelect.value;

    if (isNaN(value)) {
      resultDisplay.textContent = "Please enter a valid number";
      return;
    }

    try {
      const response = await fetch(`/convert?value=${value}&type=${type}`);
      const data = await response.json();

      if (data.error) {
        resultDisplay.textContent = data.error;
      } else {
        resultDisplay.textContent =
          `${data.input} → ${data.result}`;
      }

    } catch (error) {
      resultDisplay.textContent = "Server error";
    }
  });
});
