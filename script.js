const btnAdd = document.getElementById("add-btn");
// const toDo = document.getElementById("to-do-list");

var items = [];
btnAdd.addEventListener("click", function () {
  const date = document.getElementById("date").value;
  const itemEnterd = document.getElementById("textbox").value;
  document.getElementById("textbox").value = "";
  if (itemEnterd == "") {
    alert("please enter task");
    return false;
  } else {
    items.push({ task: itemEnterd, date, id: new Date() });
    displayArray();
    Array.from(items)
    console.log(items);

  }
});

function displayArray() {
  const displayElements = document.getElementById("displayelements");
  items.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    const li = document.createElement("li");
    li.style.border = "1px solid black";
    li.style.width = "300px";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.marginBottom = "5px";
    li.style.padding = "5px";

    let button = document.createElement("button");
    let paragraph = document.createElement("p");
    let dateBox = document.createElement("date");
    let completeButton = document.createElement("button");

    paragraph.textContent = element;
    li.appendChild(paragraph);

    dateBox.textContent = date.value;
    li.appendChild(dateBox);

    const del = document.createTextNode("Delete");
    button.appendChild(del);
    li.appendChild(button);

    const complete = document.createTextNode("Complete");
    completeButton.appendChild(complete);
    li.appendChild(completeButton);

    div.appendChild(li);
    displayElements.appendChild(li);

    button.addEventListener("click", function () {
      li.remove();
    });
  });
}

// -----------------------------------------------------------

// let arr = ["s", "b", "f", "t", "q", "h", "l"];
// console.log(arr);
// console.log(arr.slice(2, 5));

// console.log(arr.splice(2, 3));
