document.querySelector('form').addEventListener("submit",  Checkage);


const licence = 18;
const jrop = 16;
const rental = 25;

function Checkage(e) {
    e.preventDefault();
    
    let myAge = document.querySelector('input').value;

    let message = "<ul>";

    console.log('RUNNING ... ' + myAge)

    if (myAge < licence && myAge >= jrop) {
        message += '</li>you can have a jrop license</li>';
    
    }

    if (myAge >= licence) {
        message += '</li>you can have a regular license</li>';
    }

    if (myAge >= rental) {
        message += '</li>you can rent a car</li>';
    }

    if (myAge < jrop) {
        message += '</li>your too young to drive</li>'
    }
message += '</ul>'
    document.querySelector('#output').innerHTML = message;
}