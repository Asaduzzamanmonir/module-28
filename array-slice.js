const numbers = [1, 4, 5, 9, 5, 46, 65, 24, 33, 56, 34, 43, 50];
//slice
// const numSliced = numbers.slice(5, 10);
// console.log(numSliced);
// console.log(numbers);

//spliced a array remove element
// const numSpliced = numbers.splice(5, 4);
// console.log(numSpliced);
// console.log(numbers);

const numSpliced2 = numbers.splice(5, 0, 789, 888, 999);
console.log(numSpliced2);
console.log(numbers);