
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
        const urmatorulButton = document.getElementById("btnNext");
        urmatorulButton.style.visibility = "visible";
        const bifa = document.getElementById("checkmark4");
        bifa.style.visibility = "visible";
        event.target.style.color = "green";
    } else if(event.target.id === "gresit1"){
        const bifa = document.getElementById("checkmark1");
        bifa.style.visibility = "visible";
        event.target.style.color = "red";
    } else if(event.target.id === "gresit2"){
        const bifa = document.getElementById("checkmark2");
        bifa.style.visibility = "visible";
        event.target.style.color = "red";
    } else if(event.target.id === "gresit3"){
        const bifa = document.getElementById("checkmark3");
        bifa.style.visibility = "visible";
        event.target.style.color = "red";
    }
}

