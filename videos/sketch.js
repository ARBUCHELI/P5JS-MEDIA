let video;
let videoPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/beach.mp4';

function preload(){
  //TODO: Load video here
  video = createVideo(videoPath);
}

function setup() {
  createCanvas(400, 400);
  //TODO: Hide video here
  video.hide();
}

function draw() {
  background(220);
  //TODO: Display video here
  image(video, 0, 0, width, height);
}

function mouseClicked() {
  //TODO: Play video here
  video.play();
}