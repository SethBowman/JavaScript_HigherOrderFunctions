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