let capture;
let desiredWidth, desiredHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO, scaleCanvasToCapture); // Uses a callback function
  capture.hide();
}

function scaleCanvasToCapture() {
  // Sets desired width of canvas to width of the window
  desiredWidth = windowWidth / 2;
  // Calculates height according to webcam feed's scale
  desiredHeight = windowWidth * (capture.height / capture.width);
  // Resizes the canvas to the desired dimensions
  resizeCanvas(desiredWidth, desiredHeight);
  // Uses the .size() method to resize original webcam capture element
  capture.size(desiredWidth, desiredHeight);
}

function draw() {
  image(capture, 0, 0);
}
