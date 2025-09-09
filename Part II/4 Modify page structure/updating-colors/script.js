// https://thejsway.net/chapter15/#updating-colors
// Updating colors

const colorElements = (selector) => {
  const { color, backgroundColor } = askColors();
  const elementsToColor = document.querySelectorAll(selector);
  elementsToColor.forEach((e) => {
    e.style.color = color;
    e.style.backgroundColor = backgroundColor;
  });
};

const askColors = () => {
  const colors = {};
  colors.color = prompt("Color");
  colors.backgroundColor = prompt("Background color:");
  return colors;
};

colorElements("#content > div");
