//Procedural Programing dude it's all about functions
// at the end of the day we will get our selves copying nd pasteing
// of functions.
//  Spaghetti code - there is too much dependencies b/n the function in the
//                  codes which later become problametic
//  The Pillars of OOP are Encapsulation , Abstraction , Inheritance , Polymorphism
//  OOP -  groups related function (method in oop) & variables (property in oop)
//        into an object(this is what we call encapsulation(increase reusablity)) ony symptom of OOP code is the function
//        have small # of parameters
//      " The best functions are those with no parameters" uncle bob

//  Abstration - Hiding the complexity
//             Simpler Interface
//             Reduce(isolate) the impact of change
//

//  Inheritance - it helps for reducing redundant code
//               but creating generic object and others inherit from them

// Poly Morphism(many forms)
//     use to get rid of switch-case if and if - else statemnts
//     in programming (Refactor ugly switch/ case statements)

// object litral syntax way of creating objects bad if
// the object has behavior of do many tasks. as a solution we will
// factory or constractor function.

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

// the Factory Function way of creating object (by using the return keyword
// with no new keyword)

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circ = createCircle(2); // no new keyword used
console.log(circ.draw);

// Constructor Function way no explicit return keyword
function Circle(radius) {
  this.radius = radius;

  // Abstraction - hide the details & show the essentials the
  // the ff 2 are implementation details not all user need to
  // access them.
  // How to implement Abstraction? is making the field converting this to let
  this.defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function (factor) {
    console.log(factor);
  };
  this.draw = function () {
    computeOptimumLocation(0.3);
    console.log("draw");
  };

  // Getter and Setter
  /*this.getDefaultLocation = function () {
    return this.defaultLocation;
  };*/

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return this.defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location.");

      defaultLocation = value;
    },
  });
}

const abs = new Circle(2);
abs.defaultLocation = 5;
console.log((abs.defaultLocation = 4));

const Circle3 = new Function(
  "radius",
  `
  this.radius = radius;
  this.draw = function(){
    console.log('draw ' + radius)
  }
  `
);

const circle4 = new Circle3("3");
circle4.draw();

// Value Types vs Reference Types
// Value Types = primitive types
//              the actual value is stored in the variable
//              copys are independent of each other.

let x = 10;
let y = x;

console.log(y); // displays 10

let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number); // we get 10 since number variabe is primitive

// Reference Types
//    objects, function , Array
//  in the variable the value is stored somewhere in the memory
//  & the only the address is stored in the variable.

let obj = { value: 10 };

function increase2(obj) {
  obj.value++;
}

increase2(obj);
console.log(obj);

// Adding/removing properties

function Square(length) {
  this.length = length;
  this.draw = function () {
    console.log(length);
  };
}

const square = new Square(3);

// creates new property width
square.width = { y: 4 }; // or square['width'] = { y: 4}

// deletes a property
delete square["width"];
console.log(square);

// enumertating properties

for (let key in square) {
  if (typeof square[key] !== "function") console.log(key, square[key]);
}

// another way to list all property of an objects
const keys = Object.keys(square);
console.log(keys);
