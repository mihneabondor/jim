
function setup() {
    var canvas = createCanvas(windowWidth/2,windowHeight/2);
    canvas.position(windowWidth/4, windowHeight/10);
    background('#d3d3d3');
}

function draw()
{
    translate(windowWidth/4, windowHeight/4);
    rectMode(CENTER);
    rect(0, 0, 100, 100);
    fill('#DB5375');
}

function validareRaspuns(event)
{
    if(event.target.id === "corect") {
        event.target.style.background = 'green';
        const urmatorulButton = document.getElementById("btnNext");
        urmatorulButton.style.visibility = "visible";
    } else {
        event.target.style.background = 'red';
    }
}

