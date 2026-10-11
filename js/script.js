const textField = document.getElementById("textField");
const addTask = document.getElementById("addTask");
const todoList = document.getElementById("todoList");

function handleAddTask() {
  const todo = textField.value;
  if (todo !== "") {
    const newList = document.createElement("li");
    const newInput = document.createElement("input");
    newInput.type = "checkbox";
    const newSpan = document.createElement("span");
    newSpan.textContent = todo;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";

    todoList.appendChild(newList);
    newList.appendChild(newInput);
    newList.appendChild(newSpan);
    newList.appendChild(deleteButton);

    newInput.classList.add("displayformat");
    newSpan.classList.add("displayformat");
    deleteButton.classList.add("displayformat");

    textField.value = "";

    deleteButton.addEventListener("click", function (event) {
      const newListToRemove = event.target.parentNode;
      newListToRemove.parentNode.removeChild(newListToRemove);
    });

    newInput.addEventListener("click", function () {
      if (newInput.checked === true) {
        newSpan.classList.add("check");
      } else {
        newSpan.classList.remove("check");
      }
    });
  }
}

addTask.addEventListener("click", function () {
  handleAddTask();
});

textField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleAddTask();
  }
});
