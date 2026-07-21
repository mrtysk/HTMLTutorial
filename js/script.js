const textField = document.getElementById("textField");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = textField.value;
  if (taskText === "") {
    return;
  }

  const newList = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newList.appendChild(checkbox);

  const textSpan = document.createElement("span");
  const newTaskNode = document.createTextNode(taskText);
  textSpan.appendChild(newTaskNode);
  newList.appendChild(textSpan);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  newList.appendChild(deleteButton);

  taskList.appendChild(newList);

  textField.value = "";

  deleteButton.addEventListener("click", function () {
    const remove = newList.parentNode;
    remove.removeChild(newList);
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      newList.classList.add("check");
    } else {
      newList.classList.remove("check");
    }
  });
}

addButton.addEventListener("click", addTask);
textField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
