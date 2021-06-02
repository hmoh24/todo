function renderSublink (array){
    const sidebar = document.querySelector('#sideBar');
    //must do another check to prevent duplicates by looping through array and only returning
    // indexes of array that are not on the list already
    //then must create function in form to prevent duplicates too
    if (sidebar.childElementCount < (2 + array.length)) {
        for (let i=0; i<array.length; i++ ){
            const sublink = document.createElement('button');
            sublink.textContent = array[i].title;
            sidebar.appendChild(sublink);
        }
    }
}

function deleteSublinkIndex (array, index, container){
    let elements = container.children
    let x;
    for (let i=0; i<container.childElementCount; i++){
        if (array[index].title === elements[i].textContent){
            x = i;
        }
    }
    elements[x].parentNode.removeChild(elements[x]);
}



export { renderSublink, deleteSublinkIndex }