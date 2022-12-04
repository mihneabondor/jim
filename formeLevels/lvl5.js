
function setup() {
    var canvas = createCanvas(windowWidth/2,windowHeight/2,WEBGL);
    canvas.position(windowWidth/4, windowHeight/10);
}

function draw()
{
    background("#d3d3d3");
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(100);
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

