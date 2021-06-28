import loadProjectInner from './loadProjectInnerPage.js'


function renderSublink (array){
    
    const sidebar = document.querySelector('#sideBar');

    let textContentDOMArray = [];
    let elements = Array.from(sidebar.children);
    elements.forEach((element)=> textContentDOMArray.push(element.textContent));
    textContentDOMArray.splice(textContentDOMArray.indexOf('Today'), 1);
    textContentDOMArray.splice(textContentDOMArray.indexOf('Projects'), 1);

    let titleProjectArray = [];
    array.forEach((item)=> titleProjectArray.push(item.title));

    let unique1 = textContentDOMArray.filter((o) => titleProjectArray.indexOf(o) === -1);
    let unique2 = titleProjectArray.filter((o) => textContentDOMArray.indexOf(o) === -1);
    const uniques = unique1.concat(unique2);
    const filteredArray = uniques.filter(Boolean);    //filtering out all falsy values (AKA all undefined);
    console.log(filteredArray);

    if (sidebar.childElementCount === 2) {
        for (let i=0; i<array.length; i++ ){
            const sublink = document.createElement('button');
            sublink.textContent = array[i].title;
            sidebar.appendChild(sublink);
            sublink.addEventListener('click', function(){
                loadProjectInner(sublink.textContent);
            })
        }
    }
    
    else {
        for (let i=0; i<filteredArray.length; i++ ){
            const sublink = document.createElement('button'); //doesn't work for duplicate project names, must make function in form
            sublink.textContent = filteredArray[i];
            sidebar.appendChild(sublink);
            sublink.addEventListener('click', function(){
                loadProjectInner(sublink.textContent);
            })
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