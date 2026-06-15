// 1.三角形の面積計算
// 三角形の面積を求める関数を作成し、その関数を使って面積をコンソールに表示するプログラムを作成してください。

// 縦＊横％2＝三角形の面積

function triangle(a, b) {
  let culc = a * b;
  culc = culc / 2;
  return culc;
}

let rst = triangle(6, 8);
console.log(rst);

// -------------------------------------------
// 2.xからyまでの合計
// 二つの数字(x,y)を設定し、小さい方〜大きい方までの整数を合計する関数を作成し、その結果をコンソールに表示するプログラムを作成してください。
// 例1: x:1, y:10 → 55
// 例2: x:5, y:1 → 15

function startEnd(x, y) {
  let start;
  let end;

  if (x < y) {
    start = x;
    end = y;
  } else {
    start = y;
    end = x;
  }

  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(startEnd(1, 4)); // x:1, y:4 → 10

// -------------------------------------------
// 3.指定した配列から最大値と最小値を見つけるプログラムを作成してください。
// ・配列:[10, 5, 20, 15, 8]
// ・出力:オブジェクト形式で { max: 20, min: 5 }

let number = [10, 5, 20, 15, 8];

let max = number[0];
let min = number[0];

for (let i = 0; i < number.length; i++) {
  // "10", "5", "20", "15", "8" の順に表示

  if (number[i] > max) {
    max = number[i];
  }

  if (number[i] < min) {
    min = number[i];
  }
}

let result = {
  max: max,
  min: min,
};

// let result = { max, min };

console.log(result);

// -------------------------------------------
// 4.指定した配列を確認して、先頭と末尾の要素を入れ替えるプログラムを作成してください。
// ・配列:[1, 2, 3, 4, 5]
// ・出力:[5, 2, 3, 4, 1]

let numbers = [10, 20, 30, 40, 50, 60, 70];

let sentou = numbers[0];
let matsubi = numbers[numbers.length - 1];

numbers[0] = matsubi;
numbers[numbers.length - 1] = sentou;
console.log(numbers[0], numbers[numbers.length - 1]);

// [numbers[0], numbers[numbers.length - 1]] = [numbers[numbers.length - 1], numbers[0],];
// console.log(numbers[0], numbers[numbers.length - 1]);

// -------------------------------------------
// 5.成績判定
// 生徒のテスト結果をもとに英語と算数の成績を出力する。

// ・生徒の情報は以下を使うこと
// 	let students = [
// 		{ id: 1, name: "Taro", english: 25, math: 79 },
// 		{ id: 2, name: "Jiro", english: 80, math: 60 },
// 		{ id: 3, name: "Saburo", english: 50, math: 90 },
// 	];

// ・得点と成績の関係は以下に従うこと
// 	・80点以上：A
// 	・60点以上80点未満：B
// 	・60点未満：C
// ・出力:全員の成績を以下のように出力する
// 	「●●さんの成績 英語:A 算数:B」

let students = [
  { id: 1, name: "Taro", english: 25, math: 79 },
  { id: 2, name: "Jiro", english: 80, math: 60 },
  { id: 3, name: "Saburo", english: 50, math: 90 },
];

function judge(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else {
    return "C";
  }
}
// let englishGrade = judge(item.english);

for (let i = 0; i < students.length; i++) {
  let item = students[i];
  let englishGrade = judge(item.english);
  let mathGrade = judge(item.math);

  // for (let item of students) {
  //   let englishGrade = judge(item.english);
  //   let mathGrade = judge(item.math);

  console.log(`${item.name}さんの成績 英語:${englishGrade} 算数:${mathGrade}`);
}

// -------------------------------------------
// 6.棒グラフを作ってみよう
// 自由に数値の配列を作成し、それぞれの数値を*（アスタリスク）で表現した簡単な棒グラフをコンソールに表示する関数を作成してください。
//   例1:配列:[3, 1, 4, 2] の時
//   ***
//   *
//   ****
//   **
//   例2:配列:[5, 1, 0, 3, 9, 2] の時
//   *****
//   *
//
//   ***
//   *********
//   **
// 以上です。

let numbers2 = [6, 2, 0, 4, 10, 3];
// let stickGraph = "";

for (let num of numbers2) {
  let stickGraph = "";

  for (let i = 0; i < num; i++) {
    stickGraph = stickGraph + "*";
  }

  console.log(stickGraph);
}
