const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const E = require('../lib/Engineer');

module.exports =  promptEngineer = () => {
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

  module.exports =  EngineerFunction = () => {
    promptEngineer()
    .then((engData) => {
    
      
     const eng = new E(engData.profile, engData.title, engData.email);
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
  