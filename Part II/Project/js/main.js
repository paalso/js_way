const defaultLinks = [
  {
    title: "Hacker News",
    url: "https://news.ycombinator.com",
    author: "Baptiste",
  },
  {
    title: "Reddit",
    url: "https://reddit.com",
    author: "Thomas",
  },
  {
    title: "Boing Boing",
    url: "http://boingboing.net",
    author: "Daniel",
  },
];

const getNewLink = (linkData) => {
  const { title, url, author } = linkData;
  const linkElement = document.createElement("div");
  linkElement.classList.add("link");
  linkElement.innerHTML = `<h4 class=linkHeadline>
        <a class="linkTitle" href=${url} target=_blank>${title}</a>
        <span class="linkUrl">${url}</span>
       </h4>
       <span class="linkAuthor">${author}</span>`;
  return linkElement;
};

const parseDefaultLinks = (links) =>
  links.forEach((link) => {
    contentContainer.append(getNewLink(link));
  });

const contentContainer = document.getElementById("content");
const submitButton = document.getElementById("submitButton");

const parseNewLinkForm = (container) => {
  const newLinkForm = document.createElement("form");
  newLinkForm.classList.add("linkForm", "form-inline");
  newLinkForm.innerHTML = `
    <input class="form-control authorField" type="text" name="author" id="author" placeholder="Author" required>
    <input class="form-control titleField" type="text" name="title" id="title" placeholder="Title" required>
    <input class="form-control urlField" type="text" name="url" id="url" placeholder="URL" required>
    <input id="addNewLinkButton" class="btn btn-primary" type="submit" value="Add link">
    `;
  container.prepend(newLinkForm);
};

const normalizeURL = (url) => {
  if (!(url.startsWith("http://") || url.startsWith("https://")))
    url = `https://${url}`;
  return url;
};

const addNewLink = (e) => {
  parseNewLinkForm(contentContainer);
  submitButton.style.display = "none";
  const linkForm = document.querySelector(".linkForm");
  linkForm.addEventListener("submit", (e) => {
    const author = e.target.elements.author.value;
    const title = e.target.elements.title.value;
    const url = normalizeURL(e.target.elements.url.value);
    contentContainer.prepend(getNewLink({ title, url, author }));
    submitButton.style.display = "inline-block";
    linkForm.remove();
    e.preventDefault();
  });
};

submitButton.addEventListener("click", addNewLink);

parseDefaultLinks(defaultLinks, contentContainer);
