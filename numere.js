function validareRaspuns(event)
{
    if(event.target.id === "corect") {
        event.target.style.background = 'green';
        const urmatorulButton = document.getElementById("btnNext");
        urmatorulButton.style.visibility = "visible";
        const raspButton=document.getElementById("symb2");
        raspButton.style.visibility="visible";
    } else {
        event.target.style.background = 'red';
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
    let numberCount = getRandomArbitrary(3, 6), numere = [], indexSemne = [], semne = ["+", "-", "*"];
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
    return equation;
}


function generateAnswers(equation) {
    let  answers = [];
    let correctAnswer = math.evaluate(equation);
    answers.push(correctAnswer);
    answers.push(getRandomArbitrary(correctAnswer/2, correctAnswer-1));
    answers.push(getRandomArbitrary(correctAnswer+1, correctAnswer*2));
    answers.push(getRandomArbitrary(correctAnswer+1, correctAnswer*2));

    answers=randomize(answers);

    return answers
}

function setEquation(equation) {
    document.getElementById("symb").innerHTML = equation
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