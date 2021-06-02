import {projectArray, renderProjectOuter} from "./renderProjectOuter.js"


function projectPageLoad(){
    let content = document.querySelector('#content');
    content.style.display = 'flex';
    content.style.flexDirection = 'row';
    content.innerHTML = '';

    let header1 = document.querySelector('h2');
    header1.textContent = 'Projects';

    let addProjectDiv = document.querySelector('#addProjectDiv');
    addProjectDiv.style.display = 'block';

    const addToListButton = document.querySelector('#addToListBtn');
    addToListButton.style.display = 'none';

    for (let i=0; i<projectArray.length; i++){
        renderProjectOuter(projectArray[i]);
    };

    
    
}

export default projectPageLoad;