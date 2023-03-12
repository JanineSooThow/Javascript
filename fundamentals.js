//Q1 What are the results of these expressions?
"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
!true //false
6 / "3" //2
"2" * "3" //6 
4 + 5 + "px" //9px
"$" + 4 + 5 // $9 - my answer, but the right answer was $45
"4" - 2 //2 
"4px" - 2 //2 - the correct answer is NaN
" -9 " + 5 //-95
"-9 " - 5 // -9-5 was my answer. The correct answer is -14
null + 1 // 1
undefined == null //true
undefined === null //false
" \t \n" -2 // -2

//Q2 which of the below are not giving the right answer? Why are they not correct? How do we fix them?
/* let addition = three + four should give the answer 7 but instead it gives 34 due to the values 
assigned to the let variables three and four being in double quotes ie. any text in double quotes are strings. 
When JS sees the + operator with strings, JS will concatenate the strings (join them together), resulting in "34" and 
not number '7'*/
let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
/*let addition = three + four Correct answer is 7 if quotes are removed from values of let variables or use parseInt
if wanting to perform addition with the variables 'three' and 'four'. Just need to convert the strings to numbers
first. */
let multiplication = three * four //12
let division = three / four //0.75
let subtraction = three - four //-1
let lessThan1 = three < four //true
let lessThan2 = thirty < four //gave the answer in powershell as true but it is false

let addition = parseInt(three)+ parseInt(four); // 7 - runs in Powershell
console.log(three*four); // runs in powershell
console.log(three / four);
console.log(three - four);
console.log(three < four);
console.log(thirty < four);

function sum (a, b) { //testing powershell and node in the terminal
    return a + b
}
console.log(sum(4,5));
//Q3
if (0) console.log('#1 zero is true') // will not print 
/*The if (0) console.log('#1 zero is true') statement will not print the message "#1 zero is true" 
because the condition 0 is considered falsy in JavaScript. In JavaScript, any value that is not undefined, 
null, NaN, 0, "" (an empty string), or false is considered truthy. In contrast, the values undefined, null, NaN,
 0, "" (an empty string), and false are considered falsy.

In the case of if (0), the value 0 is a falsy value, so the condition is considered 
false and the code block inside the if statement is not executed. 
Therefore, the console.log() function inside the code block will not be called and the 
message will not be printed to the console. */


if ("0") console.log('#2 zero is true') //this message will print
if (null) console.log('null is true')//will not print - null is considered falsy and hence code won't be executed
if (-1) console.log('negative is true')//this message will print
if (1) console.log('positive is true')//this message will print

//Q4
let a = 2;
let b =3;
let result = `${a} + ${b} is `;

if (a + b < 10) { 
    result += 'less than 10';
} else {
    result: 'greater than 10';
}
//(a + b <10)? "less than 10" : "greater than 10"
let result2 = (a + b <10)? "less than 10" : "greater than 10";
console.log (result2);
console.log (result);

//Q5 
function getGreeting (name) {      // functional syntax expression 
    return 'Hello ' + name + '!';
}
console.log(getGreeting('Janine'));

getGreeting = function(name) {  //rewritten functional syntax expression
    return 'Hello ' + name + '!';
}
console.log(getGreeting('Janine'));

let getname= (firstname) => { //arrow function syntax
return 'Hello ' + firstname + '!';
}
console.log(getname('Janine'));

//Q6
const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya', //6a
    greeting(person) { 
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; //6a
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person){
    return 'Nice to meet you.';
    }
    
    }
    inigo.greeting(westley)
    inigo.greeting(rugen)

    //Q7
    //7a
    /*To chain the methods together, you can modify the methods to return this at the end of each method call. 
    This will allow you to chain the methods together in a single statement.This will execute each method in order and output 
    the halftime score of the game. */
    const basketballGame = {
        score: 0,
        freeThrow() {
          this.score++;
          return this;
        },
        basket() {
          this.score += 2;
          return this;
        },
        threePointer() {
          this.score += 3;
          return this;
        },
        halfTime() {
          console.log('Halftime score is ' + this.score);
          return this;
        }
      };
      
      // method chaining
      basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
      
    //7b const basketballGame 
    fullTime() 
    console.log('Full-time score is ' + this.score);
    return this; 
    
    //7c
    //7d
    
    //Q8
    function printObjectProperties(obj) {   //8A
        for (let property in obj) {
          console.log(`${property}: ${obj[property]}`);
        }
      }

      const sydney = { //8A
        name: 'Sydney',
        population: 5_121_000,
        state: 'NSW',
        founded: '26 January 1788',
        timezone: 'Australia/Sydney'
      };
      
      printObjectProperties(sydney); 
    //8b 

    function printobjectp2(obj) {
        for (let property in obj) {
            console.log(`${property}: ${obj[property]}`);
        }
    }
        const Palermo = { //8b
        name: 'Palermo',
        population: 670_000,
        state: 'Sicily',
        founded: '736BC',
        timezone: 'European'
      };
      printobjectp2(Palermo);
      
      
      //Q9a
      let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
      let moreSports = teamSports;

      moreSports.push('Soccer');
      moreSports.unshift('Badminton');

      console.log(teamSports); //output [ 'Badminton', 'Hockey', 'Cricket', 'Volleyball', 'Soccer' ]
      console.log(moreSports); //output is same as above
      //Q9B
      let dog1 = ['Bingo'];
      let dog2 = dog1;

      dog1.push('Ollie');
      dog2.unshift('Fluff');

      console.log(dog1);
      console.log(dog2);
      //9C
      let cat1 = {name: 'Fluffy', breed: 'Siberian'};
      let cat2 = cat1;
      cat2.name = 'George';
      console.log(cat1);
      console.log(cat2);
      //9D
      /*When printing the original teamSports, dog1 and cat1 variables to the console, they have changed. When you assign
      one variable to another, you create a reference to the same object. When you change the property of a variable it affects
      the other as they both reference to the same object in memory. teamSports and moreSports refer to the same array, so changing one
      will change the other */
      //9E
      /*let moreSports = {}; independent objects
      let cat2 = {}; */

    //Q10
function Person(name, age) {
this.name = name;
this.age = age;
this.human = true;
} 
    const mySister = new Person("Marissa", 35); //10a
    const myCousin = new Person("Penny", 48); //10b
    console.log(mySister); //10c Person { name: 'Marissa', age: 35, human: true }
    console.log(myCousin); //10c Person { name: 'Penny', age: 48, human: true }
//10d
class PersonClass {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    } 
}
const myBrother = new PersonClass("Nicholas", 40, true); //10d PersonClass { name: 'Nicholas', age: 40, human: true }
console.log(myBrother);
//10e
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function() {
      return this.age >= 16;
    }
  }

  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.human = true;
    }
  
    canDrive() {
      return this.age >= 16;
    }
  }
  