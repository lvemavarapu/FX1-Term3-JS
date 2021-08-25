let petAnimals = ["cat","dog","rabbit"]
let wildAnimals =["Lion","Tiger","Bear"]

let animals =[...petAnimals, ...wildAnimals]
console.log(animals)

let people = ["Lavanya", "Shauna", "Teej"];
let [firstPerson] = people;
console.log(firstPerson);

// spread operator.
let numbers = [1, 2, 3, 4];
let [first, second, ...others] = numbers;
console.log(numbers)

let newNumbers = [34,56,...others]
console.log(newNumbers)

let favColors = {sally: "blue", tom: "red", scott: "purple"};
let { first } = favColors;
let {scott="white",garret = "yellow"}
