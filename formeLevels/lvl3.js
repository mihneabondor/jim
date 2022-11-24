class DraggableRect {
  constructor(w, h, x, y) {

    this.dragging = false;
    this.rollover = false;

    this.x = x;
    this.y = y;

    this.w = w;
    this.h = h;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }

  }

  show() {
    stroke(0);
    if (this.dragging) {
      fill(50);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    rect(this.x, this.y, this.w, this.h);
  }

  pressed() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    this.dragging = false;
  }
}

class DraggableTriangle {
  constructor(x1, y1, x2, y2, x3, y3) {

    this.dragging = false;
    this.rollover = false;

    this.x1 = x1;
    this.y1 = y1;

    this.x2 = x2;
    this.y2 = y2;

    this.x3 = x3;
    this.y3 = y3;

    this.w = dist(x2, y2, x3, y3);
    this.h = dist(x2, y2, x2, y1);
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x2 && mouseX < this.x2 + this.w && mouseY > this.y2 && mouseY < this.y2 + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {
    if (this.dragging) {
      this.x1 = mouseX + this.offsetX1;
      this.y1 = mouseY + this.offsetY1;

      this.x2 = mouseX + this.offsetX2;
      this.y2 = mouseY + this.offsetY2;

      this.x3 = mouseX + this.offsetX3;
      this.y3 = mouseY + this.offsetY3;
    }

  }

  show() {
    stroke(0);
    if (this.dragging) {
      fill(50);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }

  pressed() {
    if (mouseX > this.x2 && mouseX < this.x2 + this.w && mouseY > this.y2 && mouseY < this.y2 + this.h) {
      this.dragging = true;

      this.offsetX1 = this.x1 - mouseX;
      this.offsetY1 = this.y1 - mouseY;

      this.offsetX2 = this.x2 - mouseX;
      this.offsetY2 = this.y2 - mouseY;

      this.offsetX3 = this.x3 - mouseX;
      this.offsetY3 = this.y3 - mouseY;
    }
  }

  released() {
    this.dragging = false;
  }

  snap() {
    if(Math.abs(this.y2 - windowHeight/9) < 5) {
      this.dragging = false;
      fill(50);
      this.y2 = windowHeight/9;
      this.x3 = windowWidth/5.75+windowWidth/6;
    }
  }
}



let shape1;
let shape2;
let shape3;

function setup() {
  var canvas=createCanvas(windowWidth/2, windowHeight/1.2);
  canvas.position(windowWidth/4,windowHeight/10);
  shape1 = new DraggableTriangle(50, 650, 50, 435, 320, 650);
}

function draw() {
  background('#d3d3d3');
  line (-1000,400,1000,400);

  setLineDash([10]);
  fill(175, 200);
  
  let rectangle = rect(windowWidth/6, windowHeight/9, windowWidth/5.75, windowHeight/4);
  rectangle.parent('draggable');

  setLineDash([1]);
  shape1.over();
  shape1.update();
  shape1.show();
  shape1.snap();
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function mousePressed() {
  shape1.pressed();
}

function mouseReleased() {
  shape1.released();
}
