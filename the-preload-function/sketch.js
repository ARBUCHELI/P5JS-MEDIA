let img;

function preload(){
  img = loadImage(imagePath);
}

let imagePath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/cutePuppy.jpg';

function setup() {
  createCanvas(300, 400);
  
  background(220);
  image(img, 0, 0, 300, 400);
}