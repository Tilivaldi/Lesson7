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