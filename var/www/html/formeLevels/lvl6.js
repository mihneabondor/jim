
function setup() {
    var canvas = createCanvas(windowWidth/2,windowHeight/2);
    canvas.style("z-index:-1");
    canvas.position(windowWidth/4, windowHeight/10);
    background('#d3d3d3');
}


function validareRaspuns()
{
    event.preventDefault()
    let laturi=document.getElementById("lat");
    if(laturi.value === "6") {
        const urmatorulButton = document.getElementById("btnNext");
        urmatorulButton.style.visibility = "visible";
    }
    
}