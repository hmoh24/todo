import Project from './classProject.js'
import {renderSublink, deleteSublinkIndex} from './projectSublinks.js'
import loadProjectInner from './loadProjectInnerPage.js'


function findArrayViaDom (array, object){
    for (let i =0; i<array.length; i++){
        if (array[i].title === object.textContent){
            return i;
        }
    }
};

function renderProjectOuter(object) {
    const content = document.querySelector('#content');
    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'projectDiv');
    content.appendChild(projectDiv);

    const projectDivTitle = document.createElement('h2');
    projectDivTitle.setAttribute('class', 'projectDivTitle');
    projectDivTitle.textContent = object.title
    projectDiv.appendChild(projectDivTitle);

    const projectDivDesc= document.createElement('p');
    projectDivDesc.setAttribute('class', 'projectDivDesc');
    projectDivDesc.textContent = object.desc
    projectDiv.appendChild(projectDivDesc);

    const projectButton = document.createElement('button');
    projectButton.setAttribute('class', 'projectButton');
    projectButton.textContent = 'Enter';
    projectDiv.appendChild(projectButton);
    projectButton.addEventListener('click', function(){
        loadProjectInner(projectDivTitle.textContent);
    })

    const projectDelete = document.createElement('button');
    projectDelete.setAttribute('class', 'projectDelete');
    projectDelete.textContent = 'Delete';
    projectDiv.appendChild(projectDelete);
    projectDelete.addEventListener('click', function(){
        content.removeChild(projectDiv);
        deleteSublinkIndex(projectArray, findArrayViaDom(projectArray, projectDivTitle), sideBar )
        projectArray.splice(findArrayViaDom(projectArray, projectDivTitle), 1);
        renderSublink(projectArray);
    });
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
    addToProjectArray(projectObject)
    projectFormHolder.style.display = 'none';
    renderSublink(projectArray);
}

function projectFormExit(){
    let projectFormHolder = document.querySelector('#projectFormHolder');
    let formExitBtn = document.querySelector('#deleteProjectForm');
    formExitBtn.addEventListener('click', function(){
        projectFormHolder.style.display = 'none';
    })
}


export {findArrayViaDom, projectArray, addToProjectArray, renderProjectOuter, newProjectDisplay, projectFormDisplay, projectFormExit}