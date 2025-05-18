function addItem() {
  var items = [
    "Oranges - $2.50",
    "Milk - $1.00",
    "Bread - $2.20",
    "Eggs - $3.50",
  ];
  var randomItem = items[Math.floor(Math.random() * items.length)];
  var ul = document.getElementById("grocery-list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(randomItem));
  ul.appendChild(li);
}
