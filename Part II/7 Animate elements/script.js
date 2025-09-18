// Animate elements
// https://thejsway.net/chapter18/#animate-page-elements
// ============================================================

// Repeat an action at regular intervals
// ----------------------------------------
// Count down the counter until 0
const decreaseCounter = () => {
  // Convert counter text to a number
  const counter = Number(counterElement.textContent);
  if (counter > 1) {
    // Decrease counter by one
    counterElement.textContent = counter - 1;
  } else {
    // Cancel the repeated execution
    clearInterval(intervalId);
    // Modify the page title
    const titleElement = document.getElementById("title");
    titleElement.textContent = "BOOM!!";
    // Modify the title after 2 seconds
    setTimeout(() => {
      titleElement.textContent = "Everything's broken now :(";
    }, 2000);
  }
};

const counterElement = document.getElementById("counter");

// Call the decreaseCounter function every second (1000 milliseconds)
const intervalId = setInterval(decreaseCounter, 1000);

// Animate page elements
// ------------------------

// Move the block to the right, all the way to the end of the frame
const moveBlock = () => {
  // Convert the left position of the block (value of the form "XXpx") to a number
  const xBlock = parseFloat(getComputedStyle(blockElement).left);
  // Convert the width of the frame (value of the form "XXpx") to a number
  const xMax = parseFloat(getComputedStyle(frame).width);
  // If the block isn’t already to the end of the frame
  if (xBlock + blockWidth <= xMax) {
    // Block movement
    blockElement.style.left = xBlock + movement + "px";
    animationId = requestAnimationFrame(moveBlock);
  } else {
    // Cancel the animation
    cancelAnimationFrame(animationId);
  }
};

const blockElement = document.getElementById("block");
// Convert the block width (value of the form "XXpx") to a number
const blockWidth = parseFloat(getComputedStyle(block).width);

// Movement value in pixels
const movement = 7;

// Start the animation
let animationId = requestAnimationFrame(moveBlock);
