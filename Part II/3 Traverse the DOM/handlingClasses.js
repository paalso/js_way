// https://thejsway.net/chapter14/#handling-classes

// Show if an element has a class
const has = (id, someClass) => {
  const foundElement = document.getElementById(id);

  if (!foundElement) {
    console.error(`No element has id ${id}`);
    return;
  }

  console.log([...foundElement.classList].includes(someClass));
};

// GPT version
const has1 = (id, someClass) => {
  const el = document.getElementById(id);
  if (!el) return console.error(`No element has id ${id}`);
  console.log(el.classList.contains(someClass));
};

has("saxophone", "woodwind"); // Should show true
has("saxophone", "brass"); // Should show false
has("trumpet", "brass"); // Should show true
has("contrabass", "chordophone"); // Should show an error message
