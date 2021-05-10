const inquirer = require('inquirer');
const Employee = require('./Employee');

class E extends Employee{
  constructor(githubName, title, email) { 
   super(title, email);
   this.title= title;
   this.githubName = githubName;
   this.email= email;  
  }
  getGithubName(){
    return this.githubName;
  }
  getRole(){
    return "Engineer";
 }
 
 }

 module.exports = E;