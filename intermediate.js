//Q1
/*This function first splits the input string into an array of words using the split method with a space delimiter.
 Then, it loops through each word in the array and uses the charAt method to get the first letter of
the word and the toUpperCase method to capitalize it. It then uses the slice method to get the rest of the
word after the first letter and concatenates the capitalized first letter and the rest of the word using the +
operator.After all words have been capitalized, the function joins the words back into a string using the join method with a space delimiter and returns it.
Testing the function with the input "los angeles" would output "Los Angeles"

function ucFirstLetters(str) {
    // split the string into an array of words
    const words = str.split(" ");

    // loop through each word and capitalize its first letter
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    // join the words back into a string and return it
    return words.join(" ");
  }
  console.log(ucFirstLetters("hello world"));
  console.log(ucFirstLetters("i love burgers"));
  console.log(ucFirstLetters("in your light"));
console.log(ucFirstLetters("los angeles")); */

//Q2
/*The function takes two parameters: str, which is the input string, and max, which is the maximum
length of the string allowed before truncation.If str is shorter than or equal to max, the function
returns the original string. Otherwise, it returns a truncated string that is max characters long,
with an ellipsis ... added to the end

function truncate(str, max) {
  if (str.length <= max) {
    return str;
  }
  return str.slice(0, max - 3) + '...';
}

function truncate(str, max) {
  if (str.length <= max) {
    return str;
  }
  return str.slice(0, 3) + '...'; //you dont need to write the argument 'max', whatever you put the second argurment will be defined as max. and dont forget to call the function. :-)
}

console.log(truncate('hey im gonna be cut', 4));

*/
//Q3
//Q3A
/*const animals = ['Tiger', 'Giraffe'];
animals.push('Lion','Sealion');
console.log(animals);
//Q3b
const animals = ['Tiger', 'Giraffe'];
animals.unshift ('Cat','Dog');
console.log(animals); */
//q3C
/*const animals = ['Tiger', 'Giraffe', 'Lion', 'Sealion']; //putting animals in alphabetical order
animals.sort();
console.log(animals);

const animals = ['Cat', 'Dog', 'Tiger', 'Giraffe'];
animals.sort();
console.log(animals); */

//q3d
/*const animals= ['Cat', 'Dog', 'Tiger', 'Sealion', 'Giraffe'];

function replaceMiddleAnimal (newValue) {
let middle = animals.filter(animal => animal.startsWith(newValue))
return middle
}
console.log(replaceMiddleAnimal("S"));

console.log(animals ('Zebra')) //cannot call this because animals is not a function, you can get rid of this line because your already did the job in the function above. :-)

*/

/* Examplefunction findMatchingAnimals(beginswith) {
  let matches = animals.filter
  (animal =>  //create new array which contains only matches
    animal.startsWith(beginswith))
  return matches
}
console.log(findMatchingAnimals("C")); */
//3e
/*Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case. */
/*
function findMatchingAnimals (beginsWith, animals){const arr = animals ["Cat","Dog","Tiger"];
  return arr;
} */
/* chatGPT answer for (3e)
function findMatchingAnimals(beginsWith, animals) {
return animals.filter(animal => animal.startsWith(beginsWith));
}
*/
/*q4

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display */




//q5 why would the code below return the wrong answer
/*let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
 //0.2 + 0.1 = 0.30000000000000004
5A - The code returns the wrong answer because of how computers handle floating-point numbers.
Floating-point numbers are represented in binary format in
computers, and some decimal numbers cannot be represented exactly in binary, leading to rounding errors.

In this case, the decimal number 0.1 cannot be represented exactly in binary, so when the
computer performs the addition operation between 0.2 and 0.1, it introduces a small rounding error,
resulting in the value 0.30000000000000004 instead of the expected 0.3.
*/
//5B
/*
function currencyAddition(float1, float2) {
  var result = (parseFloat(float1) + parseFloat(float2)).toFixed(2);
  return parseFloat(result);
}
var float1 = '0.1';
var float2 = '0.2';
var result = currencyAddition(float1, float2); // returns 0.3

//5c
//5d

/* 6 This function takes an array duplicatesArray as its parameter and returns a new array uniqueArray
containing only the unique values from duplicatesArray. The function uses a for loop to iterate over each
element of duplicatesArray, and it checks whether that element is already present in uniqueArray using the
includes method. If the element is not already present in uniqueArray, it is added to the array using the
push method.

function unique(duplicatesArray) {
  const uniqueArray = [];
  for (let i = 0; i < duplicatesArray.length; i++) {
    if (!uniqueArray.includes(duplicatesArray[i])) {
      uniqueArray.push(duplicatesArray[i]);
    }
  }
  return uniqueArray;
}
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
console.log(unique(colours)); // prints [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // prints [ 55, 84, 97, 63, 32, 91, 43 ] */

//7

 const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// /* 7a
const getBookTitle = books.find (item => item.id == 2);
console.log (getBookTitle.title); //outputs 'To kill a mockingbird'

/* 7b
function getOldBooks() {
  return books.filter(book => book.year < 1950);
}

console.log(getOldBooks()); */
//7c
/*
function addGenre() {
  return books.map(book => book.addGenre === "classic");
}
console.log(addGenre()); */

/* chatGPT's answer below as code above was incorrect
function addGenre() {
  return books.map(book => {
      return {
          ...book,
          genre: 'classic'
      };
  });
}

console.log(addGenre()); */

//Q8
/*8a
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map () //8a

// 8B phoneBookDEF.set ()
phoneBookDEF.set ('Daryl', '023456788')
phoneBookDEF.set ('Elissa', '0123456789')
phoneBookDEF.set ('Freida','02111456777')
//8c update phone number for caroline
phoneBookABC.set('Caroline', 'new mobile number')
phoneBookABC.set

//Q9
/*Given the below salaries object, perform the following tasks.
let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
}; */
/* 9a
function sumSalaries(salaries)
let totalSalary = 0;
for (let i in salaries) {
  console.log(salaries [i]);
  totalSalaries += salaries [i];
}
return totalSalaries;
*/

//9b
/* This function takes in an object salaries as an argument, where the keys are the names of the people
 and the values are their salaries. It loops through each key-value pair in the object and checks if the
 salary is greater than the current highest salary. If it is, it updates the highest salary and the
 name of the top earner. After looping through all the key-value pairs, it returns the name of the top earner. */
function topEarner(salaries) {
  let highestSalary = 0;
  let topEarner = "";

  for (let person in salaries) {
    if (salaries[person] > highestSalary) {
      highestSalary = salaries[person];
      topEarner = person;
    }
  }

  return topEarner;
}
let salaries = {
  "Timothy": 35000,
  "David": 25000,
  "Mary": 55000,
  "Christina": 75000,
  "James": 43000
};

console.log(topEarner(salaries)); // "Christina"

//Q10
/*const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
/*
console.log((today.getHours()*60) + today.getMinutes() + " minutes have passed today") //10A
console.log((today.getHours()*60*60) + today.getMinutes()*60 + today.getSeconds() + "seconds have passed today") //10B
*/
 //10c const birthday = new Date('1991-06-24'

/*console.log(birthday);
let years = today.getFullYear()-birthday.getFullYear()
let months = today.getMonth() - birthday.getMonth()
let days = today.getDate() -birthday.getDate()

console.log(`I am ${years} years old, ${months} months old, ${days} days old`) //10c
console.log("I am" + years + "years old," + months + "months old," + days + "days old") *///alt way with double quotes
//10d
/*function daysInBetween(date1, date2){
  let differenceMS = date2 - date1  //date2 is date now and date1 is birthday
  let millisecondsPerDay = 24 * 60 * 60 * 1000
  let differenceDays = Math.floor(differenceMS / millisecondsPerDay)
  return differenceMS
}
console.log(daysInBetween(birthday, today)) */