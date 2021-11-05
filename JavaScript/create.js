'use strict';

let inputCreateName = document.querySelector('#inputCreateName');
let inputCreateAge = document.querySelector('#inputCreateAge');
let createBtn = document.querySelector('#createBtn');



let newObject = {


    name: "Penelope",
    age: 8,
    happyFeet: true

}

let getData = () => {

    let newObject = {


        name: ``,
        age: 8,
        happyFeet: true

    }

}




postRequest = () => {

    fetch('http://localhost:8083/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/JSON',

        },
        body: JSON.stringify(newObject)
    })

}





createBtn.addEventListener('click', () => {
    let createNameValue = inputCreateName.value
    let createAgeValue = inputCreateAge.value

    createNameValue = ""
    createAgeValue = ""

    let newObject = {


        name: `${createNameValue}`,
        age: `${createAgeValue}`,
        happyFeet: true

    }
    newObject;

})