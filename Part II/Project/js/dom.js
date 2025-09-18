export const createLinkElement = ({ title, url, author }) => {
  const link = document.createElement("div");
  link.classList.add("link");

  link.innerHTML = `
    <h4 class="linkHeadline">
      <a class="linkTitle" href="${url}" target="_blank">${title}</a>
      <span class="linkUrl">${url}</span>
    </h4>
    <span class="linkAuthor">Submitted by ${author}</span>
  `;
  return link;
};

export const renderLinks = (links, container) => {
  links.forEach((link) => container.append(createLinkElement(link)));
};

export const createNewLinkForm = () => {
  const form = document.createElement("form");
  form.classList.add("linkForm", "form-inline");
  form.innerHTML = `
    <input class="form-control" type="text" name="author" placeholder="Author" required>
    <input class="form-control" type="text" name="title" placeholder="Title" required>
    <input class="form-control" type="text" name="url" placeholder="URL" required>
    <button class="btn btn-primary" type="submit">Add link</button>
  `;
  return form;
};

export const showMessage = (text, container) => {
  const message = document.createElement("div");
  message.classList.add("alert", "alert-success");
  message.textContent = text;
  container.prepend(message);
  setTimeout(() => message.remove(), 3000);
};
