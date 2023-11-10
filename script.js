const btnAdd = document.getElementById("add-btn");
var items = [];
btnAdd.addEventListener("click", function () {
  const itemEnterd = document.getElementById("textbox").value;
  items.push(itemEnterd);
  console.log(itemEnterd);
});

function displayArray() {
  const displayElements = document.getElementById("displayelements");

  displayElements.innerHTML = "";

  items.forEach(function (e) {
      let paragraph = document.createElement("p");
      paragraph.textContent = e;
      displayElements.appendChild(paragraph);
    });
}
displayArray();
