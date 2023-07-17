"use strict";
console.log("You are top of the class");

// class declaration
// class Animal{}

// Class expression: the is anonymous but assigned to a variable
// const Animal = class Animal1{}

class Animal {
  constructor(props) {
    this.name = props.name;
    this.color = props.color;
    this.age = props.age;
    this.sound = props.sound;
    // Object.assign(this, props);
    // can be used instead of writing the 4 lines of code above
  }
  animalSpeak() {
    console.log(this.sound);
  }
}

const wildAnimal = new Animal({ name: "Tiger", color: "black and orange", age: 4, sound: "Roar" });
console.log(wildAnimal);

const housePet = new Animal({ name: "Dog", color: "red", age: 8, sound: "Woof" });
console.log(housePet.color);

wildAnimal.animalSpeak();
housePet.animalSpeak();

class Dog extends Animal {
  constructor(props, type) {
    super(props);
    this.type = type;
  }
  speak = () => {
    console.log(`${this.name} barks`);
  };
  goodBoi = () => {
    console.log(`${this.name} is a good ${this.type}`);
  };
}

const spot = new Dog({ name: "spot", color: ["black", "white"], age: 10, sound: "woof" }, "Dalamation");
console.log(spot);

spot.speak();
spot.goodBoi();
// wildAnimal.speak(); this will not work as it does not have access to the methods of Dog

// Functions

// function declarations
function myName(name) {
  return `Hi my name is ${name}`;
}

// fuunction expression
const theName = function (name) {
  return `Yo, my name is ${name}`;
};

// arrow function
const thatName = (name) => {
  return `Wow, check out that ${name}`;
};

const tree = () => console.log(`hey im a tree`);
tree();
