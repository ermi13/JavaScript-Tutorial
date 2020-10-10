//cant be reserved word
// should be meiningfull
// cannot start with a number
// cannot contain a space or hyphen (-)
// camell casing is Profressional
let name = "Ermi";
// constants can't be changed
const interestRate = 0.3;

// Primitive/Value Types
// String
// Number
// Boolean
// undefined - the default value of variable in js if no values is attached to them
// null -when we want explicitly leave a varialble untouched
// Dyanmic Typing

// variables that are highly related can be put inside an object
let person = {
  //uses key value pair
  name: "Ermi",
  age: 30,

  // to acces the object's property there are 2 ways
  //  1. dot notation eg. person.name > cool and precise
  //  2. bracket notation person['name] = 'Ermiyas' > usefull for dynamic coding
};
console.log(person);
// Arrays in Javascript is a Data Structure in fact an array is an object

let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors);

// function Performing a task
function greet(name /*Parameter*/) {
  console.log(name + "welcome !");
}

greet("ermiyas" /*Argument*/);

// calculating a vallue
function square(number) {
  return number * number;
}

let number = square(2);
