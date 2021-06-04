
function loadProjectInner (name){
    const content = document.querySelector('#content');
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.innerHTML = '';

    const header1 = document.querySelector('h2');
    header1.textContent = name;


}

export default loadProjectInner;