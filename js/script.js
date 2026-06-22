const changeButton = document.querySelector("#changeButton");

changeButton.addEventListener("click", function () {
  const selfIntroduction = document.querySelector("h1");
  selfIntroduction.style.backgroundColor = "red";
  // ・h1の背景を赤にする

  const allHeader = document.querySelectorAll(".hello");
  for (let i = 0; i < allHeader.length; i++) {
    allHeader[i].style.color = "blue";
  }
  // ・クラス:helloがついたh2とh3の文字色を青にする

  const myName = document.getElementById("name");
  myName.textContent = "苗字は田中です。";
  // ・「私の名前は太郎です。」→「苗字は田中です。」に変更

  const hobbyLists = document.querySelectorAll("li");
  for (let i = 0; i < hobbyLists.length; i++) {
    hobbyLists[i].classList.add("list");
  }
  // ・li要素全てに「list」クラスを追加し、ポップアニメーション適用する
});

// -------------------------------------------
// シンプルなカウンターを作る
// ・↑のindex.htmlの続きに書くこと(</ul>の下でOK)
//   ・以下の要素を実装すること
//   	・現在の数は● : 現在のカウント数を表示する
//   	・「増やす (+1)」ボタン: クリックすると現在の数が+1される
//   	・「減らす (-1)」ボタン: クリックすると現在の数が-1される
//   	・「リセット」ボタン: クリックすると現在の数が0になる
//   ・デザインは自由に実装してOKです

const counterText = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

let count = 0;

incrementButton.addEventListener("click", function () {
  count = count + 1;
  counterText.textContent = count;
  if (count === 0) {
    incrementButton.style.backgroundColor = "";
    counterText.style.color = "";
  } else if (count > 0) {
    incrementButton.style.backgroundColor = "red";
    decrementButton.style.backgroundColor = "";
    counterText.style.color = "red";
  } else {
    incrementButton.style.backgroundColor = "red";
    decrementButton.style.backgroundColor = "";
  }
});

decrementButton.addEventListener("click", function () {
  count = count - 1;
  counterText.textContent = count;
  if (count === 0) {
    decrementButton.style.backgroundColor = "";
    counterText.style.color = "";
  } else if (count < 0) {
    decrementButton.style.backgroundColor = "blue";
    incrementButton.style.backgroundColor = "";
    counterText.style.color = "blue";
  } else {
    incrementButton.style.backgroundColor = "";
    decrementButton.style.backgroundColor = "blue";
  }
});

resetButton.addEventListener("click", function () {
  count = 0;
  counterText.textContent = count;
  incrementButton.style.backgroundColor = "";
  decrementButton.style.backgroundColor = "";
  counterText.style.color = "";
});
