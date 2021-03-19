// task1

const productName = "Mango";
const pricePerItem = 150;
const isOnSale = false;
const error = null;
let quantity;

console.log(typeof productName);
console.log(typeof pricePerItem);
console.log(typeof isOnSale);
console.log(typeof error);
console.log(typeof quantity);

// /task 1

// task 2 Вывести на экран сумму: кол-во яблок и винограда

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
console.log("Итого: " + total);

// /task 2

// task 3

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// / task 4

// task 5

const radius = 10;
// const area = Math.PI * Math.pow(radius, 2);
const area = Math.PI * radius ** 2;
console.log(area);

// task 6

// const name = "Mango";
// const age = 5;
// const hobby = "плавать";
// const message = `Здравствуйте, меня зовут ${name}, мне ${age} лет, и мне нравится ${hobby}`;

// console.log(message);

// // / 6 task

// // task 7

// const answer = prompt("Какое официальное название JavaScript?");
// console.log(answer);

// if (answer == "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

// /task 7

// task 8

// const a = 1;
// const b = 2;
// let result;

// if (a + b < 4) {
//   result = "Мало";
// } else {
//   result = "Много";
// }

// result = a + b < 4 ? "Мало" : "Много";

// console.log(result);

// /task 9

// task 10

const min = 14;
const max = 90;
const age = 30;

let result;

// if (age >= min && age <= max) {
//     result = 'В диапазоне';
// } else {
//     result = 'Вне диапазона';
// }

result = age >= min && age <= max ? 'В диапазоне' : 'Вне диапазона';

console.log(result);

// /task 10
