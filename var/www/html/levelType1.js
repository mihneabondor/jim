function validateAnswer() {
    let value = document.getElementById('solution-input').value
    if(Number(localStorage.getItem('answer')) == value) {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
        document.getElementById('next-button').style.visibility = 'visible';
        document.getElementById('next-button').style.opacity = '1';
        document.getElementById('stats-container').classList.add('verticalTranslate')
        document.getElementById('solution-input').disabled = true
    }
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setupVars() {
    let numberOfAngles = getRandomArbitrary(3, 5), angles = [], sum = 0
    for(let i = 0; i < numberOfAngles; i++) {
        let angle = getRandomArbitrary(60, 360/numberOfAngles)
        angle -= angle%5
        angles.push(Number(angle))
    }
    angles.sort(function(a, b){return a - b});
    console.log(angles)
    for(let elem of angles) {sum += elem}
    localStorage.setItem('angles', angles)
    localStorage.setItem('answer', 360-sum)
    return angles
}



function setup() {
    var canvas = createCanvas(windowWidth/2.1,windowHeight/2.8)
    canvas.parent('equation-container')
    translate((windowWidth/2.1)/2, (windowHeight/2.8)/2)
    fill('violet')
    circle(0, 0, 200)

    let anglesArray = setupVars(), pastSum = anglesArray[0], colors = ['#DB5375', '#EC9192', '#95B67F', '#B5BD89', '#729EA1']
    let r = 50, theta = 0.75;
    let x = r * cos(theta);
    let y = r * sin(theta);

    fill(colors[0])
    arc(0, 0, 200, 200, radians(0), radians(pastSum))

    textSize(16);
    fill('black')
    text(anglesArray[0], x, y)

    for(let i = 1; i < anglesArray.length; i++) {
        fill(colors[i])
        arc(0, 0, 200, 200, radians(pastSum), radians(pastSum+anglesArray[i]))
        x = r * cos(radians(pastSum)+0.7);
        y = r * sin(radians(pastSum)+0.3);
        fill('black')
        text(anglesArray[i], x, y)
        theta += 0.75
        pastSum += anglesArray[i-1]
    }

    x = r * cos(radians(pastSum)+1.5);
    y = r * sin(radians(pastSum)+0.5);
    fill('black')
    text('?', x, y)

} 