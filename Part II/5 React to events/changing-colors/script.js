// Changing colors
// https://thejsway.net/chapter16/#changing-colors

/*
// GPT version

const myButton = document.getElementById("myButton");
const clickCount = document.getElementById("clickCount");
const deactivate = document.getElementById("deactivate");

let counter = 0;

const updateCounter = () => (clickCount.textContent = ++counter);

myButton.addEventListener("click", updateCounter);

deactivate.addEventListener("click", () => {
  myButton.removeEventListener("click", updateCounter);

  // Кнопка deactivate отключает обработчик и сразу дизейблится (чтобы второй раз не жали).
  deactivate.disabled = true;
});
*/

const mapping = {
  r: "red",
  y: "yellow",
  g: "green",
  b: "blue",
};

const addColorUpdaters = (elements) => {
  document.addEventListener("keyup", (event) => {
    console.log(`You pressed the ${event.key} key`);
    const color = mapping[event.key];
    if (color) {
      elements.forEach((element) => {
        element.style.backgroundColor = color;
      });
    }
  });
};

const selector = "div";
const elements = document.querySelectorAll(selector);
addColorUpdaters(elements);
