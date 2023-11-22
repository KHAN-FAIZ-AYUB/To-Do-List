const btnAdd = document.getElementById("add-btn");
var items = [];
btnAdd.addEventListener("click", function () {
  const date = document.getElementById("date").value;
  const itemEnterd = document.getElementById("textbox").value;
  document.getElementById("textbox").value = "";
  if (itemEnterd == "") {
    alert("please enter task");
    return false;
  } else {
    items.push(itemEnterd, date);
    displayArray(itemEnterd, date);
  }
  // console.log(date);
});

function displayArray(element) {
  const displayElements = document.getElementById("displayelements");
  const div = document.createElement("div");

  const li = document.createElement("li");
  li.style.border = "1px solid black";
  li.style.width = "250px";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "center";
  li.style.marginBottom = "5px";

  let button = document.createElement("button");
  let paragraph = document.createElement("p");
  let dateBox = document.createElement("date");

  paragraph.textContent = element;
  li.appendChild(paragraph);

  dateBox.textContent = date.value;
  li.appendChild(dateBox);

  const text = document.createTextNode("Delete");
  button.appendChild(text);
  li.appendChild(button);

  div.appendChild(li);
  displayElements.appendChild(li);

  button.addEventListener("click", function () {
    li.remove();
  });
}
