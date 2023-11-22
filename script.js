const btnAdd = document.getElementById("add-btn");
var items = [];
btnAdd.addEventListener("click", function () {
  const itemEnterd = document.getElementById("textbox").value;
  document.getElementById("textbox").value = "";
  if (itemEnterd == "") {
    alert("please enter task");
    return false;
  } else {
    items.push(itemEnterd);
    displayArray(itemEnterd);
  }
});

function displayArray(element) {
  const displayElements = document.getElementById("displayelements");
  const div = document.createElement("div");

  const li = document.createElement("li");
  li.style.border = "1px solid black";
  li.style.width = "200px";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.marginBottom = "5px";

  let button = document.createElement("button");
  let paragraph = document.createElement("p");

  paragraph.textContent = element;
  li.appendChild(paragraph);

  const text = document.createTextNode("Delete");
  button.appendChild(text);
  li.appendChild(button);

  div.appendChild(li);
  displayElements.appendChild(li);

  button.addEventListener("click", function () {
    li.remove();
  });
}
