document.addEventListener('DOMContentLoaded', () => {

    const generate = document.getElementById('generate');
    const max = document.getElementById('max');

    max.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            generateSequence();
        }
    })

    generate.addEventListener('click', (event) => {
        generateSequence();
    })

})

//Print out the sequence
function generateSequence() {
    let display = document.getElementById("display");
    let max = document.getElementById('max').value;

    display.innerHTML = ''; //Empty the previous sequence shown on the screen

    let parent = display.parentNode;
    parent.removeChild(display); //remove the result from DOM

    let div = document.createElement("div");
    div.id = "createPrompt";
    div.class = "fade_in";
    let p = document.createElement("p");
    p.innerText = "The Fibonacci Sequence Up to: " + max; //prompt
    div.appendChild(p);
    display.appendChild(div);

    sequenceBlock = document.createElement("div");
    let fib = getFib(parseInt(max)); // call the function to generate the sequence
    //Print it out from the array
    for (let i = 0; i < fib.length; i++) {
        let ele = document.createElement("p");
        ele.innerText = fib[i];
        sequenceBlock.appendChild(ele);
    }
    sequenceBlock.id = "sequenceBlock";
    display.insertAdjacentElement('beforeend', sequenceBlock);

    parent.appendChild(display); //append the result back to DOM to be shown

}

//Creating the sequence
function getFib(fibNum) {
    let fibList = [];
    while (true) {
        let firstNum = 0;
        let secondNum = 1;
        let thirdNum;
        fibList.push(firstNum);
        fibList.push(secondNum);
        //sum of the previous two numbers and assign it to a third number in each loop and then move by one number down to the right
        for (let i = 0; i <= fibNum; i++) {
            thirdNum = firstNum + secondNum;
            //Stop printing before the third number is bigger than fibNum
            if (thirdNum > fibNum) {
                break;
            }
            //Print "each" thirdNum in each loop
            fibList.push(thirdNum);
            //Move by one number to the right BEFORE each loop
            firstNum = secondNum;
            secondNum = thirdNum;
        }

        break;
    }
    return fibList;
}
