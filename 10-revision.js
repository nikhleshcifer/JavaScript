//Problem: Create an array containing different types of teas
const teas = ["Green tea", "Black tea", "Oolong tea", "White tea", "Herbal tea"];
console.log(teas);

//Problem: Add "Chamomile tea" to the existing list of tea
teas.push("Chamomile tea");

//Problem: remove "Oolong tea" from the list of tea
const index = teas.indexOf("Oolong tea");
if (index > -1) {
    teas.splice(index, 1);
}

//Problem: Filter the list to only includes teas that are caffinated
const caffinatedTeas = teas.filter((tea) => tea !== "Herbal tea");

//Problem:  Sort the list of the tea in alphabetical order
const tea = ["Green tea", "Black tea", "Oolong tea", "White tea", "Herbal tea"];
console.log(tea.sort());

//Problem: Use a for loop to print each type of tea in the array
for (let i = 0; i < teas.length; i++) {
    console.log(teas[i]);
}

//Problem: Use a for loop to count how many teas are caffinated (excluding "Herbal tea")
let caffinatedMyTeas = 0;
for (let i = 0; i < teas.length; i++) {
    if (teas[i] !== "her") {
        caffinatedMyTeas++;
    }
}

//Problem: Use a for loop to create a new array with all tea name in uppercase
const uppercaseTeas = []
for (let i = 0; i < teas.length; i++) {
    uppercaseTeas.push(teas[i].toUpperCase());
}

//Problem: Use a for loop to find the tea name with the most characters
let longestTeas = ""
for (let i = 0; i < teas.length; i++) {
    if (teas.length[i] > longestTeas.length) {
        longestTeas = teas[i];
    }
}

//Problem: Use a for loop to reverse the orderof teas in the array
const reverseArray = []
for (let i = teas.length - 1; i >= 0; i--) {
    reverseArray.push(teas[i]);
}
