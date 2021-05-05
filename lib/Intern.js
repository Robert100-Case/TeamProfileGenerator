const inquirer = require('inquirer');
const Employee = require('Employee');


module.exports = promptIntern = () => {
    return inquirer.prompt([
  
  /*function intern() {
    inquirer*/
  //    .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Student, what is your name?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?',
        },
        {
          type: 'input',
          name: 'school',
          message: 'What is your schools name?',
        },
  
  
      ])
      }
  
  
  module.exports = InternFunction = () => {
    promptIntern()
    .then((intData) => 
    {
    
      class Intern extends Employee{
        constructor(schoolName) { 
         super(intData.title, intData.id, intData.email);
       
         this.schoolName = schoolName;
        
        }
        getSchoolName(){
          return this.schoolName;
        }
        getRole(){
          return "Intern";
       }
       
       }
       
       const intern = new Intern(intData.school);
    
      const generateIntHTML = (intData) =>
  
      `<div class="col-lg-1"></div>
      
      <div class="col-lg-3 card" style="width: 150px;">
       <!--<img src="..." class="card-img-top" alt="...">-->
       <div class="card-body">
         <h5 class="card-title">${intern.getName()}</h5>
         <p class="card-text">${intern.getRole()} <span  class="fas fa-school"></span></p>
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">id: ${numEmplStr}</li>
         <li class="list-group-item"><a href="mailto:">Email: ${intern.getEmail()}</a></li>
         <li class="list-group-item">School: ${intern.getSchoolName()}</li>
       </ul>
      </div>`
        
    
    appendFileAsync('test.html', generateIntHTML(intData));
      })
    
    
    .then(()=> Menu())
    
    .catch((err) => console.error(err));
  
  /*.then((internData) => {
    console.log("intern data done");
    Menu();
  
  })*/
  
  }  
  