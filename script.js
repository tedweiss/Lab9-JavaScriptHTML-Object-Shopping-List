// 1. Create several grocery item objects with properties of
// name and price.
// 2. Store the grocery item objects in an array.
// 3. Loop through the array and print out the name and price
// on a new line.
// 4. Total up the amount with a label ‘total’.

var grocery = [
	{
		name: "apples",
		price: 3.25
	},
	{
		name: "eggs",
		price: 4.15
	},
	{
		name: "bread",
		price: 2.55
	},
	{
		name: "milk",
		price: 3.67
	},
];

var total = 0;

grocery.forEach(function(el) {
	console.log(el.name + ": $" + el.price);
	total += el.price;
	var item = document.createElement("li");
	item.innerHTML = (el.name + ": $" + el.price);
	document.getElementById("list").appendChild(item);
});


console.log("Total Price: $" + total);

var grandTotal = document.createElement("h1");
	grandTotal.innerHTML = "Grand Total: $" + total;
	document.body.appendChild(grandTotal);




function addItem() {
	var item = document.getElementById("item").value;
	var price = document.getElementById("price").value;
	var newEl = document.createElement("li");
	newEl.innerHTML = item + ": $" + price;
	document.getElementById("list").appendChild(newEl);
	resetForm(myForm);
	updateTotal(price);
}

function resetForm(){
	document.forms["myForm"].reset();
}

function updateTotal(price) {
	total += parseFloat(price);
	grandTotal.innerHTML = "The total is $" + (total.toFixed(2));
}

var add = document.getElementById("add");
add.addEventListener("click", addItem, false);
