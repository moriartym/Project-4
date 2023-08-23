const mainContainer = document.getElementById("main-container");
const inputContainer = document.getElementById("input-container");
const outputContainer = document.getElementById("output-container");
const topContainer = document.getElementById("top-container");
const inputButton = document.querySelectorAll(".input-button");
const inputButtonDelRes = document.querySelectorAll(".input-button-delete-reset");
const toggleSwitch = document.getElementById("toggle-switch");
const equalButton = document.getElementById("button-equal");
const inputButtonhover = document.querySelectorAll(".input-button:hover");
const inputButtondelhover = document.querySelectorAll(".input-button-delete-reset:hover");
const equalhoverButton = document.getElementById("button-equal:hover");
const lastOutputvery = document.querySelector("h1");



function switchTheme(themeName){
    mainContainer.classList.remove("active");
    inputContainer.classList.remove("active");
    outputContainer.classList.remove("active");
    topContainer.classList.remove("active");
    inputButton.forEach(button => button.classList.remove("active"));
    inputButtonDelRes.forEach(button => button.classList.remove("active"));
    toggleSwitch.classList.remove("active");
    equalButton.classList.remove("active");
    lastOutputvery.classList.remove("active");

    mainContainer.classList.remove("active1");
    inputContainer.classList.remove("active1");
    outputContainer.classList.remove("active1");
    topContainer.classList.remove("active1");
    inputButton.forEach(button => button.classList.remove("active1"));
    inputButtonDelRes.forEach(button => button.classList.remove("active1"));
    toggleSwitch.classList.remove("active1");
    equalButton.classList.remove("active1");
    lastOutputvery.classList.remove("active1");

  

    if(themeName == "theme3"){
        lastOutputvery.classList.toggle("active");
        mainContainer.classList.toggle("active");
        inputContainer.classList.toggle("active");
        outputContainer.classList.toggle("active");
        topContainer.classList.toggle("active");
        inputButton.forEach( button=>button.classList.toggle("active") );
        inputButtonhover.forEach( button=>button.classList.toggle("active") );
        inputButtonDelRes.forEach( button=>button.classList.toggle("active") );
        inputButtondelhover.forEach( button=>button.classList.toggle("active") );
        toggleSwitch.classList.toggle("active");
        equalButton.classList.toggle("active");
        equalhoverButton.classList.toggle("active");
    } else if (themeName == "theme2"){
        lastOutputvery.classList.toggle("active1");
        mainContainer.classList.toggle("active1");
        inputContainer.classList.toggle("active1");
        outputContainer.classList.toggle("active1");
        topContainer.classList.toggle("active1");
        inputButton.forEach( button=>button.classList.toggle("active1") );
        inputButtonDelRes.forEach( button=>button.classList.toggle("active1") );
        toggleSwitch.classList.toggle("active1");
        equalButton.classList.toggle("active1");
        inputButtonhover.forEach( button=>button.classList.toggle("active1") );
        inputButtondelhover.forEach( button=>button.classList.toggle("active1") );
        equalhoverButton.classList.toggle("active1");
    }else {
        mainContainer.classList.remove("active");
        inputContainer.classList.remove("active");
        outputContainer.classList.remove("active");
        topContainer.classList.remove("active");
        inputButton.forEach(button => button.classList.remove("active"));
        inputButtonDelRes.forEach(button => button.classList.remove("active"));
        toggleSwitch.classList.remove("active");
        equalButton.classList.remove("active");
        inputButtonhover.forEach( button=>button.classList.remove("active"));
        inputButtondelhover.forEach( button=>button.classList.remove("active"));
        equalhoverButton.classList.remove("active");
        lastOutputvery.classList.remove("active");

        mainContainer.classList.remove("active1");
        inputContainer.classList.remove("active1");
        outputContainer.classList.remove("active1");
        topContainer.classList.remove("active1");
        inputButton.forEach(button => button.classList.remove("active1"));
        inputButtonDelRes.forEach(button => button.classList.remove("active1"));
        toggleSwitch.classList.remove("active1");
        equalButton.classList.remove("active1");
        inputButtonhover.forEach( button=>button.classList.remove("active1"));
        inputButtondelhover.forEach( button=>button.classList.remove("active1"));
        equalhoverButton.classList.remove("active1");
        lastOutputvery.classList.remove("active1");
    }
}
const radioButton = document.querySelectorAll("input");
radioButton.forEach( radioButton => {
    radioButton.addEventListener('change', function(){
        const selectedTheme = radioButton.value;
        switchTheme(selectedTheme);
    })
})

const lastOutput = document.getElementById("last-output");

inputButton.forEach( button => {
    button.addEventListener("click",function(){
        const item = button.value;
        const start = lastOutput.textContent;
        lastOutput.textContent = start + item;
    })
})

const deleteBtn = document.getElementById("button-delete");

    deleteBtn.addEventListener("click",function(){
        const start = lastOutput.textContent;
        const end = start.slice(0,-1);
        lastOutput.textContent = end;
    })

const resetBtn = document.getElementById("button-reset");

    resetBtn.addEventListener("click",function(){
        lastOutput.textContent = "";
    })

const pointBtn = document.getElementById("button-point");
    
    pointBtn.addEventListener("click",function(){
    const start = lastOutput.textContent;
    lastOutput.textContent =start + ".";
})

let mathInput = 0;
let mathPlus = false;
let mathMinus = false;
let mathDivide= false;
let mathMultiply = false;

const plusBtn = document.getElementById("button-plus");

    plusBtn.addEventListener("click",function(){
    mathInput = lastOutput.textContent;
    mathPlus = true;
    lastOutput.textContent =" ";
})

const minusBtn = document.getElementById("button-minus");

    minusBtn.addEventListener("click",function(){
    if(lastOutput.textContent === ""){
        lastOutput.textContent = "-";
    }else{
        mathInput = lastOutput.textContent;
        mathMinus = true;
        lastOutput.textContent =" ";
    }

})

const divideBtn = document.getElementById("button-divide");

divideBtn.addEventListener("click",function(){
    mathInput = lastOutput.textContent;
    mathDivide = true;
    lastOutput.textContent =" ";
})

const multiplyBtn = document.getElementById("button-multiply");

multiplyBtn.addEventListener("click",function(){
    mathInput = lastOutput.textContent;
    mathMultiply = true;
    lastOutput.textContent =" ";
})

const equalBtn = document.getElementById("button-equal");

equalBtn.addEventListener("click", function() {
    const input2 = lastOutput.textContent;
  
    if (mathPlus === true) {
      lastOutput.textContent = Number(mathInput) + Number(input2); 
      mathPlus = false; 
    } else if (mathMinus === true){
        lastOutput.textContent = Number(mathInput) - Number(input2); 
        mathMinus = false;         
    } else if (mathDivide === true){
        lastOutput.textContent = Number(mathInput) / Number(input2); 
        mathDivide = false;         
    } else if (mathMultiply === true){
        lastOutput.textContent = Number(mathInput) * Number(input2); 
        mathMultiply = false;         
    }
  });
