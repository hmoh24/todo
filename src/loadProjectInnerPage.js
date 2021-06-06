import { toDoArray, renderToDo } from './renderToDo.js'

function loadProjectInner (name){
    const content = document.querySelector('#content');
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.innerHTML = '';

    const header1 = document.querySelector('h2');
    header1.textContent = name;
    console.log(toDoArray[0].project);

    for (let i=0; i<toDoArray.length; i++){
        if (toDoArray[i].project === name){
            renderToDo(toDoArray[i]);
        }
    }
}

export default loadProjectInner;