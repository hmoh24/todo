import Project from './classProject.js'

function renderProjectOuter(object) {
    let content = document.querySelector('#content');
    let addProjectDiv = document.querySelector('#addProjectDiv');

    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'projectDiv');
    content.appendChild(projectDiv);

    let projectDivTitle = document.createElement('h2');
    projectDivTitle.setAttribute('class', 'projectDivTitle');
    projectDivTitle.textContent = object.title
    projectDiv.appendChild(projectDivTitle);

    let projectDivDesc= document.createElement('p');
    projectDivDesc.setAttribute('class', 'projectDivDesc');
    projectDivDesc.textContent = object.desc
    projectDiv.appendChild(projectDivDesc);

    let projectButton = document.createElement('button');
    projectButton.setAttribute('class', 'projectButton');
    projectButton.textContent = 'Enter';
    projectDiv.appendChild(projectButton);

    let projectDelete = document.createElement('button');
    projectDelete.setAttribute('class', 'projectDelete');
    projectDelete.textContent = 'Delete';
    projectDiv.appendChild(projectDelete);
    projectDelete.addEventListener('click', function(){
        content.removeChild(projectDiv);
        projectArray.splice(projectArray.findIndex(object => object.title === object.title), 1);
    })
}

let projectArray = [];

function addToProjectArray (obj){
    projectArray.push(obj);
}

function projectFormDisplay(){
    let projectFormHolder = document.querySelector('#projectFormHolder');
    let addProjectDiv = document.querySelector('#addProjectDiv');
    addProjectDiv.addEventListener('click', function(){
        projectFormHolder.style.display = 'block';
    })
}

function newProjectDisplay(target) {
    target.preventDefault();
    let projectFormHolder = document.querySelector('#projectFormHolder');
    let projectTitle = document.querySelector('#projectTitle').value;
    let projectDescription = document.querySelector('#projectDescription').value;
    let projectObject = new Project(projectTitle, projectDescription);
    renderProjectOuter(projectObject);
    projectFormHolder.style.display = 'none';
}

function projectFormExit(){
    let projectFormHolder = document.querySelector('#projectFormHolder');
    let formExitBtn = document.querySelector('#deleteProjectForm');
    formExitBtn.addEventListener('click', function(){
        projectFormHolder.style.display = 'none';
    })
}


export {projectArray, addToProjectArray, renderProjectOuter, newProjectDisplay, projectFormDisplay, projectFormExit}