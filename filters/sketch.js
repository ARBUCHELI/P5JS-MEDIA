let img1, img2, img3, img4;

let imagePath = `https://static-assets.codecademy.com/Courses/Learn-p5/media/cutePuppySquare.jpg`;

function preload() {
  img1 = loadImage(imagePath);
  img2 = loadImage(imagePath);
  img3 = loadImage(imagePath);
  img4 = loadImage(imagePath);
}

function setup() {
  createCanvas(400, 400);
  //TODO: Apply filters here
  img1.filter(GRAY);
  img2.filter(INVERT);
  img3.filter(POSTERIZE, 4);
  img4.filter(THRESHOLD);
  //Draws the 4 images to the canvas
  image(img1, 0, 0, 200, 200);
  image(img2, 0, 200, 200, 200);
  image(img3, 200, 0, 200, 200);
  image(img4, 200, 200, 200, 200);
}