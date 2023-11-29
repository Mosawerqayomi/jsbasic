console.log("hHello world");

// Weird scope - Don't use
// var x = 5;
// Regular old varibale
let y = 6;
y=10; // you can change the value 

const z = 7;// This is a contant. Can't be change
// z=10; // this throws and error.
// idk test comment
console.log(y,z)
console.log(y+z)
console.log(y-z)
console.log(y*z)
console.log(y/z)
console.log(y%z)// This does division but returns the remainder
console.log(y**z)// exponets

let fnsme="Mosawer"
let lname="Qayomi"
console.log(fname + "   " + lname);

console.log(`${ fname}  ${lname}`);
console.log(`${ fname}  ${ 5*9 } `);
console.log(lname + 6)


let user ="ronaldo";
let pas ="messi";

if (user == "ronaldo") {
    console.log('you are ' + user);
}
 
user = "ronaldo";
if (USER == "ronaldo") {
    console.log('you are ' + user);
} else {
    console.error("denied")
}

user = "ronaldo";
if (user == "ronaldo" && pass== "messi") {
    console.log('you are ' + user + ' and your pass is ' + pass);
} else {
    console.error("denied")
}

const licence = 18;
const jrop = 16;
const rental = 25

let myAge = 15;

function checkAge( myAge ) {
console.log('RUNNING ... '+myAge)
if (mabey < licence && myAge >=jrop) {
    console.log('you can have a jrop license');
}

if (myAge >= licence) { 
    console.log('you can have a regular license');
}

if (myAge >= rental) {
    console.log('you can rent a car');
}

if (myAge < jrop) {
    console.log("you're to young to drive")
}



}
checkAge(6);
checkAge(17);
checkAge(19);
checkAge(37);