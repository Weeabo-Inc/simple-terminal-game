const { Person } = require("./structures/Person");
const names = require("./data/names");

const colonists = [];
const traits = [
  "strong",
  "smart",
  "beautiful",
  "painful",
  "lazy",
  "innovative",
  "painless",
  "cute",
  "traumatic",
];
function calculateAge() {
  return Math.floor(Math.random() * (60 - 18 + 1)) + 18;
}

function chooseTraits() {
  let traitsU = [];
  for (let i = 0; i < 2; i++) {
    traitsU.push(traits[Math.floor(Math.random() * traits.length)]);
  }
  return traitsU;
}
console.log(age);

function createPerson() {
  let name = names[Math.floor(Math.random() * names.lenght)];
  let age = calculateAge();
  let traits = chooseTraits();
  return new Person(name, age, traits);
}

for (let i = 0; i < 10; i++) {
  colonists.push(createPerson());
  console.log(`${colonists[i].name} has joined the colony!`);
}

function game() {
  let person = colonists[Math.floor(Math.random() * colonists.length)];
  console.log(
    `${person.name} is ${person.age} years old and has the following traits: ${person.traits}`
  );
  for (let i = 0; i < 10; i++) {
    let thought = person.think();
    console.log(`${person.name} thought: ${thought}`);
  }
}
