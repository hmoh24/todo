
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
}

export default renderToDo