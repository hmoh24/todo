import { UnsetAdditionalOptions } from 'tapable';
import toDoObjects from './classToDo.js'
import { findArrayViaDom } from './renderProjectOuter.js'

function renderToDo (object){
    const content = document.querySelector('#content');

    const listObject = document.createElement('div');
    listObject.setAttribute('class', 'listObject');
    content.appendChild(listObject);

    const titleP = document.createElement('p');
    titleP.setAttribute('class', 'titleP');
    titleP.textContent = object.title;
    listObject.appendChild(titleP);

    const descP = document.createElement('p');
    descP.setAttribute('class', 'descP');
    descP.textContent = object.desc;
    listObject.appendChild(descP);

    const dateP = document.createElement('p');
    dateP.setAttribute('class', 'dateP');
    dateP.textContent = object.date;
    listObject.appendChild(dateP);

    const priorityP = document.createElement('p');
    priorityP.setAttribute('class', 'priorityP');
    priorityP.textContent = object.priority;
    listObject.appendChild(priorityP);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'toDoDelete');
    deleteButton.textContent = 'delete';
    listObject.appendChild(deleteButton);
    deleteButton.addEventListener('click', function(){
        content.removeChild(listObject);
        toDoArray.splice(findArrayViaDom(toDoArray, titleP), 1);
    });
}

let toDoArray = [];

function addToDoArray (obj) {
    toDoArray.push(obj);
}

function updateFormSelectOptions (array){
    const select = document.getElementById('projectOptions');
    let titleProjectArray = [];
    array.forEach((item)=> titleProjectArray.push(item.title));
    if (select.childElementCount === 0) {
        for (let i=0; i<titleProjectArray.length; i++){
            select.options[select.options.length] = new Option(titleProjectArray[i], titleProjectArray[i]);
        }
    }
    else {
        const sidebar = document.querySelector('#sideBar');
        let textContentDOMArray = [];
        let elements = Array.from(sidebar.children);
        elements.forEach((element)=> textContentDOMArray.push(element.textContent));
        select.options[select.options.length] = new Option(elements[elements.length - 1].textContent, elements[elements.length - 1].textContent);
    }
}

function deleteSelectOption (name){
    let select = document.getElementById('projectOptions');
    let selectOption = document.querySelector('option[value="' + name + '"]');
    select.removeChild(selectOption);
    console.log(select);
    console.log(name);
    console.log(selectOption);
}

function toDoFormAdd (target){     
    target.preventDefault();                                                 //to stop form from submitting and refreshing page
    let formTitle = document.querySelector('#title').value;
    let formDescription = document.querySelector('#description').value;
    let formDate = document.querySelector('#date').value;
    let formPriority = document.querySelector('input[name = priority]:checked').value;
    let formProject = document.querySelector('#projectOptions').value;
    let listObject = new toDoObjects(formTitle, formDescription ,formDate, formPriority, formProject);
    console.log(listObject);
    renderToDo(listObject);
    addToDoArray(listObject);
    formHolder.style.display = 'none';
}

function formDisplay (){
    let formDisplayBtn = document.querySelector('#addToListBtn');
    formDisplayBtn.addEventListener('click', function(){
        formHolder.style.display = 'block';
    })
}

function formExit (){
    let formExitBtn = document.querySelector('#deleteForm');
    formExitBtn.addEventListener('click', function(){
        formHolder.style.display = 'none';
    })
}



export { renderToDo, toDoFormAdd, formDisplay, formExit, toDoArray, addToDoArray, updateFormSelectOptions, deleteSelectOption }