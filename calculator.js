function add(num1, num2){
  return num1 + num2
}
function subtract(num1, num2){
  return num1 - num2
}
function multiply(num1, num2){
  return num1 * num2
}
function divide(num1, num2){
  return num1 / num2
}
function power(num1, num2){
  return num1 ** num2
}
function mod(num1, num2){
  return num1 % num2
}
function sqrt(num){
  return num ** 0.5
}

function calculate(expression){

  let num1
  let operator
  let num2

  const tokens = expression.split(` `)
  
  if(tokens.length === 3){
    num1 = Number(tokens[0])
    operator = tokens[1]
    num2 = Number(tokens[2])
    if(Number.isNaN(num1) || Number.isNaN(num2)){
      alert('Enter a valid number!')
      return
    }
    if(operator === '+'){
    return add(num1, num2)
    }
  
    if(operator === '-'){
      return subtract(num1, num2)
    }
    if(operator === '*'){
      return multiply(num1, num2)
    }
  
    if(operator === '/'){
      return divide(num1, num2)
    }
  
    if(operator === '^'){
      return power(num1, num2)
    }
  
    if(operator === '%'){
      return mod(num1, num2)
    }
  }
  if(tokens.length === 2){
    operator = tokens[0]
    num1 = Number(tokens[1])
    if(Number.isNaN(num1)){
      alert('Enter a valid number!')
      return
      }
    }
    if (operator === 'sqrt') {
      return sqrt(num1);
    } 
    else{
      alert(`Invalid expression`)
      return
    }
  }


/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});