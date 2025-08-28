// https://thejsway.net/chapter15/#adding-a-paragraph

const addParagraph = () => {
  const url = "https://en.wikipedia.org/wiki/List_of_programming_languages";
  const paragraphToUpdate = document.getElementById("content");

  const innerLink = document.createElement("a");
  innerLink.href = url;
  innerLink.innerText = "list";

  const elementToAdd = document.createElement("p");
  elementToAdd.append("Here is a more complete ");
  elementToAdd.append(innerLink);
  elementToAdd.append(" of languages.");

  paragraphToUpdate.append(elementToAdd);
};

addParagraph();
