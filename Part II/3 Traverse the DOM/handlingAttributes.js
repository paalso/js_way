// https://thejsway.net/chapter14/#handling-attributes

const linkInfo = (selector = document) => {
  if (!selector) return;
  const links = selector.querySelectorAll("a");
  const linksNumber = links.length;
  console.log(linksNumber);

  if (linksNumber < 1) return;

  const firstLink = links[0];
  console.log(firstLink.href);

  if (linksNumber > 1) {
    const lastLink = links[links.length - 1];
    console.log(lastLink.href);
  }
};

// GPT version
const linkInfo1 = (selector = document) => {
  const links = [...selector.querySelectorAll("a")]; // превращаем NodeList в массив
  const count = links.length;
  console.log(count);

  if (count === 0) return;

  const [first, ...rest] = links;
  console.log(first.href);

  if (rest.length > 0) {
    const last = links[links.length - 1];
    console.log(last.href);
  }
};

linkInfo();
