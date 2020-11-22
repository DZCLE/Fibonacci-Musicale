document.addEventListener('DOMContentLoaded', () =>{

    const generate = document.getElementById('generate');
    
    generate.addEventListener('click', (event) =>{
        event.preventDefault();
        //let max = document.getElementById('max').value;
        generateSequence();
    })

    function generateSequence(){
        let display = document.getElementById("display");
        let max = document.getElementById('max').value;										
    
        display.innerHTML = '';
        
        let div = document.createElement("div");
        div.id = "createPrompt";
        div.class = "fade_in";
        let p = document.createElement ("p");					
        p.innerText = "The Fibonacci Sequence Up to: " + max;
        div.appendChild(p);
        display.appendChild(div);
        
        sequenceBlock = document.createElement("div");					
        let fib = getFib(parseInt(max));
        for (let i = 0; i < fib.length; i++){
            let	ele = document.createElement("p");
            ele.innerText = fib[i];
            sequenceBlock.appendChild(ele);
            // if (i < fib.length-1){
            // 	ele = document.createElement("p");
            // 	ele.innerText = '|';						
            // 	sequenceBlock.appendChild(ele);
            // }						
        }
        sequenceBlock.id = "sequenceBlock";					
        display.insertAdjacentElement('beforeend', sequenceBlock);
        
    
        
        // ele = document.createElement("p");
        // ele.innerText = "1";
        // display.appendChild(ele);
        
        // ele = document.createElement("p");
        // ele.innerText = "2";					
        // display.appendChild(ele);
    }
    
    function getFib(fibNum){
        let fibList = [];
        while (true) {
            // if (FibNum <= 0) {
            // 	fibList.push(0);
            // }
            //When fibNum is bigger than 1
            if (fibNum >= 1) {
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
                }
            break;
        }
        return fibList;
    }






})
