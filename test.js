// const animals= ['Cat', 'Dog', 'Tiger', 'Sealion', 'Giraffe'];

// function replaceMiddleAnimal(newValue) {
// let middle = animals.filter(animal => animal.startsWith(newValue))

// return middle
// }
// console.log(replaceMiddleAnimal("S"));


import fetch from "node-fetch";
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

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
