class Employee {
    constructor(title, id, email) {
      this.titleCD = title;
      this.idCD = id;
      this.emailCD = email;
    }
    /*printInfo() {
      console.log(`email: ${this.emailCD}`);
      console.log(`id: ${this.idCD}`);
    }*/
    getName(){
      return this.titleCD;
    }
    getId(){
      return this.idCD;
    }
    getEmail(){
      return this.emailCD;
    }
     getRole(){
       return "Employee";
    }
  
  }
module.exports = Employee;  