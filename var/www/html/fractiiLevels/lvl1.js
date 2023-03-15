
function setup() {
    var canvas = createCanvas(windowWidth/2,windowHeight/2);
    canvas.position(windowWidth/4, windowHeight/10);
    canvas.style("z-index: -1");
    background('#729EA1');
}


function draw()
{
    translate(windowWidth/4, windowHeight/4);
    let c1=color('#D3D3D3');
    let c2=color('#DB5375');
    rect(-150,-100,100,100);
    fill(c1);
    rect(-50,-100,100,100);
    rect(50,-100,100,100);
    fill(c2);
    rect(-150,0,100,100);
    rect(-50,0,100,100);
    fill(c1);
    rect(50,0,100,100);
    fill(c2);
    rect(-150,100,100,100);
    rect(-50,100,100,100);
    fill(c1);
    rect(50,100,100,100);
    fill('#DB5375');
}

function validareRaspuns(event)
{
    if(event.target.id === "corect") {
        const urmatorulButton = document.getElementById("btnNext");
        urmatorulButton.style.visibility = "visible";
        const bifa = document.getElementById("checkmark2");
        bifa.style.visibility = "visible";
        event.target.style.color = "green";
    } else if(event.target.id === "gresit1"){
        const bifa = document.getElementById("checkmark1");
        bifa.style.visibility = "visible";
        event.target.style.color = "red";
    } else if(event.target.id === "gresit2"){
        const bifa = document.getElementById("checkmark3");
        bifa.style.visibility = "visible";
        event.target.style.color = "red";
    } else if(event.target.id === "gresit3"){
        const bifa = document.getElementById("checkmark4");
        bifa.style.visibility = "visible";
        event.target.style.color = "red";
    }
}

