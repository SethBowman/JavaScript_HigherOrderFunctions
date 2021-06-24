let numbers = [1, 2, 3, 4, 5];

let person = 
{
    name: "Seth",
    age: 27,
}

// for/of iterates overs the values of an object

for (let value of numbers) 
{
    console.log(value);
}

// for in iterates over the properties of an object

for (let value in person) 
{
    console.log(value);
}


function lessThan(number)
{
    return function (newNumber)
    {
        if(number > newNumber) 
        {
            return true;
        }
        else 
        {
            return false;
        }       
    }
}

let lessThan100 = lessThan(100);
let lessThan25 = lessThan(25);

lessThan100(150); // false
lessThan100(50); // true

lessThan25(15); // true


// ====== Exercise ====== //

function plus(number) 
{
    return function (plusNumber) 
    {
       return plusNumber += number;
    }
}

plus15 = plus(15);

console.log(plus15(10));



// ========= Review & Practice ========= //

var seasons = ["Spring", "Summer", "Fall", "Winter"];

function printN(value) 
{
    console.log(value.toUpperCase());
}


//Prints each season to the console after converting the letters to upper case
seasons.forEach(printN);


// New object
let jacket1 = 
{
    color: "red",
    season: "winter", 
    size: "L",
    hasHood: true,
    price: 24.99,  
}

let jacket2 = 
{
    color: "blue",
    season: "fall",
    size: "M",
    hasHood: true,
    price: 30.00,   
}

let jacket3 = 
{
    color: "burlywood",
    season: "spring",
    size: "M",
    hasHood: false,
    price: 100.00,
}


// New empty array
const inventory = [];


// Adds new objects to new array
inventory.push(jacket1, jacket2, jacket3);

// Log results
console.log(inventory);


// Finds the number of "M" jackets
let medJackets = inventory.reduce(function (acc, jacket) 
{
    if(jacket.size == "M") 
    {
        return acc + 1;
    }
    else
    {
        return acc;
    }
}, 0);


// Log the result
console.log(medJackets);


// Removes the hasHood jackets
const updatedInventory = inventory.filter(function (value)
{
    return !value.hasHood;
});


// Log the new result which created a new inventory and removed the jackets with hoods
console.log(updatedInventory);


// Returns jackets with price less than 60 dollars

const cheapJackets = inventory.filter(function (value) 
{
    return value.price < 60;
});

// Log result which created a new array of jacket objects and revoved the jackets with price < 60
console.log(cheapJackets);