function pageLoad (){

    const sidebar = document.querySelector('#sideBar');

    function linkCreator(id, text){
        let buttonlink = document.createElement('button');
        buttonlink.setAttribute('id', id);
        buttonlink.setAttribute('class', 'buttonLinks');
        buttonlink.textContent = text;
        sidebar.appendChild(buttonlink);
    }

    linkCreator('today', 'Today');
    linkCreator('projects', 'Projects');

    // const contentHolder = document.querySelector('#contentHolder')
    // const content = document.querySelector('#content');

    const addProjectDiv = document.querySelector('#addProjectDiv');
    addProjectDiv.style.display = 'none';


//     const addToListButton = document.createElement('button');
//     addToListButton.setAttribute('id', 'addToListBtn');
//     addToListButton.textContent = '+';
//     contentHolder.insertBefore(addToListButton, content);

//     const addProjectDiv = document.createElement('button');
//     addProjectDiv.setAttribute('id', 'addProjectDiv');
//     addProjectDiv.textContent = '+';
//     addProjectDiv.style.display = 'none';
//     content.appendChild(addProjectDiv);
// 
}


export default pageLoad

// make IIFE so that i can export linkcreator to possibly create new links
