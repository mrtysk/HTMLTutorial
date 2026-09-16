// 課題①

let numbers = [10, 20, 30];
let sum = 0;

const culc = function () {
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};

culc();

console.log(sum);

// 課題②

const values = [1, 2, 3, 4, 5];
const newValues = values.map((num) => {
  return num * 2;
});

for (let num of newValues) {
  console.log(num);
}

// 課題③

const inputCount = document.getElementById("inputCount"); // 秒数入力欄
const startButton = document.getElementById("startButton"); // 開始ボタン
const displayCount = document.getElementById("displayCount"); // 画面に秒数のカウントダウンを表示

startButton.addEventListener("click", () => {
  startCountdown(inputCount.value);
});

function startCountdown(seconds) {
  let count = seconds;

  setTimeout(function () {
    if (count <= 0) {
      displayCount.textContent = "カウントダウン終了！";
    } else {
      displayCount.textContent = count + "...";
      count = count - 1;
      startCountdown(count);
    }
  }, 1000);
}

// 課題④

const asynchronousButton = document.getElementById("asynchronousButton");

asynchronousButton.addEventListener("click", () => {
  taskA()
    .then((resultA) => taskB(resultA))
    .then((resultB) => taskC(resultB))
    .then((finalResult) => {
      console.log("すべてのタスクが完了しました！");
    })
    .catch((error) => {
      console.log("タスクが失敗しました！");
    });
});

function taskA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("taskAが正常に完了");
      resolve();
    }, 2000);
  });
}

function taskB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("taskBが正常に完了");
      resolve();
    }, 5000);
  });
}

function taskC() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("taskCが正常に完了");
      resolve();
    }, 3000);
  });
}

// 課題⑤

const parallelButton = document.getElementById("parallelButton");

parallelButton.addEventListener("click", () => {
  fetchAllData();
});

function taskA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("タスクA完了");
      resolve();
    }, 2000);
  });
}

function taskB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("タスクB完了");
      resolve();
    }, 5000);
  });
}

function taskC() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("タスクC完了");
      resolve();
    }, 3000);
  });
}

async function fetchAllData() {
  try {
    await Promise.all([taskA(), taskB(), taskC()]);

    console.log("すべてのタスクが完了しました！");
  } catch (error) {
    console.error("取得中エラー");
  }
}
