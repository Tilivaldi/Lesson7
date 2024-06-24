class Calculator {
    add(a, b) {
      return a + b;
    }

    subtract(a, b) {
      return a - b;
    }

    multiply(a, b) {
      return a * b;
    }

    divide(a, b) {
      if (b === 0) {
        throw new Error("На ноль делить нельзя");
      }
      return a / b;
    }
  }

  const calculator = new Calculator();
  console.log('-----------------------------Калькулятор-----------------------------');
  console.log(calculator.add(10, 5));
  console.log(calculator.subtract(10, 5));
  console.log(calculator.multiply(10, 5)); 
  console.log(calculator.divide(10, 5)); 