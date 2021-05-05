const fs = require('fs');
const inquirer = require('inquirer');
const { generate } = require('rxjs');
const util = require('util');
const M=require('./Manager');
const Employee =require('./Employee');


// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

var numberEmployees=-1;
var numEmplStr;



/*function init()
inquirer
    .prompt([
  */
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
        numEmplStr=numberEmployees.toString(); 
     
        if(numberEmployees % 3 == 0)appendFileAsync('test.html', '</section><hr> <section class="row gx-10">');
      
        console.log("engineer chosen"); 
        EngineerFunction();
        return; 
      }
      else if (menuChoice.employeeMenuChoice == 'add an intern') { 
        numberEmployees+=1;     
        numEmplStr=numberEmployees.toString(); 
     
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
  .then((engData) => {
  
  class Engineer extends Employee{
    constructor(githubName) { 
     super(engData.title, engData.id, engData.email);
   
     this.githubName = githubName;
    
    }
    getGithubName(){
      return this.githubName;
    }
    getRole(){
      return "Engineer";
   }
   
   }
    
   const eng = new Engineer(engData.profile);
  /*  .then((engData) => appendFileAsync('test.html', generateEngHTML(engData)))
    .then(() => console.log('Successfully wrote to test.html'))    
    .then(()=> Menu())
    
    .catch((err) => console.error(err));
    

} */ 
const generateEngHTML = (engData) =>

`<div class="col-lg-1"></div>

<div class="col-lg-3 card" style="width: 150px;">
 <!--<img src="..." class="card-img-top" alt="...">-->
 <div class="card-body">
   <h5 class="card-title">${eng.getName()}</h5>
   <p class="card-text">${eng.getRole()} <span  class="fas fa-microscope"></span></p>
 </div>
 <ul class="list-group list-group-flush">
   <li class="list-group-item">id: ${numEmplStr}</li>
   <li class="list-group-item"><a href="mailto:">Email: ${eng.getEmail()}</a></li>
   <li class="list-group-item"><a href="https://github.com/${eng.getGithubName()}">Github Name: ${eng.getGithubName()}</a></li>
 </ul>
</div>`


appendFileAsync('test.html', generateEngHTML(engData));
    
// console.log(common.getName());
  
})
  
.then(()=> Menu())

.catch((err) => console.error(err));

}

const InternFunction = () => {
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

init();

const variableName =  -1;
module.exports = numberEmployees;
//const variableName = 'variableValue'
module.exports = numEmplStr;
