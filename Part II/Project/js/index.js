import { defaultLinks } from "./data.js";
import { renderLinks } from "./dom.js";
import { handleAddLinkClick } from "./form.js";

const contentContainer = document.getElementById("content");
const submitButton = document.getElementById("submitButton");

renderLinks(defaultLinks, contentContainer);

submitButton.addEventListener("click", () =>
  handleAddLinkClick(contentContainer, submitButton)
);
