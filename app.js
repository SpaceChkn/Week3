// Week 3 - Elias Medina 

// #1A  Programmatically subtract the value of the first element in the array from the value in the last element of the array
//(do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
var ages = [3,9,23,64,2,8,28,93];

var first = ages[0];
var last = ages[ages.length -1];

console.log(last - first);

//#1B 	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(77)
console.log(ages)

//#1C	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
var count = 0;
var total = 0;

for(var i = 0; i < ages.length; i++){
 if(ages[i] !== undefined){
        count++;
        total += ages[i];
    }
}

 let average = total / count;
 console.log(average);

//#2A   Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
var names = ['Sam','Tommy','Tim','Sally','Buck','Bob',]
//console.log(names);

//console.log(names[0])
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
//finding the average amount of letters in names without a loop
avg = names.join('').length / names.length
console.log(avg)

var total2 = 0;
for(var i = 0; i < names.length; i++) {
    total2+= names[i].length;

}
var average2 = total2/names.length;
console.log(average2)

//#2B   Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.	
let string = '';
for(i = 0; i <names.length; i++){
    string += names[i] + " ";
}
console.log(string);
//added a name to the array
//names.push('Mike')
//console.log(names)

//#3  How do you access the last element of any array?

console.log(names[names.length-1])

//#4  How do you access the first element of any array?
console.log(names[0])


//#5  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
var nameLengths = names.map(function(element){
    return element.length;
});
console.log(nameLengths);

//for (i = 0; i < names.length; i++) {
 //   console.log(names[i]);
 // }

//console.log(nameLengths)

//#6   Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sum = nameLengths.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
});

console.log(sum);

//#7    Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
function wordRep( word, n ){
    let string = '';
    for (i = 0; i < n; i++){
        string += word;
    } 
    return string;
}
let repeatString = wordRep('Eli', 15);
console.log(repeatString);

//#8 	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName){
    return firstName + '' + lastName;
}
console.log(fullName('Cliff' , 'Clavin'));

//#9  	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. 
function isGreaterThan(numbers){
    let sum = numbers.reduce(function(accumulator,currentValue){
        return accumulator + currentValue;
    });

    if (sum > 100){
        return true;
    }
    else {
        return false;   
    } 
}
console.log(isGreaterThan(ages));

 //#10  Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averageOfNumbers(numArray){
    let sum = 0;
    numArray.forEach(function(element) {
        sum += element;
    });
    return sum / numArray.length;
}
console.log(averageOfNumbers(ages));

 //#11 	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
 function isAverageGreaterThan(firstParameter, secondParameter){
    let averageFirst = averageOfNumbers(firstParameter);
    let averageSecond = averageOfNumbers(secondParameter);
    if (averageFirst > averageSecond) 
        return true;
    return false;

let isGreater = isAverageGreaterThan(nameLengths, ages);
console.log(isGreater);

console.log(isAverageGreaterThan(ages, nameLengths));
console.log(isAverageGreaterThan(ages, ages));

//#12	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    return (isHotOutside && moneyInPocket > 10.50);
}
console.log('willBuyDrink: ' + willBuyDrink(true, 10.51));
console.log(willBuyDrink(true, 10.50));
console.log(willBuyDrink(false, 10.51));
console.log(willBuyDrink(false, 10.50))   


 }

// I wanted to make something a little more complex but got stuck.
 //I decided to make a simple dog to human years age calculator 
function dogAge(age) {
    var dogYears = 7 * age;
    console.log(dogYears + '!');
}
dogAge(10);