'use strict';


let searchText = document.querySelector('#searchText');
let searchButton = document.querySelector('#searchButton');
let newText = document.createElement('p');
let newPenguin = document.createElement('div');

newPenguin.classList = "searchPenguinField";






let getRequest = (id) => {
    fetch(`http://localhost:8083/get/${id}`, {
        method: 'GET'
    })
        .then((response) => {
            if (response.status !== 202) {
                console.error(`status: ${response.status} `)
                return
            }
            response.json()
                .then((data) => {
                    console.log(data);
                }).catch((error) => {
                    console.error(`${error}`);
                });
        });

}

let readFunction = () => {
    let searchTextValue = searchText.value;
    let id = searchTextValue;
    getRequest(id);

}

searchButton.addEventListener('click', readFunction)
newText.textContent = "" // penguin name age and happyfeet
newPenguin.appendChild(newText);


