// 課題１(表記上は2)

const changeButton = document.getElementById("changeButton");
const liList = document.querySelectorAll("li");
const nameEl = document.getElementById("name");
const helloList = document.querySelectorAll(".hello");
const h1El = document.querySelector("h1");

changeButton.addEventListener("click", function () {
  for (let li = 0; li < liList.length; li++) {
    liList[li].classList.add("list");
  }

  nameEl.textContent = "苗字は田中です。";

  for (let el = 0; el < helloList.length; el++) {
    helloList[el].style.color = "blue";
  }

  h1El.style.backgroundColor = "red";
});

// 課題２(表記上は3)

const displayCount = document.getElementById("displayCount");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");

let count = 0;

increaseButton.addEventListener("click", function () {
  count = count + 1;
  displayCount.textContent = count;
});

decreaseButton.addEventListener("click", function () {
  count = count - 1;
  displayCount.textContent = count;
});

resetButton.addEventListener("click", function () {
  count = 0;
  displayCount.textContent = count;
});
