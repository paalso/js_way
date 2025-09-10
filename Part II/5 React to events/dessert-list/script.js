// A dessert list
// https://thejsway.net/chapter16/#a-dessert-list

const dessertUpdater = (e) => {
  const updatedItem = prompt("New name:");
  const currentElement = e.currentTarget;

  if (updatedItem) {
    currentElement.textContent = updatedItem;
  }
};

const dessertAdder = (buttonSelector, dessertsSelector) => {
  const dessertsUl = document.querySelector(dessertsSelector);
  document.querySelector(buttonSelector).addEventListener("click", (e) => {
    const newDessert = prompt("New dessert:");

    if (newDessert) {
      const newItem = document.createElement("li");
      newItem.textContent = newDessert;
      dessertsUl.append(newItem);
      newItem.addEventListener("click", dessertUpdaterInline);
      // newItem.addEventListener("click", dessertUpdater);
    }
  });
};

// Offered by GPT
const dessertUpdaterInline = (e) => {
  const currentElement = e.currentTarget;

  // создаём поле ввода и вставляем вместо текста
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentElement.textContent;

  // заменяем li содержимое на input
  currentElement.textContent = "";
  currentElement.appendChild(input);
  input.focus();

  // обработчик сохранения
  const save = () => {
    const newValue = input.value.trim();
    if (newValue) {
      currentElement.textContent = newValue;
    } else {
      currentElement.textContent = "(unnamed dessert)";
    }
    currentElement.addEventListener("click", dessertUpdaterInline, {
      once: true,
    });
  };

  input.addEventListener("blur", save);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      save();
    }
  });

  // чтобы не срабатывал повторный клик пока редактируем
  currentElement.removeEventListener("click", dessertUpdaterInline);
};

dessertAdder("#addButton", "#desserts");
