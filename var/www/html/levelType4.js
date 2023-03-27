function validareRaspuns(event)
{    if(event.target.id === "corect") {
        if(event.target.parentElement.style.background != 'rgb(80, 200, 120)'){
            const jsConfetti = new JSConfetti()
            jsConfetti.addConfetti()
        }
        event.target.parentElement.style.background = 'rgb(80, 200, 120)';
        document.getElementById('next-button').style.visibility = 'visible';
        document.getElementById('next-button').style.opacity = '1';
        document.getElementById('stats-container').classList.add('verticalTranslate')
    } else {
        event.target.parentElement.classList.toggle('shake');
        localStorage.setItem('primaIncercare-bool', false);
        localStorage.setItem('primaIncercare', 0);
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

  function setup() {
    let canX=document.getElementById('forma-container').offsetWidth;
    let canY=document.getElementById('forma-container').offsetHeight;

    var canvas = createCanvas(canX, canY);
    canvas.parent('forma-container')
    translate(canX/2, canY/2) 
    let forme=["cerc","triunghi","patrat","romb","pentagon","hexagon (hexa=6)","heptagon (hepta=7)","octogon (octo=8)","stea"];
    let laturi=['1','3','4','4','5','6','7','8','10'];
    let col=["rgb(254, 199, 74)","rgb(98, 163, 255)"];
    let answers=[];
    let buttons=[];
    let type=math.floor(random(0,8));
    answers.push(forme[type]);
    let i=1;
    let fr=new Array(15).fill(false);
    fr[type]=true;
    let j=math.floor(random(0,8));
    while(i!=4)
    {
        while(!fr[j] && i!=4)
        {
            answers.push(forme[j]);
            fr[j]=true;
            j=math.floor(random(0,8));
            i++;
        }
        j=math.floor(random(0,8));
    }
    answers=randomize(answers);
    for(i=0;i<=3;i++)
        if(answers[i]==forme[type])
            buttons.push("corect");
        else
            buttons.push("gresit");

    for(let i = 0; i <= 3; i++) {
        let answer = answers[i]
        document.getElementById("variant"+i).innerHTML = answer
        if(forme[type] == answer)
            document.getElementById("variant"+i).id = "corect"
        else
            document.getElementById("variant"+i).id = "gresit"
        }


        if(type=='2')
        {
    
            fill(random(col));
            rotate(PI/4);
            polygon(0,0,100,4);
        }
        else if(type=='0')
        {
            fill(random(col));

            circle(0,0,200);
        }
        else if(type=='3')
        {
            fill(random(col));
            polygon(0,0,100,4);

        }
        else if(type=='8')
        {
            fill(random(col));
            rotate(PI/2+PI);
            star(0,0,50,116,5);
        }
        else 
        {
            rotate(PI/2+PI);
            fill(random(col));
            polygon(0,0,90,laturi[type]);
        }
    localStorage.setItem('primaIncercare-bool', 1);
    document.getElementById('stats-corecte-text').innerHTML = 'Corecte: ' + localStorage.getItem('corecte')
    document.getElementById('stats-primaIncercare-text').innerHTML = 'Prima încercare: ' + localStorage.getItem('primaIncercare')
}