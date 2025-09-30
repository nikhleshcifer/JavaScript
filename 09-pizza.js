let numberOfGuest = 10;

let pizzaSize;
//Small <= 2
//Medium <= 5
//large

if (numberOfGuest <= 2) {
    pizzaSize = "Small";
} else if (numberOfGuest <= 5) {
    pizzaSize = "Medium";
} else {
    pizzaSize = "Large";
}

console.log(pizzaSize);