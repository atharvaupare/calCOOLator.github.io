const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equalto") {
      display.innerText = eval(display.innerText).toFixed(2);
    } else if (display.innerText == "" && item.id == "equalto") {
      display.innerText = "Empty";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggle = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggle.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggle.classList.toggle("active");
  isDark = !isDark;
};
