
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

const lvl=["1","2"];
function newPageForme()
{
    const shuffledLevels=randomize(lvl);
    var page="levelType"+shuffledLevels[0]+".html";
    window.open(page,"_self");
}
