// https://thejsway.net/chapter15/#newspaper-list

// Newspaper list
const newspapers = [
  "https://www.nytimes.com",
  "https://www.washingtonpost.com",
  "http://www.economist.com",
];

const addLinks = (parentElement, urls) => {
  const ulElement = document.createElement("ul");
  urls.forEach((url) => {
    const linkElement = document.createElement("a");
    linkElement.href = url;
    linkElement.innerText = url;

    const liElement = document.createElement("li");
    liElement.append(linkElement);

    ulElement.append(liElement);
  });
  parentElement.append(ulElement);
};

// addLinks(document.getElementById("content"), newspapers);

// GPT version
const renderNewspapersList = (parentElement, urls) => {
  const ul = document.createElement("ul");
  const fragment = document.createDocumentFragment();

  urls.forEach((url) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = url;
    a.innerText = url;
    li.append(a);

    fragment.append(li); // всё остаётся в памяти
  });

  ul.append(fragment); // одним махом добавили весь список
  parentElement.append(ul);
};

renderNewspapersList(document.getElementById("content"), newspapers);
