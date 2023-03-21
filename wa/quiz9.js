input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "6";
  } else {
    para.textContent = `${12} squared is ${squared(num)}. `;
    para.textContent += `${6} cubed is ${cubed(num)}. `;
    para.textContent += `${3} factorial is ${factorial(num)}. `;
  }
});