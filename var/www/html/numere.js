const { index, number } = require("mathjs");

function validareRaspuns(event)
{
    console.log(equation);
    if(event.target.id === "corect") {
        event.target.parentElement.style.background = 'rgb(80, 200, 120)';
        document.getElementById('next-button').style.visibility = 'visible';
        document.getElementById('next-button').style.opacity = '1';
        document.getElementById('stats-container').classList.add('verticalTranslate')
    } else {
        event.target.parentElement.classList.toggle('shake');
        document.getElementById('equation-step1').style.visibility = 'visible';
        localStorage.setItem('primaIncercare-bool', 0);
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

function generateEquation() {
    let numberCount = getRandomArbitrary(3,5), numere = [], indexSemne = [], semne = ["+", "-", "*"]

    for(let i = 1; i <= numberCount; i++) {
        let randSemne = getRandomArbitrary(0,3), randNumere = getRandomArbitrary(1,10);
        numere.push(randNumere);
        indexSemne.push(semne[randSemne]);
    }

    let equation = "";
    for(let i = 0; i < numberCount; i++) {
        equation += numere[i] + " " + indexSemne[i] + " ";
    }

    equation = equation.substring(0, equation.length-2);

    let position = equation.indexOf('*');
    if(position != -1) {
        let newEquation = equation.charAt(position-2) + ' ' + equation.charAt(position) + ' ' + equation.charAt(position+2);
        document.getElementById('equation-step1').innerHTML = equation.replace(newEquation, math.evaluate(newEquation)) + ' = ?';
    } else {
        let newEquation = equation.charAt(0) + ' ' + equation.charAt(2) + ' ' + equation.charAt(4);
        document.getElementById('equation-step1').innerHTML = equation.replace(newEquation, math.evaluate(newEquation)) + ' = ?';
    }
    localStorage.setItem('equation', equation)

    return equation;
}


function generateAnswers(equation) {
    let  answers = [];
    let correctAnswer = math.evaluate(equation);
    answers.push(correctAnswer);
    answers.push(getRandomArbitrary(correctAnswer-8, correctAnswer+8));
    answers.push(getRandomArbitrary(correctAnswer+9, correctAnswer+16));
    answers.push(getRandomArbitrary(correctAnswer-16, correctAnswer-9)); 
    answers=randomize(answers);
    return answers
}

function setEquation(equation) {
    document.getElementById("equation").innerHTML = equation + ' = ?'
}

function setButtons(){
    let buttons=[];
    let equation=generateEquation();
    let answers=generateAnswers(equation);
    let correctAnswer=math.evaluate(equation);
    
    for(let i=0;i<4;i++){
        if(correctAnswer==answers[i])
            buttons.push("corect");
        else
            buttons.push("gresit");
    }

    return buttons;
}

function prepareScreen() {
    let equation = generateEquation()
    setEquation(equation)
    let answers = generateAnswers(equation)

    for(let i = 0; i <= 3; i++) {
        let answer = answers[i]
        document.getElementById("variant"+i).innerHTML = answer
        if(math.evaluate(equation) == answer)
            document.getElementById("variant"+i).id = "corect"
        else
            document.getElementById("variant"+i).id = "gresit"
    }

    localStorage.setItem('primaIncercare-bool', 1);

    document.getElementById('stats-corecte-text').innerHTML = 'Corecte: ' + localStorage.getItem('corecte')
    document.getElementById('stats-primaIncercare-text').innerHTML = 'Prima încercare: ' + localStorage.getItem('primaIncercare')
}