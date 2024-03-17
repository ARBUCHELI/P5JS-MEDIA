let capture;
let desiredWidth, desiredHeight;
let isWebcamReady = false;
// TODO: Change stepSize to a different number
let stepSize = 8;

function preload() {
  createCanvas(windowWidth, windowHeight);
  // Create webcam capture
  capture = createCapture(VIDEO, function(){
    scaleCanvasToCapture();
    isWebcamReady = true;
  });
  capture.hide();
}

function draw() {
  background(255);
  if (isWebcamReady){
    capture.loadPixels();
    // Iterates through pixels in capture, in intervals of 8
    for (let y = 0; y < capture.height; y += stepSize) {
      for (let x = 0; x < capture.width; x += stepSize) {
        let indexOfRed = (x + y * capture.width) * 4;
        // Gets color of current pixel
        let r = capture.pixels[indexOfRed];
        let g = capture.pixels[indexOfRed + 1];
        let b = capture.pixels[indexOfRed + 2];
        let a = capture.pixels[indexOfRed + 3];
        // Gets the brightness of the pixel
        let brightness_val = brightness([r, g, b, a]);
        textSize(stepSize - 2);
        // Draws an emoji here given the brightness value
        if (brightness_val > 80){
          text('🤍', x, y);
        } else if (brightness_val > 70){
          text('💛', x, y);
        } else if (brightness_val > 60){
          text('🧡', x, y);
        } else if (brightness_val > 50) {
          text('❤️', x, y);
        } else if (brightness_val > 40) {
          text('💖', x, y);
        } else if (brightness_val > 30) {
          text('💜', x, y);
        } else if (brightness_val > 20) {
          text('💙', x, y);
        } else {
          text('💚', x, y);
        }
      }
    }
  }
}

function scaleCanvasToCapture() {
  // Sets desired width of canvas to width of the window
  desiredWidth = windowWidth / 3; 
  // Calculates height according to webcam feed's scale
  desiredHeight = windowWidth * (capture.height / capture.width / 3); 
  // Resizes the canvas to the desired dimensions
  resizeCanvas(desiredWidth, desiredHeight); 
  // Uses the .size() method to resize original webcam capture element
  capture.size(desiredWidth, desiredHeight); 
}