let display = document.querySelector('#display');
let clear = document.querySelector('#clear');
let buttons = document.querySelectorAll('.nums-ops');
let equals = document.querySelector('#equals');
let operators = document.querySelectorAll('.operators');


// basic functions
function add(x, y) {
   return x + y;
}

function subtract(x, y) {
   return x - y;
}

function multiply(x, y) {
   return x * y;
}

function divide(x, y) {
   return x / y;
}

// operate function
let operate = function(x, y, operator) {
     switch(operator) {
       case "+":
          return add(x, y);
       case "-":
          return subtract(x, y);
       case "*":
          return multiply(x, y);
       case "/":
          return divide(x, y);
       default: 
          console.log("Yikes");         
    } 
};


//variables for storing nums
let firstNum = null;
let secondNum = null;
let result = null;

//each click on button displays a number on the display
buttons.forEach(button => {
   button.addEventListener('click', function(e) {
     display.innerText += e.currentTarget.textContent;
   })
})

//update firstNum variable when operator is clicked
operators.forEach(operator => {
   operator.addEventListener('click', function(e) {
     if(firstNum){
       secondNum = display.innerText;
       operateResult();
       firstNum = `${result}${e.target.textContent}`;
       secondNum = null;
       display.innerText = "";
     } else {
       firstNum = display.innerText;
       display.innerText = "";
     }
   })
});

//clear button, restoring variables to 0
clear.addEventListener('click', function() {
   display.innerText = "";
   firstNum = null;
   secondNum = null;
   result = null;
})

//when equals sign gets pressed it stores the value of display to secondNum variable
equals.addEventListener('click', function() {
   secondNum = display.innerText;
   operateResult();
   display.innerText = result.toFixed(2);
   firstNum = null;
   secondNum = null;
});

//function for calculation
function operateResult() {
   if(firstNum.includes("+")) {
      result = operate(parseFloat(firstNum), parseFloat(secondNum), "+");
   } else if(firstNum.includes("-")) {
      result = operate(parseFloat(firstNum), parseFloat(secondNum), "-");
   } else if(firstNum.includes("*")) {
      result = operate(parseFloat(firstNum), parseFloat(secondNum), "*");
   } else if(firstNum.includes("/")) {
      result = operate(parseFloat(firstNum), parseFloat(secondNum), "/");
   }
}






