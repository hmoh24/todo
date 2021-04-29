import pageLoad from '../src/pageLoad.js'
import renderToDo from './renderToDo.js'
import toDoObjects from '../src/toDoObjects.js'

pageLoad();





const projectsButton = document.querySelector('#projects');
projectsButton.addEventListener('click', ()=>{
    page = 'projects';
})

const todayButton = document.querySelector('#today');
todayButton.addEventListener('click', ()=>{
    page = 'today';
})

let object1 = new toDoObjects('Shopping', 'need to buy groceries', '3rd March', 'high');
console.log(object1);
renderToDo(object1);

let object2 = new toDoObjects('Go gym', 'leg day', '3rd March', 'high');
console.log(object2);
renderToDo(object2);

let page;
console.log(page);

//code to choose and load page
// eg if page = today
// then call today();
