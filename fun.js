document.addEventListener('DOMContentLoaded', function() {
      const display = document.getElementById('display');
      const buttons = document.querySelectorAll('.btn');
      let currentInput = '';
      let operator = '';
      let previousInput = '';
  
      buttons.forEach(button => {
          button.addEventListener('click', function() {
              const value = this.getAttribute('data-value');
  
              if (value === 'C') {
                  currentInput = '';
                  operator = '';
                  previousInput = '';
                  display.textContent = '0';
                  return;
              }
  
              if (value === '=') {
                  if (operator && previousInput && currentInput) {
                      currentInput = operate(previousInput, currentInput, operator);
                      display.textContent = currentInput;
                      operator = '';
                      previousInput = '';
                  }
                  return;
              }
  
              if (this.classList.contains('operator')) {
                  if (currentInput && !operator) {
                      operator = value;
                      previousInput = currentInput;
                      currentInput = '';
                  } else if (currentInput && operator) {
                      previousInput = operate(previousInput, currentInput, operator);
                      operator = value;
                      currentInput = '';
                  }
                  return;
              }
  
              currentInput += value;
              display.textContent = currentInput;
          });
      });
  
      function operate(a, b, operator) {
          a = parseFloat(a);
          b = parseFloat(b);
  
          switch (operator) {
              case '+':
                  return (a + b).toString();
              case '-':
                  return (a - b).toString();
              case '*':
                  return (a * b).toString();
              case '/':
                  return (a / b).toString();
              default:
                  return b.toString();
          }
      }
  });
  