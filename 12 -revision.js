//Problem: Create an object representing a type of tea with properties for name, type and caffine content.
const teas = {
    name: "Lemon",
    type: "Green",
    caffine: "low"
}

//Problem: Access and print the name and type properties of the tea object.
console.log(teas.name);
console.log([teas.name]);

//Problem: Add a new property origin to the tea object.
teas.origin = "Assam";

//Problem:Change the caffiene level of the tea object to "Medium".
teas.caffine = "Medium";  

//Problem:Remove the type property of the tea object.
delete teas.type

//Problem:Check if the tea object has a property origin.
console.log("origin" in teas);

//Problem: use a for..... in loop to print all properties of the tea object.
for(let key in teas){
    console.log(key + ": " + teas[key]);
}

//Problem:Create a nested object representing different types of teas and their properties.
const myTeas = {
    greenTea: {
        name:"Greentea"
    },
    blackTea: {
        name:"Blacktea"
    }
}

