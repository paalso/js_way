// Character list
// https://thejsway.net/chapter17/#character-list

// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark",
  },
  {
    code: "LA",
    name: "Lannister",
  },
  {
    code: "BA",
    name: "Baratheon",
  },
  {
    code: "TA",
    name: "Targaryen",
  },
];

// Return an array of characters belonging to a house
const getCharacters = (houseCode) => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const houseMenu = document.getElementById("house");
const charactersElement = document.getElementById("characters");

const addHouseMenuOptions = () => {
  houses.forEach(({ code, name }) => {
    const nextMenuItem = document.createElement("option");
    nextMenuItem.value = code;
    nextMenuItem.textContent = name;
    houseMenu.append(nextMenuItem);
  });
};

addHouseMenuOptions();

houseMenu.addEventListener("change", (e) => {
  charactersElement.innerHTML = getCharacters(e.target.value)
    .map((item) => `<li>${item}</li>`)
    .join("");
});
