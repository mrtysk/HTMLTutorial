const textField = document.getElementById("textField");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const typeText = textField.value;
  if (typeText === "") {
    return;
  } else {
    const newList = document.createElement("li");
    const typeText2 = document.createTextNode(typeText);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";

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

    newList.appendChild(checkbox);
    newList.appendChild(typeText2);
    newList.appendChild(deleteButton);
    taskList.appendChild(newList);

    textField.value = "";
  }
}

addButton.addEventListener("click", addTask);
textField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
