// Series of JS challenges adapted for basic practice 

// 1. Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

//resting parameter ...

function myFunction(word, secondWord, ...manyMoreArgs) {
    // display values to check output 
    console.log(word);
    console.log(secondWord);
    console.log(manyMoreArgs);
    // declare a 
    const a = (manyMoreArgs);
    // Remove the first 3 elements of 'a'
    a.splice(2, 3)
    // display values to check output 
    console.log(manyMoreArgs);
    // Return the result
    return a;
}

// call the function, pass it values
myFunction("banana", "apple", "pear", "mango", "watermelon", "orange");

// Or array declaration stored in variable 
const a = ["banana", "apple", "pear", "mango", "watermelon", "orange"];
// display the values to check ouput
console.log(a);

// declare function using ES6 arrow function
const myFunction = (a) => {
    //remove starting at first position: three elements
    a.splice(0, 3);
    // Return the result
    return a;
}
// call the function 
myFunction(a);
// check output
console.log(a);



// 2. 2 ways to write a function to check if a number is >= 0 , return: Boolean 

const lessThanOrEqualToZero = (number) => {
    if (number <= 0) {
        return true;
    } else {
        return false;
    }
}
let result = lessThanOrEqualToZero(4);
console.log(result);

// or without storing the result in a variable called result

const lessThanOrEqualToZero = (number) => {
    if (number <= 0) {
        return true;
    } else {
        return false;
    }
}
lessThanOrEqualToZero(4);
console.log(lessThanOrEqualToZero(4));



// 3. Function calculates millimetres from meters and centimeters

const toMillimeters = (meters, cm) => {
    return (meters * 100 + cm) * 10;
}
// result variable name easier to reuse code block (than 'mm' or 'milimeters')
let result = toMillimeters(3, 50);
//check values
console.log(result);

//4. Calculate kilos from britishStones (unit of 14 lbs) and lbs
const toKilos = (britishStones, lbs) => {
    return (britishStones * 14 + lbs) / 2.205;
}
let result = toKilos(10, 12);
console.log(result);


//5. Original challenge, adapted for 3. & 4. 

const toSeconds = (hours, minutes) => {
    return (hours * 60 + minutes) * 60;
}
toSeconds(1, 40);
let seconds = toSeconds(1, 40);
console.log(seconds);
