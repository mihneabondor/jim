
function setup() {
    var canvas = createCanvas(windowWidth/2,windowHeight/2);
    canvas.position(windowWidth/4, windowHeight/10);
    background('#d3d3d3');
}

function draw()
{
    translate(windowWidth/4, windowHeight/4);
    triangle(0  , -100, 75, 30, -75, 30);
    point(0, -100);
    point(50, 30);
    point(-50, 30);
    fill('#3C4048');
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

