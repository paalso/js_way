const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const delayTime = 1000; // Задержка по умолчанию

async function addLanguage() {
  await delay(delayTime); // ждем перед запуском
  const addNewLanguage = prompt("Add new language?");
  if (addNewLanguage.toLowerCase() === "yes") {
    document.getElementById("languages").innerHTML += '<li id="c">C</li>';
  }
}

async function removeLanguages() {
  await delay(delayTime);
  const removeLanguages = prompt("Remove languages?");
  if (removeLanguages.toLowerCase() === "yes") {
    document.getElementById("languages").innerHTML = "";
  }
}

async function editHeader() {
  await delay(delayTime);
  const editTheHeader = prompt("Edit the header?");
  if (editTheHeader.toLowerCase() === "yes") {
    document.querySelector("h3.beginning").textContent += " for programming";
  }
}

async function updateHeader() {
  await delay(delayTime);
  const answer = prompt("Edit the header?");
  if (answer.toLowerCase().match("ye(s|p)")) {
    const titleElement = document.querySelector("h3"); // Grab the first h3
    titleElement.classList.remove("beginning"); // Remove the class "beginning"
    titleElement.classList.add("title"); // Add a class called "title"
    console.log(titleElement);
  }
}

async function addPythonItem() {
  await delay(delayTime);
  const answer = prompt("Add new list item - Python?");
  if (answer.toLowerCase().match("ye(s|p)")) {
    const pythonElement = document.createElement("li"); // Create an "li" element
    pythonElement.id = "python"; // Define element ID
    pythonElement.textContent = "Python"; // Define its text content
    document.getElementById("languages").appendChild(pythonElement); // Insert the new element into the DOM
  }
}

async function addRubyItem() {
  await delay(delayTime);
  const answer = prompt("Add new list item - Ruby?");
  if (answer.toLowerCase().match("ye(s|p)")) {
    const rubyElement = document.createElement("li"); // Create an "li" element
    rubyElement.id = "ruby"; // Define element ID
    rubyElement.appendChild(document.createTextNode("Ruby")); // Define its text content
    document.getElementById("languages").appendChild(rubyElement); // Insert the new element into the DOM  }
  }
}

async function insertPerlItem() {
  await delay(delayTime);
  const answer = prompt("Insert new list item - Perl?");
  if (answer.toLowerCase().match("ye(s|p)")) {
    const perlElement = document.createElement("li"); // Create an "li" element
    perlElement.id = "perl"; // Define element ID
    perlElement.textContent = "Perl"; // Define its text content
    // Insert the new element before the "PHP" node
    document
      .getElementById("languages")
      .insertBefore(perlElement, document.getElementById("php"));
  }
}

async function insertJSItemAtTheBeginning() {
  await delay(delayTime);
  const answer = prompt(
    "Insert new list item - JS at the beginning of the list?"
  );
  if (answer.toLowerCase().match("ye(s|p)"))
    // Add an element to the beginning of a list
    document
      .getElementById("languages")
      .insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript</li>');
}

async function updateLispItem() {
  await delay(delayTime);
  const answer = prompt("Replace 'Perl' item with a 'Lisp' one?");
  if (answer.toLowerCase().match("ye(s|p)")) {
    const lispElement = document.createElement("li"); // Create an li element
    lispElement.id = "lisp"; // Define its ID
    lispElement.textContent = "Lisp"; // Define its text content
    // Replace the element identified by "perl" with the new element
    document
      .getElementById("languages")
      .replaceChild(lispElement, document.getElementById("perl"));
  }
}

async function removePerlItem() {
  await delay(delayTime);
  const answer = prompt("Remove 'Perl' item?");
  if (answer.toLowerCase().match("ye(s|p)")) {
    document
      .getElementById("languages")
      .removeChild(document.getElementById("perl"));
  }
}

async function changeFirstParagraphProperties() {
  await delay(delayTime);
  const answer = prompt("Change First Paragraph Properties?");
  if (answer.toLowerCase().match("ye(s|p)")) {
    const paragraphElement = document.querySelector("p");
    paragraphElement.style.color = "red";
    paragraphElement.style.margin = "50px";
    paragraphElement.style.border = "2px red dotted";
  }
}

changeFirstParagraphProperties();

const paragraphElements = document.getElementsByTagName("p");
console.log(paragraphElements[0].style.color); // "red"
console.log(paragraphElements[1].style.color); // "green"
console.log(paragraphElements[2].style.color); // Show an empty string

const paragraphStyle = getComputedStyle(document.getElementById("para"));
console.log(paragraphStyle.fontStyle); // "italic"
console.log(paragraphStyle.color); // color blue in RGB values
