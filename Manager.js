const inquirer = require('inquirer');
 const Employee = require('./Employee');
const Index = require('./Index');

module.exports =  promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Manager, what is your name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'officeNum',
        message: 'What is your office number?',
      },
    
  ]);
  }

  module.exports =  init = () => {
    promptUser()
    
  
    .then((answers) => {
      class Manager extends Employee{
        constructor(officeNumber) { 
         super(answers.title, answers.id, answers.email);
       n
         this.officeNumber = officeNumber;
        
        }
        getOfficeNumber(){
          return this.officeNumber;
        }
        getRole(){
          return "Manager";
       }
        
       }
      numberEmployees+=1;
      numEmplStr=numberEmployees.toString(); 
      const common = new Manager(answers.officeNum);
      const generateHTML = (answers) =>
  
    //const initialHTML =  
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Tangerine">
        <script src="https://kit.fontawesome.com/8e56e10cfd.js"></script>
  
        <link rel="stylesheet" href="style.css" />
    
    </head>
    <body>
        <div class="jumbotron">
          <center><h2> My Team</h2></center>
        
        </div>
      <main>    
        
       <section class="row gy-5">
        <div class="col-lg-3 card" style="width:50px;">
        <!-- <img src="..." class="card-img-top" alt="...">-->
        <div class="card-body"> 
          <h5 class="card-title">${common.getName()}</h5>
          <p class="card-text"> ${common.getRole()} <span  class="fas fa-tasks"></span>
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">id: ${numEmplStr}</li>
          <li class="list-group-item"> <a href="mailto:">Email: ${common.getEmail()}</a>
          </li>
          <li class="list-group-item">Office Number: ${common.getOfficeNumber()} </li>
        </ul>
       </div> `
    
      writeFileAsync('test.html', generateHTML(answers));
      
     // console.log(common.getName());
       
      })
       
    .then(()=> Menu())
    
    .catch((err) => console.error(err));
  
  }
  
  
//  module.exports = init();
 // module.exports = promptUser();
