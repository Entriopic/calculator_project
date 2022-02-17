let display = document.querySelector('#display');
let clear = document.querySelector('#clear');
let deleteBtn = document.querySelector('#delete');
let buttons = document.querySelectorAll('.nums');
let equals = document.querySelector('#equals');
let operators = document.querySelectorAll('.operators');



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


let operate = function(x, y, oper) {

   switch(oper) {
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


display.innerText = 0;
let firstNum = null;
let secondNum = null;
let result = null;
let storedOperator = null;
let secondOperator = false;
let clearBeforeInput = false;


//each click on button displays a number on the display
buttons.forEach(button => {
   button.addEventListener('click', function(e) {
    enableOperators()
    if(clearBeforeInput) {
          display.innerText = "";
          clearBeforeInput = false;
      }
      if(display.innerText == 0) display.innerText = "";
      if(e.target.textContent == '.' && display.innerText.includes('.')) return;

   display.innerText += e.currentTarget.textContent;
   })
})


operators.forEach(operator => {
   operator.addEventListener('click', function(e) {
    disableOperators()
   if(firstNum){
      secondNum = display.innerText;
      firstNum = operateResult(); 
      storedOperator=`${e.target.textContent}`;
      secondNum = null;
      display.innerText = firstNum;
      clearBeforeInput = true;
   } else {
      firstNum = display.innerText;
      display.innerText = "";
      storedOperator = e.target.textContent;
   }
   })
});


clear.addEventListener('click', function() {
   clearAll();
})

deleteBtn.addEventListener('click', function() {
   display.innerText = display.innerText.toString().slice(0, -1);
})


equals.addEventListener('click', function(e) {
   if (display.innerText == "") return;
   if(e.target.textContent == '=' && (display.innerText.typeof === 'number')) return;
   secondNum = display.innerText;
  console.log("operator->"+storedOperator)
   result = operateResult();
   if(result == "Infinity") {
      setTimeout(() => {clearAll();}, 1000);
      console.error("How do you split your chocolate for 0 people?");
   } 
   if(result % 1 != 0) {
      display.innerText = result.toFixed(2);
   }  else {
      display.innerText = result;
   }
   firstNum = null;
   secondNum = null;
});


function enableOperators() {
    operators.forEach(operator => {
        operator.children[0].disabled=false;
    })
}


function disableOperators() {
   document.body.style.backgroundColor = "linear-gradient(top, #0e0e0e00  10%, hsl(120, 0%, 60%) 100%);";
    operators.forEach(operator => {
        operator.children[0].disabled=true;
    })

}


function operateResult() {
 result = operate(parseFloat(firstNum), parseFloat(secondNum), storedOperator);
  return result
}


function clearAll() {
   display.innerText = 0;
   firstNum = null;
   secondNum = null;
   result = null;
}





