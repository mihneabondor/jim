function myFunction() {
    var x = document.getElementById('textField').value
    document.getElementById('demo').innerHTML = x
    localStorage.setItem("text", x)
  }

function func() {
    var x = localStorage.getItem("text");
    document.getElementById('demo').innerHTML = x
}

window.onload = function() {
    document.body.className += " loaded";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const levelsForme = [ "lvl1", "lvl2", "lvl3","lvl4","lvl5","lvl6"];
function openPageForme() {   
    const shuffledLevels = randomize(levelsForme);
    localStorage.setItem('formeLevels', JSON.stringify(shuffledLevels));
    var page = "/formeLevels/"+shuffledLevels[0]+".html";
    window.open(page,"_self");
}

const levelsNum=["lvl1","lvl2","lvl3","lvl4","lvl5"];
function openPageNum(){
    const shuffledLevels = randomize(levelsNum);
    localStorage.setItem('numereLevels', JSON.stringify(shuffledLevels));
    var page = "/numereLevels/"+shuffledLevels[0]+".html";
    window.open(page,"_self");
}

function next(){
    const shuffledLevels = JSON.parse(localStorage.getItem('formeLevels'));
    shuffledLevels.shift();
    localStorage.clear('formeLevels');
    localStorage.setItem('formeLevels', JSON.stringify(shuffledLevels));
    var page = "/formeLevels/"+shuffledLevels[0]+".html";
    if(shuffledLevels.length != 0) {
        window.open(page, '_self');
    } else {
        window.open('../main.html', '_self');
    }
}

function next2(){
    const shuffledLevels = JSON.parse(localStorage.getItem('numereLevels'));
    shuffledLevels.shift();
    localStorage.clear('numereLevels');
    localStorage.setItem('numereLevels', JSON.stringify(shuffledLevels));
    var page = "/numereLevels/"+shuffledLevels[0]+".html";
    if(shuffledLevels.length != 0) {
        window.open(page, '_self');
    } else {
        window.open('../main.html', '_self');
    }
}

function randomize(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

