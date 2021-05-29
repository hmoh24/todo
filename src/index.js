import pageLoad from '../src/pageLoad.js'
import toDoObjects from './classToDo.js'
import { renderToDo, toDoFormAdd, formDisplay, formExit, toDoArray, addToDoArray } from './renderToDo.js'
import projectPageLoad from './projectPageLoad.js'
import Project from './classProject.js'
import {projectArray, addToProjectArray, renderProjectOuter, newProjectDisplay, projectFormDisplay, projectFormExit} from './renderProjectOuter.js'
import todayPageLoad from './todayPageLoad.js'



pageLoad();

let page;
console.log(page);

const projectsButton = document.querySelector('#projects');
projectsButton.addEventListener('click', ()=>{
    page = 'projects';
    projectPageLoad();
    console.log(projectArray);
})

let projectExample1 = new Project('Example', 'Blah, blah, blah');
let projectExample2 = new Project('Example2', 'Blah, blah, blah');

addToProjectArray(projectExample1);
addToProjectArray(projectExample2);




const todayButton = document.querySelector('#today');
todayButton.addEventListener('click', ()=>{
    page = 'today';
    todayPageLoad();
    console.log(toDoArray);
})

let object1 = new toDoObjects('Shopping', 'need to buy groceries', '3rd March', 'high');
console.log(object1);
renderToDo(object1);

let object2 = new toDoObjects('Go gym', 'leg day', '3rd March', 'high');
console.log(object2);
renderToDo(object2);

addToDoArray(object1);
addToDoArray(object2);



let form = document.querySelector('#form');
let formHolder = document.querySelector('#formHolder');
form.addEventListener('submit', function(event){
    toDoFormAdd(event);
    console.log(toDoArray)
})

formDisplay();
formExit();

let projectFormHolder = document.querySelector('#projectFormHolder');
let projectForm = document.querySelector('#projectForm');
projectForm.addEventListener('submit', function(event){
    newProjectDisplay(event);
})

projectFormDisplay();
projectFormExit();



//code to choose and load page
// eg if page = today
// then call today();
