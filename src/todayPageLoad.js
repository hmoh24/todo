import { renderToDo, toDoArray } from "./renderToDo.js";


function todayPageLoad(){
    let content = document.querySelector('#content');
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.innerHTML = '';

    let header1 = document.querySelector('h2');
    header1.textContent = 'Today';

    for (let i=0; i<toDoArray.length; i++){
        renderToDo(toDoArray[i]);
    }

}

export default todayPageLoad;