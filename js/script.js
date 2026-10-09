// 1. 三角形の面積計算

function triangle(a, b) {
  let culc = (a * b) / 2;
  return culc;
}

let area = triangle(4, 3);
console.log(`${area}cm²`);

// 2. xからyまでの合計

function decide(x, y) {
  let min = 0;
  let max = 0;

  if (x <= y) {
    min = x;
    max = y;
  } else {
    min = y;
    max = x;
  }

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }
  return sum;
}

let result = decide(1, 10);
console.log(result);

// 3. 指定した配列から最大値と最小値を見つけるプログラムを作成してください。

const array = [10, 5, 20, 15, 8];

let max = array[0];
let min = array[0];
for (let i = 0; i < array.length; i++) {
  let judge = array[i];
  if (judge > max) {
    max = judge;
  } else if (min > judge) {
    min = judge;
  }
}
console.log(`max:${max} min:${min}`);

// 4. 指定した配列を確認して、先頭と末尾の要素を入れ替えるプログラムを作成してください。

let array2 = [1, 2, 3, 4, 5];

let moveToFront = array2.pop();
let moveToBack = array2.shift();

array2.unshift(moveToFront);
array2.push(moveToBack);

console.log(array2);

// 5. 成績判定

let students = [
  { id: 1, name: "Taro", english: 25, math: 79 },
  { id: 2, name: "Jiro", english: 80, math: 60 },
  { id: 3, name: "Saburo", english: 50, math: 90 },
];

for (let i = 0; i < students.length; i++) {
  let englishScore = students[i].english;

  if (englishScore >= 80) {
    englishScore = "A";
  } else if (60 <= englishScore && englishScore < 80) {
    englishScore = "B";
  } else {
    englishScore = "C";
  }

  let mathScore = students[i].math;

  if (mathScore >= 80) {
    mathScore = "A";
  } else if (60 <= mathScore && mathScore < 80) {
    mathScore = "B";
  } else {
    mathScore = "C";
  }

  console.log(
    `${students[i].name}さんの成績 英語:${englishScore} 算数:${mathScore}`,
  );
}

// 6. 棒グラフを作ってみよう

const numbers = [8, 4, 0, 7, 10];

function graph(array) {
  for (let num = 0; num < array.length; num++) {
    let value = array[num];
    let asterisk = "";
    for (let i = 0; i < value; i++) {
      asterisk = asterisk + "*";
    }
    console.log(asterisk);
  }
}

graph(numbers);
