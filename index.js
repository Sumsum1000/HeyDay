const addButton = document.querySelector('.btn-add');
const inputFolder = document.querySelector('.new-folder');
const inputFile = document.querySelector('.new-file')
const folderContainer = document.querySelector('.folder-container')

//Folder structure [{name: '', content: ['']}]
let folder = {name: '', content: ['']};
const foldersArr = [];

const addFolderToArr = (newFolder) => {
    foldersArr.push(newFolder);
}

const addFolderToDom = (newFolder) => {
    const newLi = document.createElement('li');
    const folderUl = document.createElement('ul');
    const folderTitle = document.createElement('h5');
    const fileContent = document.createElement('p');

    folderUl.addEventListener('click', deleteItem);
    folderTitle.addEventListener('click', deleteItem)

    folderTitle.innerHTML = newFolder.name;
    fileContent.innerHTML = newFolder.content[0];

    folderUl.appendChild(folderTitle);
    folderUl.append(fileContent);
    newLi.append(folderUl);
    newLi.name = folderTitle;
    folderContainer.appendChild(newLi)
}

const removeFromArray = (e) => {
    elementNameToDelete = e.target.innerHTML;
    
    for (element of foldersArr) {
       if ( element.name === elementNameToDelete) {
            // Remove from array
       }
    }
}

const removeFromDom = () => {
    // Remove from the dom by index of array
}

const addItems = () => {
    const folderName = inputFolder.value;
    const fileContent = inputFile.value;
    folder.name = folderName;
    folder.content[0] = fileContent;
    // Add to arr
    addFolderToArr(folder);
    // Add to dom
    addFolderToDom(folder)
    // Reset folder
    folder = {name: '', content: []};
}

const deleteItem = (e) => {
    removeFromArray(e);
    removeFromDom();
}

addButton.addEventListener('click', addItems)

