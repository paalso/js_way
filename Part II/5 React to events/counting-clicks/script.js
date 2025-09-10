// Counting clicks
// https://thejsway.net/chapter16/#counting-clicks

const clicksCounter = (e) => {
  let counter = parseInt(document.getElementById("clickCount").textContent);
  counter += 1;
  document.getElementById("clickCount").textContent = counter;
};

document.getElementById("myButton").addEventListener("click", clicksCounter);

document.getElementById("deactivate").addEventListener("click", (e) => {
  document
    .getElementById("myButton")
    .removeEventListener("click", clicksCounter);
  alert("Clicks counter deactivated");
});

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
