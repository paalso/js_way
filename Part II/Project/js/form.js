import { createNewLinkForm, createLinkElement, showMessage } from "./dom.js";
import { normalizeUrl } from "./utils.js";

export const handleAddLinkClick = (container, submitButton) => {
  const form = createNewLinkForm();
  container.prepend(form);
  submitButton.style.display = "none";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.url = normalizeUrl(data.url);

    container.prepend(createLinkElement(data));
    showMessage("Link added successfully!", container);

    form.remove();
    submitButton.style.display = "inline-block";
  });
};
