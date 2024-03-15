let img;
let imagePath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/smiley.png';

function preload(){
  img = loadImage(imagePath);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //Iterates through all pixels in the image
  for (let i = 0; i < img.width; i++){
    for (let j = 0; j < img.height; j++){
      //TODO: Get the color at the current pixel
      let pixel = img.get(i, j);
      //TODO: Check if the current pixel is black.
      //      If so, set it to blue.
      if (isPixelBlack(pixel)) {
        img.set(i, j, [0, 0, 255, 255]);
      }
    }
  }
  //TODO: Remember to update the pixels!
  img.updatePixels();
}

// isPixelBlack() takes in a  length-4 rgba color array, 
// and returns true when the color is pure black,
// i.e. [0, 0, 0, 255]
// Examples:
//   isPixelBlack([0, 0, 0, 255]) == true
//   isPixelBlack([255, 0, 0, 255]) == false
function isPixelBlack(colorArray){
  return (colorArray[0] == 0 &&
     colorArray[1] == 0 &&
     colorArray[2] == 0 &&
     colorArray[3] == 255);
}

//Draw the smiley wherever you move your cursor
function draw() {
  image(img, mouseX, mouseY);
};

//Resize the canvas to the size of the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}