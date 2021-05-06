const fs = require('fs');
const inquirer = require('inquirer');
const { generate } = require('rxjs');
const util = require('util');
const M=require('./lib/Manager');
const Employee =require('./lib/Employee');
const E = require('./lib/Engineer');
const I = require('./lib/Intern');

global.writeFileAsync = util.promisify(fs.writeFile);
global.appendFileAsync = util.promisify(fs.appendFile);

//var numberEmployees=-1;
global.numEmplStr=" ";
global.numberEmployees=-1;



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

    global.Menu   = () => {
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



init();

/*const variableName =  -1;
module.exports = numberEmployees;
//const variableName = 'variableValue'
module.exports = numEmplStr;
*/