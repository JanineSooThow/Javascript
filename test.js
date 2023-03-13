const animals= ['Cat', 'Dog', 'Tiger', 'Sealion', 'Giraffe'];

function replaceMiddleAnimal(newValue) {
let middle = animals.filter(animal => animal.startsWith(newValue))

return middle
}
console.log(replaceMiddleAnimal("S"));
