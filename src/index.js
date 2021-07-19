import pageLoad from '../src/pageLoad.js'
import toDoObjects from './classToDo.js'
import { renderToDo, toDoFormAdd, formDisplay, formExit, toDoArray, addToDoArray, updateFormSelectOptions } from './renderToDo.js'
import projectPageLoad from './projectPageLoad.js'
import Project from './classProject.js'
import {projectArray, addToProjectArray, renderProjectOuter, newProjectDisplay, projectFormDisplay, projectFormExit} from './renderProjectOuter.js'
import todayPageLoad from './todayPageLoad.js'
import {renderSublink, deleteSublinkIndex} from  './projectSublinks.js'
import loadProjectInner from './loadProjectInnerPage.js'


pageLoad();

let page;
console.log(page); 

const todayButton = document.querySelector('#today');
todayButton.addEventListener('click', ()=>{
    page = 'today';
    todayPageLoad();
    renderSublink(projectArray);
    projectFormHolder.style.display ='none'
})

let object1 = new toDoObjects('Shopping', 'need to buy groceries', new Date(Date.now()), 'high');
console.log(object1);
renderToDo(object1);

let object2 = new toDoObjects('Go gym', 'leg day', new Date(Date.now()), 'high');
console.log(object2);
renderToDo(object2);

addToDoArray(object1);
addToDoArray(object2);


const projectsButton = document.querySelector('#projects');
projectsButton.addEventListener('click', ()=>{
    page = 'projects';
    projectPageLoad();
    formHolder.style.display ='none';
})

const defaultProject = new Project('Default', 'For all projects occuring today');
const projectExample1 = new Project('Example', 'Blah, blah, blah');
const projectExample2 = new Project('Anything', 'Blah, blah, blahhhh');

addToProjectArray(defaultProject);
addToProjectArray(projectExample1);
addToProjectArray(projectExample2);

renderSublink(projectArray);

updateFormSelectOptions(projectArray);

const sidebar = document.querySelector('#sideBar').children;
for (let i=2; i<sidebar.length; i++){
    sidebar[i].addEventListener('click', function(e){
        loadProjectInner(e.target.textContent);
    })
};


const form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    toDoFormAdd(event);
    console.log(toDoArray)
})

formDisplay();
formExit();

const projectForm = document.querySelector('#projectForm');
projectForm.addEventListener('submit', function(event){
    const projectTitle = document.querySelector('#projectTitle').value;
    let x=true;
    console.log(projectArray.length);
    for (let i=0;i<projectArray.length;i++){
        if (projectTitle === projectArray[i].title ){
            event.preventDefault();
            alert('No duplicate project titles permitted');
            return false;
        }
    }
    newProjectDisplay(event);
});

projectFormDisplay();
projectFormExit();


let today = new Date().toISOString().split('T')[0];
document.getElementsByName('date')[0].setAttribute('min', today); //Disabling dates before today

//code to choose and load page
// eg if page = today
// then call today();
