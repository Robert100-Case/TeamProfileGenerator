const fs = require('fs');
const inquirer = require('inquirer');
const { generate } = require('rxjs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

var numberEmployees=0;

class Employee {
  constructor(title, id, email) {
    this.titleCD = title;
    this.idCD = id;
    this.emailCD = email;
  }
  printInfo() {
    console.log(`email: ${this.emailCD}`);
    console.log(`id: ${this.idCD}`);
  }
  getName(){
    return this.emailCD;
  }

}

/*function init()
inquirer
    .prompt([
  */
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Manager, what is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee ID?',
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





const init = () => {
  promptUser()
  

  .then((answers) => {
    
    writeFileAsync('test.html', generateHTML(answers));
    const common = new Employee(answers.title, answers.id, answers.email);
  
    console.log(common.getName());
     // common.getName();    
    })
     
  .then(()=> Menu())
  
  .catch((err) => console.error(err));

}

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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
        <p class="card-text"> Manager</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${answers.id}</li>
        <li class="list-group-item"> <a href="mailto:">Email: ${answers.email}</a>
        </li>
        <li class="list-group-item">Office Number: ${answers.officeNum}</li>
      </ul>
     </div> `
  
  


/*  .then((data) => {
    const common = new Employee(annswers.title, answers.id, answers.email);
    
    console.log(common.this.emailCD);
     });*/


  const promptMenu = () => {
    return inquirer.prompt([
  
      {
        type: 'list',
        message: 'Add an employee',
        name: 'employeeMenuChoice',
        choices: ['add an engineer', 'add an intern', 'finished'],
      },

    
  ]);
}

    const Menu = () => {
      promptMenu()
      
    .then((menuChoice) => {

      if (menuChoice.employeeMenuChoice == 'finished') { 
        console.log("finished adding");
        appendFileAsync('test.html', '</section></main></body></html>')
        return; 
        }
      else if (menuChoice.employeeMenuChoice == 'add an engineer') { 
        
        numberEmployees+=1;
        if(numberEmployees % 3 == 0)appendFileAsync('test.html', '</section><hr> <section class="row gx-10">');
      
        console.log("engineer chosen"); 
        EngineerFunction();
        return; 
      }
      else if (menuChoice.employeeMenuChoice == 'add an intern') { 
        numberEmployees+=1;     
        if(numberEmployees % 3 == 0)appendFileAsync('test.html', '</section><hr> <section class="row gx-10">');
      
        console.log("intern chosen"); 
        InternFunction()
        return; 
      }
    })
    .catch((err) => console.error(err));
}

const promptEngineer = () => {
  return inquirer.prompt([

      {
        type: 'input',
        name: 'title',
        message: 'Engineer, what is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'profile',
        message: 'What is your Github profile name?',
      },
    ]);
 
}
const generateEngHTML = (engData) =>

`<div class="col-lg-1"></div>

<div class="col-lg-3 card" style="width: 150px;">
 <!--<img src="..." class="card-img-top" alt="...">-->
 <div class="card-body">
   <h5 class="card-title">${engData.title}</h5>
   <p class="card-text">Engineer</p>
 </div>
 <ul class="list-group list-group-flush">
   <li class="list-group-item">${engData.id}</li>
   <li class="list-group-item"><a href="mailto:">Email: ${engData.email}</a></li>
   <li class="list-group-item">${engData.profile}</li>
 </ul>
</div>`

const generateIntHTML = (intData) =>

`<div class="col-lg-1"></div>

<div class="col-lg-3 card" style="width: 150px;">
 <!--<img src="..." class="card-img-top" alt="...">-->
 <div class="card-body">
   <h5 class="card-title">${intData.title}</h5>
   <p class="card-text">Intern</p>
 </div>
 <ul class="list-group list-group-flush">
   <li class="list-group-item">${intData.id}</li>
   <li class="list-group-item"><a href="mailto:">Email: ${intData.email}</a></li>
   <li class="list-group-item">${intData.school}</li>
 </ul>
</div>`


const promptIntern = () => {
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
        name: 'id',
        message: 'What is your employee ID?',
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

const EngineerFunction = () => {
  promptEngineer()
  .then((engData) => appendFileAsync('test.html', generateEngHTML(engData)))
    .then(() => console.log('Successfully wrote to test.html'))    
    .then(()=> Menu())
    
    .catch((err) => console.error(err));
    

}  

const InternFunction = () => {
  promptIntern()
  .then((intData) => appendFileAsync('test.html', generateIntHTML(intData)))
  .then(() => console.log('Successfully wrote to test.html'))    
  .then(()=> Menu())
  
  .catch((err) => console.error(err));

/*.then((internData) => {
  console.log("intern data done");
  Menu();

})*/

}  

init();
  