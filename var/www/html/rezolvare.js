function getSignsCount() {
    let equation = localStorage.getItem('equation')
    var count = 0
    for(var i = 0; i < equation.length; i++) {
        if(equation.charAt(i) == '+' || equation.charAt(i) == '-' || equation.charAt(i) == '*') {
            count++
        }
    }
    return count
}

function getSteps(steps) {
    var steps = []
    var equation = localStorage.getItem('equation')
    var splitEquation = equation.split(' ')

    var starPosition = splitEquation.indexOf('*')
    while(starPosition != -1) {
        let step = splitEquation[starPosition-1] + ' ' + splitEquation[starPosition] + ' ' + splitEquation[starPosition+1]
        splitEquation[starPosition] = math.evaluate(step)
        splitEquation.splice(starPosition-1, 1)
        splitEquation.splice(starPosition, 1)

        let newEquation = '';
        for(var elem of splitEquation) {
            newEquation = newEquation + elem + ' '
        }
        steps.push(newEquation)
        starPosition = splitEquation.indexOf('*')
    }

    var signPosition = splitEquation.indexOf('+') != -1 && splitEquation.indexOf('-') != -1 ? Math.min(splitEquation.indexOf('+'), splitEquation.indexOf('-')) : Math.max(splitEquation.indexOf('+'), splitEquation.indexOf('-'))
    while(signPosition != -1) {
        let step = splitEquation[signPosition-1] + ' ' + splitEquation[signPosition] + ' ' + splitEquation[signPosition+1]
        splitEquation[signPosition] = math.evaluate(step)
        splitEquation.splice(signPosition-1, 1)
        splitEquation.splice(signPosition, 1)
        let newEquation = '';
        for(var elem of splitEquation) {
            newEquation = newEquation + elem + ' '
        }
        steps.push(newEquation)
        signPosition = splitEquation.indexOf('+') != -1 && splitEquation.indexOf('-') != -1 ? Math.min(splitEquation.indexOf('+'), splitEquation.indexOf('-')) : Math.max(splitEquation.indexOf('+'), splitEquation.indexOf('-'))
    }
    return steps
}

function getOperations(steps) {
    for(var i = 0; i < steps.length-1; i++) {
        let str1 = steps[i].split(' '), str2 = steps[i+1].split(' ');
        console.log(str1 + ' si ' + str2)
        for(let index1 = 0; index1 < str1.length; index1++) {
            for(let index2 = 0; index2 < str2.length; index2++) {
                if(str1[index1] == str2[index2]) {
                    str1.splice(index1, 1)
                    str2.splice(index2, 1)
                }
            }
        }
        console.log(str1)
        console.log(str2)
    }
}

function prepareScreen() {
    let signs = getSignsCount
    let steps = getSteps(signs)
    let container = document.getElementById('rezolvare-container')
    console.log(steps)

    document.getElementById('equation-text').innerHTML = 'Rezolvare pentru ecuația: ' + localStorage.getItem('equation') + ' = ?' 

    let hasStars = localStorage.getItem('equation').indexOf('*') != -1 ? true : false
    if(hasStars == true) {
        const container = document.createElement('div')
        container.id = 'tip-star'
        container.style.backgroundColor = "#e0e0e0"
        container.style.padding = '1vh'
        container.style.marginTop = '2vh'
        container.style.marginLeft = '3vw'
        container.style.marginRight = '3vw'
        container.style.borderLeft = '5px solid green'
        container.style.opacity = 0

        container.style.animationName = 'appearing-animation'
        container.style.animationDuration = '4s'
        container.style.animationFillMode = 'forwards'

        document.getElementById('rezolvare-container').appendChild(container)
        const node = document.createElement('p')
        const textNode = document.createTextNode('Mereu se va începe prin efectuarea înmulțirilor')
        node.appendChild(textNode)
        document.getElementById(container.id).appendChild(node)
        node.style.animationDuration = '4s'
    }
    
    let tip2Showed = false
    for(let i = 0; i < steps.length; i++) {
        const animationDelayDivs = 2*i
        const animationDelayText = 2*i+1
        if((hasStars == true && i > 0 && steps[i].indexOf('*') == -1 && tip2Showed == false) || (hasStars == false && i == 0)) {
            const container = document.createElement('div')
            container.id = 'tip-sign'
            container.style.backgroundColor = "#e0e0e0"
            container.style.padding = '1vh'
            container.style.marginTop = '2vh'
            container.style.marginLeft = '3vw'
            container.style.marginRight = '3vw'
            container.style.borderLeft = '5px solid green'
            container.style.opacity = 0
    
            container.style.animationName = 'appearing-animation'
            container.style.animationDuration = '4s'
            container.style.animationFillMode = 'forwards'

            container.style.animationDelay = animationDelayDivs+'s'
            container.style.animationFillMode = 'forwards'
    
            document.getElementById('rezolvare-container').appendChild(container)
            const node = document.createElement('p')
            const textNode = document.createTextNode('Operațiile se vor efectua în ordinea în care apar')
            node.appendChild(textNode)
            document.getElementById(container.id).appendChild(node)
            node.style.animationDuration = '4s'
            node.style.animationDelay = animationDelayText +'s'

            tip2Showed = true
        }

        const container = document.createElement('div')
        container.id = 'rezolvare-cell-container' + i

        container.style.padding = '2vh'
        container.style.marginTop = '2vh'
        container.style.marginLeft = '3vw'
        container.style.marginRight = '3vw'
        container.style.borderLeft = '5px solid #DB5375'
        container.style.opacity = 0

        container.style.animationName = 'appearing-animation'
        container.style.animationDuration = '4s'

        container.style.animationDelay = animationDelayDivs+'s'
        container.style.animationFillMode = 'forwards'

        document.getElementById('rezolvare-container').appendChild(container)
        const node = document.createElement('p')
        const textNode = document.createTextNode('= ' + steps[i])
        node.appendChild(textNode)
        document.getElementById(container.id).appendChild(node)

        node.style.animationDelay = animationDelayText +'s'
    }
}