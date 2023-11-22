const btnAdd = document.getElementById("add-btn");
var items = [];
btnAdd.addEventListener("click", function () {
  const itemEnterd = document.getElementById("textbox").value;
  items.push(itemEnterd);
  displayArray(itemEnterd);
  document.getElementById("textbox").value = "";
});

function displayArray(element) {
  const displayElements = document.getElementById("displayelements");
  const div = document.createElement("div");

  const li = document.createElement("li");

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
