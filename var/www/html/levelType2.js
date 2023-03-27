function validateAnswer() {
    let value = document.getElementById('solution-input').value
    if(Number(localStorage.getItem('ans')) == value) {
        document.getElementById('next-button').style.visibility = 'visible'
        document.getElementById('next-button').style.opacity = 1
        document.getElementById('solution-input').disabled = true
        document.getElementById('stats-container').classList.add('verticalTranslate')
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
    }
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
function setup()
{
    var canvas = createCanvas(windowWidth/2.1,windowHeight/2.8)
    canvas.parent('equation-container')
    translate((windowWidth/2.1)/2, (windowHeight/2.8)/2)
    let types=['3','4','5','6','7','8','9','10'];
    let col=["rgb(254, 199, 74)","rgb(98, 163, 255)"];
    let type=random(types);
    localStorage.setItem('ans',type);
    if(type=='4')
    {
        let types2=['1','2','3'];
        let type2=random(types2);
        fill(random(col));
        if(type2=='1')
            polygon(0,0,82,4);
        else if(type2=='2')
            {
                rotate(PI/4);
                polygon(0,0,100,4);
            }
        else
            {
                rect(-150, -75, 300, 150);
            }
    }
    else if(type=='10')
    {
        let types2=['1','2','3'];
        let type2=random(types2);
        fill(random(col));
        if(type2=='1')
         rotate(PI/2+PI),star(0,0,50,116,5);
        else
        rotate(PI/2+PI),polygon(0,0,100,10);
    }
    else if(type=='12')
    {
        fill(random(col));
        rotate(PI/4);
        polygon(0,0,30,4);
        polygon(30,30,30,4);
        polygon(60,-60,30,4);
        polygon(-30,-30,30,4);
        //gura mea nush sa fac o cruce

    }
    else 
    {
        rotate(PI/2+PI);
        fill(random(col));
        polygon(0,0,90,type);
    }
    
}