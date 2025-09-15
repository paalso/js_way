// import { countryList } from "./countries.js";

/**
Autocomplete 
https://thejsway.net/chapter17/#autocomplete
*/

const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
];

const selectCountries = (prefix) =>
  prefix
    ? countryList
        .map((e) => e.toLowerCase())
        .filter((e) => e.startsWith(prefix.toLowerCase()))
    : [];

const countryInputElement = document.getElementById("country");
const suggestionsElement = document.getElementById("suggestions");

countryInputElement.addEventListener("input", (e) => {
  suggestionsElement.innerHTML = selectCountries(e.target.value)
    .map((e) => `<p>${e}</p>`)
    .join("");
  const suggestionsChildren = Array.from(suggestionsElement.children);
  suggestionsChildren.forEach((element) => {
    element.addEventListener("click", (e) => {
      countryInputElement.value = e.target.textContent;
      suggestionsElement.innerHTML = "";
    });
  });
});

// GPT Version
// countryInputElement.addEventListener("input", (e) => {
//   const matches = selectCountries(e.target.value);

// Очищаем предыдущие предложения
//   suggestionsElement.innerHTML = "";

//   matches.forEach((country) => {
//     const p = document.createElement("p");
//     p.textContent = country;
//     p.addEventListener("click", () => {
//       countryInputElement.value = country;
//       // suggestionsElement.innerHTML = ""; // убрать список после выбора
//     });
//     suggestionsElement.append(p);
//   });
// });
