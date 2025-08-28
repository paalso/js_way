// https://thejsway.net/chapter15/#mini-dictionary
// Mini-dictionary

const words = [
  {
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished",
  },
  {
    term: "Tautology",
    definition:
      "logical argument constructed in such a way that it is logically irrefutable",
  },
  {
    term: "Oxymoron",
    definition:
      "figure of speech that juxtaposes elements that appear to be contradictory",
  },
];

const renderDictionary = (parentElement, words) => {
  const dl = document.createElement("dl");
  const fragment = document.createDocumentFragment();

  words.forEach(({ term, definition }) => {
    const dt = document.createElement("dt");
    dt.innerHTML = `<strong>${term}</strong>`;
    fragment.append(dt);

    const dd = document.createElement("dd");
    dd.innerText = definition;
    fragment.append(dd);
  });
  dl.append(fragment);
  parentElement.append(dl);
};

renderDictionary(document.getElementById("content"), words);
