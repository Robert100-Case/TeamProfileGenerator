// const Employee = require('Employee');
//const Index = require('./Index');

const Employee = require("./Employee");
const inquirer = require('inquirer');

class M extends Employee {
    constructor(officeNumber,title, email) { 
        
      //super(answers.title, answers.id, answers.email);
      super(title, email);  
     
      this.title=title;
        //this.id=id;
        this.email=email;
      
      
     this.officeNumber = officeNumber;
    
    }
    getOfficeNumber(){
      return this.officeNumber;
    }
    getRole(){
      return "Manager";
   }
  }
  
  module.exports = M
  // module.exports = Manager;  
  

  