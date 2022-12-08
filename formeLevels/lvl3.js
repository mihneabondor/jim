function setup() {
  var canvas=createCanvas(windowWidth/2, windowHeight/1.2);
  canvas.position(windowWidth/4,windowHeight/10);
  canvas.id("canvas");
}

function draw() {
  background("#d3d3d3");

  line (-1000,400,1000,400);

  setLineDash([10]);
  fill(175, 200);
  // let rectangle = rect(windowWidth/6, windowHeight/9, windowWidth/5.75, windowHeight/4);
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}