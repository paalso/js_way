// Bouncing ball
// https://thejsway.net/chapter18/#bouncing-ball

class Element {
  constructor(element) {
    this.element = element;
    const style = getComputedStyle(this.element);
    if (style.position === "static") {
      this.element.style.position = "absolute";
      this.element.style.left = this.element.offsetLeft + "px";
      this.element.style.top = this.element.offsetTop + "px";
    }
  }

  get x() {
    return parseFloat(getComputedStyle(this.element).left);
  }
  set x(value) {
    this.element.style.left = value + "px";
  }

  get y() {
    return parseFloat(getComputedStyle(this.element).top);
  }
  set y(value) {
    this.element.style.top = value + "px";
  }

  get width() {
    return this.element.offsetWidth;
  }
  get height() {
    return this.element.offsetHeight;
  }

  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

const ballElement = document.getElementById("ball");
const frameElement = document.getElementById("frame");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

const ball = new Element(ballElement);
const frame = new Element(frameElement);
let animationId = null;

let movement = 7;

startButton.addEventListener("click", (e) => {
  if (!animationId) animationId = requestAnimationFrame(animateBall);
});

stopButton.addEventListener("click", (e) => {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
});

console.log(ball.right, frame.right);

const animateBall = () => {
  stopButton.disabled = false;
  if (ball.right >= frame.right) movement = -movement;
  if (ball.left <= frame.left && movement < 0) movement = -movement;
  ball.move(movement, 0);
  animationId = requestAnimationFrame(animateBall);
};
