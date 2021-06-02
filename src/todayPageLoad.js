import { renderToDo, toDoArray } from "./renderToDo.js";


function todayPageLoad(){
    const content = document.querySelector('#content');
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.innerHTML = '';

    const header1 = document.querySelector('h2');
    header1.textContent = 'Today';

    for (let i=0; i<toDoArray.length; i++){
        renderToDo(toDoArray[i]);
    };

    const addToListButton = document.querySelector('#addToListBtn');
    addToListButton.style.display = 'block';

    const addProjectDiv = document.querySelector('#addProjectDiv');
    addProjectDiv.style.display = 'none';
}

export default todayPageLoad;