// 課題1

let name = "taro";
let age = 29;

console.log(`名前:${name} 年齢:${age}`);

// 課題2

let height = 4;
let width = 6;
let area = null;

area = height * width;

console.log(area);

// 課題3

let number = 45;

if (number % 2 === 0) {
  console.log("偶数です");
} else {
  console.log("奇数です");
}

// 課題4

let checkAge = 17;
if (18 <= checkAge) {
  console.log("成年です。");
} else {
  console.log("未成年です。");
}

// 課題5

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

// 課題6

let score = 70;

if (80 <= score) {
  console.log("A");
} else if (60 <= score && score < 80) {
  console.log("B");
} else if (score < 60) {
  console.log("C");
}

// 課題7

let numbers = 50;

for (let i = 1; i <= numbers; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
