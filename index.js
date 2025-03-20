// function sum(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return b * a;
// }

// function divide(a, b) {
//   return a / b;
// }

// function calculate(a, b, action) {
//   return action(a, b);
// }

// const array = [
//   {
//     a: 18,
//     b: 3,
//     calculate: sum,
//   },
//   {
//     a: 18,
//     b: 3,
//     calculate: subtract,
//   },
//   {
//     a: 18,
//     b: 3,
//     calculate: multiply,
//   },
//   {
//     a: 18,
//     b: 3,
//     calculate: divide,
//   },
// ];

// for (const obj of array) {
//   console.log(calculate(obj.a, obj.b, obj.calculate));
// }

function reverseNumber(number) {
  let newNumber = "";
  const array = String(number).split("");
  for (let i = array.length - 1; i >= 0; i--) {
    newNumber += array[i];
  }
  console.log(Number(newNumber));
}

reverseNumber(1234567);

// function capitalizeFirstLetter(text) {
//   let newString = "";
//   const array = text.split(" ");
//   for (const word of array) {
//     // const arr = word.split("");
//     // arr[0] = arr[0].toUpperCase();
//     // newString += arr.join("") + " ";

//     const newWord = word.charAt(0).toUpperCase() + word.slice(1);
//     newString += newWord + " ";
//   }

//   console.log(newString.trim());
// }

// function capitalizeFirstLetter(text) {
//   const array = text.split(" ");
//   let newArray = [];
//   for (const word of array) {
//     const arr = word.split("");
//     arr[0] = arr[0].toUpperCase();

//     newArray.push(arr.join(""));
//   }

//   console.log(newArray.join(" "));
// }

capitalizeFirstLetter("the brown fox");
