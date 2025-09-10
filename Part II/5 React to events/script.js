const showMessage = (e) => {
  console.log(`Event type: ${e.type}, target: ${e.target}`);
  alert("Hello!");
};

// Access the button
const buttonElement = document.getElementById("myButton");
// Listen to the "click" event
buttonElement.addEventListener("click", showMessage);

document
  .getElementById("removeEventListenersButton")
  .addEventListener("click", () => {
    let isOn = false;
    document
      .getElementById("myButton")
      .removeEventListener("click", showMessage);
  });

const keyboardInfo = (e) => {
  console.log(`Keyboard event: ${e.type}, key: ${e.keyCode}`);
};

document.addEventListener("keydown", keyboardInfo);
document.addEventListener("keyup", keyboardInfo);

// Return the name of the mouse button
const getMouseButton = (code) => {
  let button = "unknown";
  switch (code) {
    case 0: // 0 is the code for the left mouse button
      button = "left";
      break;
    case 1: // 1 is the code for the middle mouse button
      button = "middle";
      break;
    case 2: // 2 is the code for the right button
      button = "right";
      break;
  }
  return button;
};

// Show info about mouse event
const mouseInfo = (e) => {
  console.log(
    `Mouse event: ${e.type}, button: ${getMouseButton(e.button)}, X: ${
      e.clientX
    }, Y: ${e.clientY}`
  );
};

// Add mouse click event listener
document.addEventListener("click", mouseInfo);
document.addEventListener("mousedown", mouseInfo);
document.addEventListener("mouseup", mouseInfo);

window.addEventListener("load", (e) => {
  console.log("The page has been loaded!");
  const pageLoadedInfo = document.createElement("p");
  pageLoadedInfo.textContent = "The page has been loaded!"; // 👈 добавили текст
  pageLoadedInfo.style.width = "120px";
  pageLoadedInfo.style.color = "red";
  pageLoadedInfo.style.position = "fixed";
  pageLoadedInfo.style.right = "20px";
  pageLoadedInfo.style.top = "20px";
  pageLoadedInfo.style.backgroundColor = "yellow";
  pageLoadedInfo.style.padding = "10px";
  pageLoadedInfo.style.textAlign = "center";
  document.body.appendChild(pageLoadedInfo);
});

window.addEventListener("beforeunload", (e) => {
  const message = "Should you stay or should you go?";
  // Standard way of showing a confirmation dialog
  e.returnValue = message;
  // Browser-specific way of showing a confirmation dialog
  return message;
});

// Click handler on the document
document.addEventListener("click", (e) => {
  console.log("Document handler");
});
// Click handler on the paragraph
document.getElementById("para").addEventListener("click", (e) => {
  console.log("Paragraph handler");
  e.stopPropagation();
});
// Click handler on the button
document.getElementById("propa").addEventListener("click", (e) => {
  console.log("Button handler");
});

document.getElementById("forbidden").addEventListener("click", (e) => {
  alert("Yes... But no.");
  e.preventDefault(); // Cancels the default behavior
});
