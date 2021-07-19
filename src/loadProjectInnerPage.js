import { toDoArray, renderToDo } from './renderToDo.js'

function loadProjectInner (name){
    const content = document.querySelector('#content');
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.innerHTML = '';

    const header1 = document.querySelector('h2');
    header1.textContent = name;
    console.log(toDoArray[0].project);

    let sortedToDo = toDoArray.slice().sort((a,b) => a.date - b.date);
    console.log(sortedToDo);
    for (let i=0; i<sortedToDo.length; i++){
        if (sortedToDo[i].project === name){
            renderToDo(sortedToDo[i]);
        }
    }
    const addToListButton = document.querySelector('#addToListBtn');
    addToListButton.style.display = 'block';

    const addProjectDiv = document.querySelector('#addProjectDiv');
    addProjectDiv.style.display = 'none';

    const projectFormHolder = document.querySelector('#projectFormHolder');
    projectFormHolder.style.display ='none'

    const titleHolder = document.querySelector('#titleHolder');
    titleHolder.style.background = 'Green';
}

export default loadProjectInner;