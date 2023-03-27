let answerCoordinateX = 0, answerCoordinateY = 0
function setupVars() {
    answerCoordinateX = getRandomArbitrary(1, 9)
    answerCoordinateY = getRandomArbitrary(1, 5)
    localStorage.setItem('answer coordinate x', answerCoordinateX)
    localStorage.setItem('answer coordinate y', answerCoordinateY)
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function validateAnswer() {
    console.log(answerCoordinateX + ' ' + answerCoordinateY)
    let answerX = Number(document.getElementById('solution-inputX').value), answerY = Number(document.getElementById('solution-inputY').value)
    if(answerCoordinateX == answerX && answerCoordinateY == answerY) {
        document.getElementById('next-button').style.visibility = 'visible'
        document.getElementById('next-button').style.opacity = 1
        document.getElementById('solution-inputX').disabled = true
        document.getElementById('solution-inputY').disabled = true
        document.getElementById('stats-container').classList.add('verticalTranslate')
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
    }
}

const PADDING = 0;
const ROWS = 10;
const COLUMNS = 10;
const CELL_SIZE = 22;
const CELL_COLOR = 'black';
const CELL_COUNT = ROWS * COLUMNS;

function setup() {
    setupVars()
    let CANVAS_PARENT = document.getElementById('equation-container')
    let canvas = createCanvas(CANVAS_PARENT.offsetWidth, CANVAS_PARENT.offsetHeight);
    canvas.parent('equation-container')
  noStroke();

  translate(CANVAS_PARENT.offsetWidth/3, CANVAS_PARENT.offsetHeight/8)
  let colLabel = -9, rowLabel = 0
  fill(CELL_COLOR);


  let cellToBeColoredX = localStorage.getItem('answer coordinate x'), cellToBeColoredY = localStorage.getItem('answer coordinate y')
  for (let col=0;col<COLUMNS;col++) {
    for (let row=0;row<ROWS;row++) {
        if(col == cellToBeColoredX && row == ROWS-1-cellToBeColoredY) {
            fill('#DB5375')
        } else {
            fill('#808080')
        }
      let left = PADDING+(col*CELL_SIZE);
      let top = PADDING+(row*CELL_SIZE);
      let size = CELL_SIZE - 3;
      rect(left,top,size,size);

      fill('black')
      if(col == 0) {
        textSize(15)
        text(math.abs(colLabel), left-15, top+15)
      }
      colLabel++

      if(row == ROWS-1) {
        textSize(15)
        text(math.abs(rowLabel), left+CELL_SIZE/4, top+CELL_SIZE+15)
      }
    }
    rowLabel++
  }
  text('X', COLUMNS*CELL_SIZE+11, ROWS*CELL_SIZE+15)
  text('Y', -CELL_SIZE/2-1, -15)
  localStorage.setItem('primaIncercare-bool', 1);
  document.getElementById('stats-corecte-text').innerHTML = 'Corecte: ' + localStorage.getItem('corecte')
  document.getElementById('stats-primaIncercare-text').innerHTML = 'Prima încercare: ' + localStorage.getItem('primaIncercare')
}