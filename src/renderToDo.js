import toDoObjects from './classToDo.js'

function renderToDo (object){
    const content = document.querySelector('#content');

    let listObject = document.createElement('div');
    listObject.setAttribute('class', 'listObject');
    content.appendChild(listObject);

    let titleP = document.createElement('p');
    titleP.setAttribute('class', 'titleP');
    titleP.textContent = object.title;
    listObject.appendChild(titleP);

    let descP = document.createElement('p');
    descP.setAttribute('class', 'descP');
    descP.textContent = object.desc;
    listObject.appendChild(descP);

    let dateP = document.createElement('p');
    dateP.setAttribute('class', 'dateP');
    dateP.textContent = object.date;
    listObject.appendChild(dateP);

    let priorityP = document.createElement('p');
    priorityP.setAttribute('class', 'priorityP');
    priorityP.textContent = object.priority;
    listObject.appendChild(priorityP);

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'toDoDelete');
    deleteButton.textContent = 'delete';
    listObject.appendChild(deleteButton);
    deleteButton.addEventListener('click', function(){
        content.removeChild(listObject);
    });
}

function formListAdd (target){     
    target.preventDefault();                                                 //to stop form from submitting and refreshing page
    let formTitle = document.querySelector('#title').value;
    let formDescription = document.querySelector('#description').value;
    let formDate = document.querySelector('#date').value;
    let formPriority = document.querySelector('input[name = priority]:checked').value;
    let listObject = new toDoObjects(formTitle, formDescription ,formDate, formPriority);
    renderToDo(listObject);
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



export { renderToDo, formListAdd, formDisplay, formExit }