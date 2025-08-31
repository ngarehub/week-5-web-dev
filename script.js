/***************************************
 * Part 1: JavaScript Basics
 ***************************************/
let userName = "Eugine"; 
let userAge = 25;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is not an adult.");
}


/***************************************
 * Part 2: Functions
 ***************************************/
function greetUser(name) {
  return "👋 Hello, " + (name ? name : "stranger") + "!";
}

function calculateTotal(price, quantity) {
  return price * quantity;
}


/***************************************
 * Part 3: Loops
 ***************************************/
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}


/***************************************
 * Part 4: DOM Manipulation with Live Input
 ***************************************/
// Live greeting
document.getElementById("nameInput").addEventListener("input", function() {
  let name = this.value;
  document.getElementById("greetingOutput").innerText = greetUser(name);
});

// Live calculator
document.getElementById("priceInput").addEventListener("input", updateTotal);
document.getElementById("qtyInput").addEventListener("input", updateTotal);

function updateTotal() {
  let price = parseFloat(document.getElementById("priceInput").value) || 0;
  let qty = parseInt(document.getElementById("qtyInput").value) || 0;
  let total = calculateTotal(price, qty);
  document.getElementById("totalOutput").innerText = "💰 Total: " + total;
}

// Generate list dynamically with a button
document.getElementById("listBtn").addEventListener("click", function() {
  let numbers = [1, 2, 3, 4, 5];
  let listHtml = "<ul>";
  numbers.forEach(num => {
    listHtml += `<li>Number: ${num}</li>`;
  });
  listHtml += "</ul>";
  document.getElementById("listOutput").innerHTML = listHtml;
});
