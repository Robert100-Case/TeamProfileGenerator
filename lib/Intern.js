const inquirer = require('inquirer');
const Employee = require('./Employee');

class I extends Employee{
  constructor(schoolName, title, email) { 
   super(title, email);
    this.title= title;
    this.email=email;
   this.schoolName = schoolName;
  
  }
  getSchoolName(){
    return this.schoolName;
  }
  getRole(){
    return "Intern";
 }
 
 }

module.exports = I;