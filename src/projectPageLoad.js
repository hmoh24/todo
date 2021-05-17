function projectPageLoad(){
    let content = document.querySelector('#content');
    content.style.display = 'flex';
    content.style.flexDirection = 'row';
    content.innerHTML = '';

    let header1 = document.querySelector('h2');
    header1.textContent = 'Projects';

    let addProjectDiv = document.createElement('button');
    addProjectDiv.setAttribute('id', 'addProjectDiv');
    content.appendChild(addProjectDiv);
    addProjectDiv.textContent = '+';
}

export default projectPageLoad;