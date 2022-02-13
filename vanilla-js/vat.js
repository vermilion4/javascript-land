//GET PRICE FROM USER
var price = prompt("Enter Raw Price: ")
//CONVERT PRICE TO NUMBER
price = parseInt(price)
//CONVERT 20.6% TO DECIMAL
var vat = (20.6/100);

//CALCULATE FINAL PRICE BY ADDING VAT TO ORIGINAL PRICE
var finalPrice = (price * vat) + price;

//OUTPUT ORIGINAL AND FINAL PRICE
console.log("Raw Price: ", price)
console.log("Final Price: ", finalPrice.toFixed(1))