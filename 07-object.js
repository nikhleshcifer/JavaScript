const Person = {
    firstName: 'nikhilesh',
    lastName: 'gupta',
    hobbies: ['coding', 'games'],
    isMarried: 'no',
    hadGf: 'yes',
    getFullName: function () {
        return "nikhilesh gupta";
    },
    address: {
        hno: 1,
        street: 3,
        countryCode: 'IN',
        state: 'PB'
    }
}

console.log(Person.firstName);

const remote = {
    color: 'black',
    brand: 'apple',
    dimension: { height: 2, width: 3, },
    turnoff: function () {

    },
    volumeup: function () {

    },
    powerOff: 'yes',
}