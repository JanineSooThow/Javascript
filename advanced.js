//Q1
function makeCounter() {
let currentCount = 0;

return function() {
currentCount++;
console.log(currentCount)
return currentCount;
};
}

let counter1=makeCounter();
let counter2 = makeCounter();

/* Q1A - created second counter 'counter2' using makeCounter function. This question was slightly confusing. However,
after testing to see if counter2 is independent to counter1, the answer is yes, counter2 is independent from
counter1 because 'counter2' starts by counting 1 again.  */
counter1(); //1
counter1(); //2
counter2(); //1
counter2(); //2

//Q1B - modifying makeCounter to take an argument 'startFrom' specifying where the counter starts from(instead of always starting from 0)
/*function makeCounter(startFrom) {
    let currentCount = startFrom || 0;

    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
}

/* This code defines a function makeCounter() that takes an optional parameter startFrom.
If startFrom is not provided, its value will be undefined, which is a falsy value in JavaScript.

The line let currentCount = startFrom || 0; initializes the currentCount variable to the value of startFrom,
or 0 if startFrom is falsy. The || operator is the logical OR operator in JavaScript,
and it returns the left-hand side value if it's truthy, or the right-hand side value otherwise.
 if you call makeCounter() without any arguments, startFrom will be undefined, which is falsy, so currentCount will be initialized to 0. If you call
 makeCounter(7), for example, startFrom will be 7, which is truthy, so currentCount will be initialized to 7.*/

    // let counter1 = makeCounter(7);
    // counter1(); //8
    // let counter2 = makeCounter();
    // counter2(); //1


//Q1C
/*'makeCounter()' takes the 'incrementBy' parameter, which defaults to 1 if no value is provided.
When you call 'counter1()' and 'counter2()', they start counting from the specified starting values (or
0 if no starting value is specified) and increment by the specified increment values on each call.

function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom || 0;
    let increment = incrementBy || 4;
    return function() {
    currentCount+= increment;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter(0,1);
    counter1(); //1
    counter1(); //2
    let counter2 = makeCounter();
    counter2(); //4
    counter2(); //8
    */

    //Q2 The setTimeout() method sets a timer which executes a function or piece of code once the timer expires

    // function delayMsg(msg)
    // {
    // console.log(`This message will be printed after a delay: ${msg}`)
    // }
    // setTimeout(delayMsg, 15000, '#5: Delayed by 15000ms'); //Q2C - adding fifth test
    // setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
    // setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
    // setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
    // delayMsg('#4: Not delayed at all')



    /* Q2A
    The order that the tests will print in are: delayMsg, #3, #2 and #1. The setTimeout function schedules
    each message to be printed after a certain delay */
    /*Q2B
    Q2B
    Rewriting delayMsg as an arrow function
    const delayMsg = (msg) => {console.log(`This message will be printed after a delay: ${msg}`)
    };
    */
  //  Q2C
  //  Adding a fifth test which uses a large delay time(greater than 10 seconds)

  //  function delayMsg(msg){
  //  console.log(`This message will be printed after a delay: ${msg}`)
  //  }
  //   setTimeout(delayMsg, 15000, '#5: Delayed by 15000ms'); //Q2C - adding fifth test
  //   setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
  //   setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
  //   setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
  //   delayMsg('#4: Not delayed at all')


  /*Q2D - using clearTimeout to prevent the fifth test from printing at all

    function delayMsg(msg) {
    console.log(`This message will be printed after a delay: ${msg}`)
    }
    const preventMsg = setTimeout(delayMsg, 15000, '#5: Delayed by 15000ms');
    setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
    setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
    setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
    delayMsg('#4: Not delayed at all')

   clearTimeout(preventMsg); //stops the fifth test from printing. This message will not be printed to the console
  */

   /*Q3 Debouncing
   function printMe() {
    console.log('printing debounced message')
    }
    printMe = debounce(printMe); //create this debounce function for a)
    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
    setTimeout( printMe, 100);
    setTimeout( printMe, 200);
    setTimeout( printMe, 300); */
    /*Q3A

Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored*/

/*
function debounce(func) {
    let timer;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, arguments);
      }, 1000);
    }
  }

  function printMe() {
    console.log('printing debounced message');
  }

  printMe = debounce(printMe);

  setTimeout(printMe, 100);
  setTimeout(printMe, 200);
  setTimeout(printMe, 300);
  */

  /*
Notes for 3A: The debounce function takes a function func and returns a new function that debounces func.
The inner function uses a closure to keep track of the 'timer'. It first clears the timeout (if any)
using clearTimeout, and then sets a new timeout to call func after 1000 milliseconds of inactivity.
The apply method is used to call func with the correct this value and arguments.

In the code above, the printMe function is decorated with the debounce function, so when it is called multiple times
within a short period, only the last call is executed after 1000ms of inactivity.
Note that the setTimeout functions are used here to simulate the calls to printMe.
In a real application, you would call printMe directly from your code. */

//  Q3b)
// Extend the debounce decorator function to take a second argument ms, which defines the
// length of the period of inactivity instead of hardcoding to 1000ms
function debounce(func) {
    let timer;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, arguments);
      }, 500); //left ms here
    }
  }

  function printMe() {
    console.log('printing debounced message');
  }

  printMe = debounce(printMe, 1000);

  setTimeout(printMe, 100);
  setTimeout(printMe, 200);
  setTimeout(printMe, 300);


//   Q3C
// Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statement.
//  function debounce(func, ms) {
//   let timer;
//   return function(...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, ms);
//   }
// }

// function printMe(msg) {
//   console.log(`printing debounced message: ${msg}`);
// }

// printMe = debounce(printMe, 1000);

// setTimeout(() => printMe('first'), 100);
// setTimeout(() => printMe('second'), 200);
// setTimeout(() => printMe('third'), 300);
//  The modified debounce function now uses the rest parameter ...args
//  to capture all arguments passed to the debounced function, including the msg argument.

// The inner function uses args instead of arguments to pass the arguments to the original func function.

// The printMe function is still decorated with debounce, and now it takes an additional argument msg
// that is included in the console log statement.

/*Q4
The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.
 */
function printFibonacci() {
    let a = 1;
    let b = 1;
    console.log(a);
    console.log(b);

    let timer = setInterval(() => {  //always name the set interval, because you need to stop it at some point
      const c = a + b;
      console.log(c);
      a = b;
      b = c;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer); //stops the interval after 10 seconds
    }, 10000);
  }

  printFibonacci();

  /*setInterval is a function that takes two arguments:
  a function to be executed repeatedly, and the time interval (in milliseconds) between executions.
  the printFibonacci function generates and prints the first two numbers in the sequence (a and b), and then
  sets up a setInterval function to generate and print the remaining numbers every second. The printFibonacci
  function is then called to start the sequence. */

  /* Q4b
Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing*/

//   function printFibonacciTimeouts() {
//   let a = 1;
//   let b = 1;
//   console.log(a);
//   console.log(b);

//   function printNext() {
//     const c = a + b;
//     console.log(c);
//     a = b;
//     b = c;

//    let timer = setTimeout(printNext, 1000);
//     setTimeout(() => {
//       clearTimeout(timer);
//     }, 10000);
//   }

//   timer = setTimeout(printNext, 1000);

//   setTimeout(() => {
//     clearTimeout(timer);
//   }, 10000);
// }

// printFibonacciTimeouts();

/*Q4C  Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.
function printFibonacci(limit) {
  let a = 1;
  let b = 1;
  console.log(a);
  console.log(b);

  let count = 2;

  const intervalId = setInterval(() => {
    const c = a + b;
    console.log(c);
    a = b;
    b = c;
    count++;
    if (count > limit) {
      clearInterval(intervalId);
    }
  }, 1000);
}

printFibonacci(10);
*/
/* Q5 .
The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?

ChatGpt:
The reason the setTimeout call fails when passing car.description as the callback is due to the
way this keyword works in JavaScript.
When a function is called as a method of an object, the this keyword is bound to the object calling the method.
In the case of car.description(), this refers to the car object.

However, when passing car.description as a callback to setTimeout, the function is invoked as a standalone function, not as a method of the car object. In this case, this is not bound to the car object, but to the global object (window in a browser, or global in Node.js), which does not
have a make, model, or year property. This results in an error when the function tries to access these properties.*/

// let car = {
// make: "Porsche",
// model: '911',
// year: 1964,
// description() {
// console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
// }
// };
// car.description(); //works
// setTimeout(car.description, 200); //fails


let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

car.description(); // works
setTimeout(() => {
  car.description();
}, 200); // works
// To fix the setTimeout call, we can wrap the call to car.description() inside a function. This is because setTimeout expects a function as its first argument, but in the
// original code we are passing the description method directly, which results in it losing its this binding.


/*Q5B
*let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

let newCar = Object.assign({}, car);
newCar.year = 1985;

newCar.description(); // This car is a Porsche 911 from 1985
car.description(); // This car is a Porsche 911 from 1964
*/

/*Q5C
The delayed description() call will use the original values and not the new values from b).
This is because the setTimeout call is made before we create the new object newCar and modify its year property.

In other words, when we call setTimeout(car.description, 200) in the original code, we are passing a reference to the description() method of the car object. This reference will remain unchanged even after we create a new object newCar with a modified year property. Therefore, when the delayed description() call is
executed after the 200ms delay, it will still use the original values of make, model, and year from the car object.*/

/*Q5D  Use bind to fix the description method so that it can be called from within
setTimeout without a wrapper function

let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

setTimeout(car.description.bind(car), 200);

In this code, we use the bind() method to create a new function that binds
this to the car object and returns the description() method. We then pass this bound function as
the first argument to setTimeout. When the delayed description() call is executed after the 200ms delay,
it will correctly use the make, model, and year properties of the car object.

By using bind() in this way, we don't need to create a wrapper function to pass to setTimeout,
which simplifies the code.
*/

/* Q5E
Change another property of the car by creating a clone and overriding it, and test that
setTimeout still uses the bound value from d)

let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

// Change the year and model properties
let newCar = Object.assign({}, car);
newCar.year = 1985;
newCar.model = 'Carrera';

// Test that setTimeout still uses the bound value
setTimeout(car.description.bind(car), 200); // This car is a Porsche 911 from 1964
setTimeout(newCar.description.bind(newCar), 400); // This car is a Porsche Carrera from 1985

we create a new object newCar using Object.assign() and modify its year and model properties. We then
 test that setTimeout still uses the bound value from the previous step by calling the description() method
 on both car and newCar with a delay of 200ms and 400ms, respectively. The output shows that the setTimeout
  calls correctly use the make, model, and year properties
 of the appropriate object, even though the properties have been modified after the initial bind() calls.
*/

/*Q6
Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.

function multiply(a, b) {
console.log( a * b );
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
*/
/*Q6A, Q6B,
function multiply(a, b) {
  console.log(a * b);
}

Function.prototype.delay = function(delayTime) {
  const originalFunction = this; // save a reference to the original function
  return function(...args) { // create a new function that takes any number of arguments
    setTimeout(() => {
      originalFunction.apply(this, args); // call the original function with the arguments
    }, delayTime);
  };
};
Reference: ChatGPT and MDN
the apply method calls the original function with the arguments passed to the new function.
The apply method takes two arguments: the first argument is the value of this to use when calling the function,
and the second argument is an array or array-like object containing the arguments to pass to the function.

Using apply with the spread syntax (...args) allows us to pass any number of arguments to the original
function, without needing to specify them individually. This makes the delay method more flexible and allows
it to work with any function, regardless of how many arguments it takes.
*/

/*6C
function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

Function.prototype.delay = function(delayTime) {
  const originalFunction = this; // save a reference to the original function
  return function(...args) { // create a new function that takes any number of arguments
    setTimeout(() => {
      originalFunction.apply(this, args); // call the original function with the arguments using apply
    }, delayTime);
  };
};
multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500 milliseconds
Reference: ChatGPT and MDN

*/
/*Q7
7A
 Define a custom toString method for the Person object that will format and print
their details

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age} years old, ${this.gender}`;
}; */
// 7B Test your method by creating 2 different people
/*
const person1 = new Person('Strawberry Lee', 10, 'female');
console.log(person1.toString()); // prints "Strawberry Lee, 10 years old, female"
const person2 = new Person('Timothy Timber', 20, 'male');
console.log(person2.toString()); //prints "Timothy Timber, 20 years old, male"
*/
//7C Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort
/*
function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

the Student constructor function that takes four parameters: name, age, gender, and cohort.
Inside the constructor function, we use call to invoke the Person constructor function with this set to
the new Student object.
This way, the Student object inherits the name, age, and gender properties from the Person object.
*/

//7D
/*Add a custom toString for Student objects that formats and prints their details. Test
with 2 students.
function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

Student.prototype.toString = function() {
  return this.name + ' (' + this.gender + '), Age: ' + this.age + ', Cohort: ' + this.cohort;
};
const student1 = new Student('Janine SooThow', 31, 'female', '2023');
const student2 = new Student('Jamie Smith', 25, 'male', '2022');

console.log(student1.toString()); // prints "Janine SooThow (female), Age: 31, Cohort: 2023"
console.log(student2.toString()); // prints "Jamie Smith (male), Age: 25, Cohort: 2022"
*/


/*Q8 */

/*Q9 */

// Q10a
import fetch from 'node-fetch';
globalThis.fetch = fetch;

async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const json = await response.json();
      return json;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}
// This code uses async/await to handle the asynchronous response from fetch().
// We use a try/catch block to catch any errors that occur during the fetch request.

// Inside the try block, we use the await keyword to wait for the fetch() response.
// If the response has a status code of 200, we use await again to wait for the response to be parsed as
//  JSON using response.json(). We then return the parsed JSON.

// If the response has a status code other than 200, we throw an error with a message that includes
// the response status.

// If any errors occur during the fetch request or parsing of the response, we catch them in the
// catch block and re-throw a new error with a more descriptive message.

// To use this function, we can simply call it with a URL as an argument and wait for the returned
// promise to resolve or reject, like so:

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));


//Great work Janine!, just a few things to note: always name the setInterval function and clear it when you are done with it., because It will keep running in the background and will cause memory leaks. Also, you can use the spread operator to pass the arguments to the original function.

//Keep being curious do not stop learning, you are doing great! :-)