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
}


export default pageLoad

// make IIFE so that i can export linkcreator to possibly create new links?