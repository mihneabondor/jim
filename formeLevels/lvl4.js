
const { filter } = require("mathjs");

function setup() {
    var canvas = createCanvas(windowWidth/2,windowHeight/2);
    canvas.style("z-index:-1");
    canvas.position(windowWidth/4, windowHeight/10);
    background('#d3d3d3');
}

function draw()
{

    noStroke();
    fill('#DB5375');
    beginShape();
    vertex(330,180)
    vertex(250,180)
    vertex(220,95)
    vertex(180,180)
    vertex(100,180)
    vertex(165,235)
    vertex(140,305)
    vertex(215,265)
    vertex(290,305)
    vertex(265,235)
    endShape(CLOSE);
    translate(windowWidth/4, windowHeight/4);
}
function validareRaspuns()
{
    let laturi=document.getElementById("lat");
    if(laturi.value === "10") {
        const urmatorulButton = document.getElementById("btnNext");
        urmatorulButton.style.visibility = "visible";
    }
    else
    alert("get gud");
}