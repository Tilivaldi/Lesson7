
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

class Employee {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = `${firstname} ${lastname}`;
        this.email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@company.com`;
    }
}
console.log('\n\n');
console.log('-----------------------------Работник-----------------------------');
let emp1 = new Employee("John", "Smith");
console.log(emp1.fullname);  
console.log(emp1.email);  

let emp2 = new Employee("Mary", "Sue");
console.log(emp2.fullname);  
console.log(emp2.email);  

let emp3 = new Employee("Antony", "Walker");
console.log(emp3.fullname); 
console.log(emp3.email);     
console.log(emp3.firstname); 
console.log(emp3.lastname);

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

let circle1 = new Circle(11);
console.log('\n\n');
console.log('-----------------------------Площадь и периметр-----------------------------');
console.log(circle1.getArea());       /// 380.132711084365
console.log(circle1.getPerimeter());  // 69.115038378975451

class User {
    static userCount = 0; 

    constructor(username) {
        this.username = username;
        User.userCount++; 
    }
}
console.log('\n\n');
console.log('-----------------------------Пользователь-----------------------------');
let u1 = new User("johnsmith10");
console.log(User.userCount); // 1
console.log(u1.username); // "johnsmith10"

let u2 = new User("marysue1989");
console.log(User.userCount); // 2
console.log(u2.username); // "marysue1989"

let u3 = new User("milan_rodrick");
console.log(User.userCount); // 3
console.log(u3.username); // "milan_rodrick"


