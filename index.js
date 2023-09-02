// import _ from 'lodash';
 
// // const myArray = [1, 2, 3, 4];
// // let sum = 0;
 
// // for(let i = 0; i < myArray.length; i++) {
// //     sum += myArray[i];
// // }

// // const myArray = [1, 2, 3, 4];
// // let sum = myArray.reduce((prev, curr) => {
// //     return prev + curr;
// // });

// const myArray = [1, 2, 3, 4, 6, 3, ,232, 232, 32];
// const sum = _.sum(myArray);
 
// console.log(sum);
// const name = 'Dicoding';
// const language = 'JavaScript';

// console.log(`Hello $name. Welcome to $language!`);

// const stock = 0;
// const milkNeeded = 25;

// if (stock > milkNeeded) {
//   stock = stock - milkNeeded;
//   console.log('Processing your order...');
// } else {
//   console.log('Out of Stock!');
// }

// console.log('Thank you');

// const oneTwoThree = [1, 2, 3];
// const sevenEightNine = [7, 8, 9];

// const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

// console.log(result);

// const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

// // TODO: Kode untuk menambahkan item Charlie pada index ke-2


// phoneticAlphabet.splice(2, 0, "Charlie");
// console.log(phoneticAlphabet);

// function calculate(value) {
//     return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
// }

// console.log(calculate(3));

// class Car { }
// const car = new Car();
// console.log(typeof Car);

// class MyCustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MyError";
//     }
// }

// try {
//     throw new MyCustomError("This is an error");
// } catch (e) {
//     console.log(e.message);
// }

let myString = "";

try {
    myString += "a";
    throw Error();
} catch(e) {
    myString += "b";
} finally {
    myString += "c";
    throw Error();
    myString += "d";
}

console.log(myString);