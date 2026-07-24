// 1.配列の合計を計算する関数を関数式で定義しよう
// ・`numbers` という配列（例: `[10, 20, 30]`）を定義します。
// ・この配列の全要素の合計を計算し、 【その結果だけを返す】 関数を作成してください。
// ・この関数の引数は【無し】、もしくは【配列だけ】にしてください。
// ・この関数で得た合計値を`console.log()`で表示してください。

let numbers = [10, 20, 30];

let sumAll = function () {
  let sum = 0;
  numbers.forEach(function (item, index) {
    sum = sum + item;
  });
  return sum;
};
console.log(sumAll());

// 2.配列の各要素を2倍にするアロー関数を作ろう
// ・`values` という配列（例: `[1, 2, 3, 4, 5]`）を定義します。
// ・この配列の各要素を2倍にした【新しい配列を返す】アロー関数を作成します。
// 例:`[1, 2, 3, 4, 5]` → `[2, 4, 6, 8, 10]`
// ・この関数は引数として配列を受け取ります。
// ・この関数を使ってできた新しい配列を`console.log()`で表示してください。

let values = [1, 2, 3, 4, 5];

let double = (array) => {
  let result = [];
  array.forEach(function (item, index) {
    result.push(item * 2);
  });
  return result;
};

console.log(double(values));

// 3.カウントダウンタイマー
// ・HTML上にカウントダウンタイマーを実装する。
// ・秒数入力欄、開始ボタン、カウントダウンの表示を用意する。
// ・`startCountdown` という関数を定義します。この関数は引数として秒数 `seconds` を受け取ります。
// ・開始ボタンを押すと、秒数入力欄で入力された秒数から0までカウントダウンする。
// ・例: 3秒指定の場合 -> 「3...」「2...」「1...」「カウントダウン終了！」と順に表示されるようにします。
// ・各メッセージの表示は1秒ごとに行われるようにしてください。

let inputElement = document.getElementById("secondsInput");
let buttonElement = document.getElementById("startButton");
let displayElement = document.getElementById("displayArea");

let startCountdown = (seconds) => {
  let timerId = setInterval(() => {
    displayElement.textContent = seconds;
    seconds = seconds - 1;
    if (seconds < 0) {
      clearInterval(timerId);
      displayElement.textContent = "カウントダウン終了！";
      inputElement.value = "";
    } else {
      displayElement.textContent = `${seconds}...`;
    }
  }, 1000);
};

buttonElement.addEventListener("click", () => {
  let inputValue = inputElement.value;
  startCountdown(inputValue);
});

// 4.複数の操作を順に処理しよう
// 複数の非同期処理を順に実行して完了するのを待ってから、最終的な処理を行う課題です。
// ・`taskA` 関数を定義し、【ボタンを押してから】2秒後に「タスクA完了」と`console.log()`で表示する。
// ・`taskB` 関数を定義し、【taskAが正常に完了】してから5秒後に「タスクB完了」と`console.log()`で表示する。
// ・`taskC` 関数を定義し、【taskBが正常に完了】してから3秒後に「タスクC完了」と`console.log()`で表示する。
// 全てのタスクが完了(順当にtaskCが正常に完了)した後にのみ、「すべてのタスクが完了しました！」という最終メッセージを`console.log()`で表示します。

let taskButton = document.getElementById("taskButton");

let taskA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("タスクA完了");
      resolve();
    }, 2000);
  });
};

let taskB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("タスクB完了");
      resolve();
    }, 5000);
  });
};

let taskC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("タスクC完了");
      resolve();
    }, 3000);
  });
};

taskButton.addEventListener("click", async () => {
  try {
    await taskA();
    await taskB();
    await taskC();
    console.log(`すべてのタスクが完了しました！`);
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
  // taskA()
  // .then(() => taskB())
  // .then(() => taskC())
  // .then(() => {
  //   console.log(`すべてのタスクが完了しました！`);
  // })
  // .catch((error) => {
  //   console.error("エラーが発生しました:", error);
  // });
});

// 5.複数の操作を並行処理しよう
// 複数の非同期処理がすべて完了するのを待ってから、最終的な処理を行う課題です。
// ・HTML上に「並行処理を開始する！」ボタンを用意する。
// ・`taskA` 関数を使って、【ボタンを押してから】2秒後に「タスクA完了」と`console.log()`で表示する。
// ・`taskB` 関数を使って、【ボタンを押してから】5秒後に「タスクB完了」と`console.log()`で表示する。
// ・`taskC` 関数を使って、【ボタンを押してから】3秒後に「タスクC完了」と`console.log()`で表示する。
// ・全てのタスクが完了した後にのみ、「すべてのタスクが完了しました！」という最終メッセージをコンソールに表示します。

let parallelButton = document.getElementById("parallelButton");

// 前問のコードを再利用しています。
// let taskA = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("タスクA完了");
//       resolve();
//     }, 2000);
//   });
// };

// let taskB = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("タスクB完了");
//       resolve();
//     }, 5000);
//   });
// };

// let taskC = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("タスクC完了");
//       resolve();
//     }, 3000);
//   });
// };

parallelButton.addEventListener("click", async () => {
  try {
    await Promise.all([taskA(), taskB(), taskC()]);
    console.log("すべてのタスクが完了しました！");
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
});
