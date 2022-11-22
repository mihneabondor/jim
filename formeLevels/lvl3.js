
var x;
var y;

var img1X = 0, img2X = 0;
var img1Y = 0, img2Y = 0;
var img1, img2;

// loading up an image
function preload() {
  img1 = loadImage('../Resources/triunghi.png');
  img2= loadImage('../Resources/triunghi275.png');
}


// if the mouse pressed when on the image 
function mouseDragged() {
  if ((mouseX > img1X + 50) && (mouseX < img1X + 200)) {
    if ((mouseY > img1Y + 100) && (mouseY < img1Y + 200)) {
      img1X = mouseX;
      img1Y = mouseY;
    }
  }

  if ((mouseX > img2X - 50) && (mouseX < img2X + 50)) {
    if ((mouseY > img2Y - 50) && (mouseY < img2Y + 50)) {
      img2X = mouseX;
      img2Y = mouseY;
    }
  }
}

function setup() {
  var canvas=createCanvas(windowWidth/2, windowHeight/1.2);
    canvas.position(windowWidth/4,windowHeight/10);
}

function draw() {
  background('#d3d3d3');
  line (-1000,400,1000,400);
  
  stroke('purple');
    strokeWeight(10);
    point(img1X+50, img1Y+100);
    point(img1X+200, img1Y+200);
    image(img1, img1X-50, img1Y-5, 200, 200);
//   image(img2, img2X, img2Y, 200, 200);       
    rect(img1X, img1Y);
}