// Select element
const generatorBtn = document.getElementById("generatorBtn");
const colorCode = document.getElementById("colorCode");
const colorDisplay = document.getElementById("colorDisplay");
const copyBtn = document.getElementById("copyBtn");

// Color generator Button Click
generatorBtn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomColorCode = `#${randomNumber.toString(16)}`;
  colorCode.textContent = randomColorCode;
  colorDisplay.style.backgroundColor = randomColorCode;
});

// Copy button Click
copyBtn.addEventListener("click", () => {
  const colorCopy = colorCode.textContent;
  navigator.clipboard.writeText(colorCopy).then(() => {
    copyBtn.textContent = "Copied...";
    setTimeout(() => {
        copyBtn.textContent = "Copy Color";
    },1500)
  });
});
