const btnAdd = document.getElementById("add-btn");
var items = [];
btnAdd.addEventListener("click", function () {
  const itemEnterd = document.getElementById("textbox").value;
  items.push({ value: itemEnterd, id: new Date().getTime() });
  console.log(itemEnterd);
  displayArray(itemEnterd);
});

function displayArray(element) {
  const displayElements = document.getElementById("displayelements");
  const li = document.createElement("li");
  // li.style.display = "inline";

  let button = document.createElement("button");
  let paragraph = document.createElement("p");

  paragraph.textContent = element;
  li.appendChild(paragraph);

  let text = document.createTextNode("Delete");
  button.appendChild(text);
  li.appendChild(button);
  displayElements.appendChild(li);

  button.addEventListener("click", function () {
    li.remove();
  });
}
