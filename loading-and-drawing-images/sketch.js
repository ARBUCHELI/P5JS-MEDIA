let img;
let imagePath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/cutePuppy.jpg';

function setup() {
  createCanvas(300, 400);
  //Load image here:
  img = loadImage(imagePath);
}

function draw() {
  background(220);
  //Draw image here:
  image(img, 0, 0, width, height);
}