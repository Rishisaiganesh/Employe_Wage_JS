let origDogs =["BillDog","Beagle","Labrador"];
let cats = new Array["Americal curl", "Bengal"];
let birds = new Array["Falcons","Ducks","Flamingoes"];

//Array Copy Elements
let slicedDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//Stack Function(LIFO) push and pop
let pushDOG = dogs.push("Golden Retriver");
let popDogs = dogs.pop();
dogs[dogs.length] = "Poodle";

//Add and Remove from first
let addFirst = dogs.unshift("golden Retriever");
let shiftDog = dogs.shift();

//Atomic add and remove elements (wher ,how many to remove , elements list)
dogs.splice(2,1,"pug","Boxer");

//Array Function Concept ,slice and sort
let animals = dogs.concat(cats,birds);
let newAnimals = [...dogs, ...cats, ...birds].toString();
function scanArray([first, second]) { console.log("Scan:" +first+" "+ second)};
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = " ";
for (let animal of animals) allAnimals += animals +" ";
console.log("Animal:" +allAnimals);