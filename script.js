const btnAdd = document.getElementById("add-btn");
var items = [];
btnAdd.addEventListener("click", function () {
  const itemEnterd = document.getElementById("textbox").value;
  items.push(itemEnterd);
  console.log(itemEnterd);
  displayArray(itemEnterd);
});

function displayArray(element) {
  const displayElements = document.getElementById("displayelements");

  let paragraph = document.createElement("p");
  paragraph.textContent = element;
  displayElements.appendChild(paragraph);
}
