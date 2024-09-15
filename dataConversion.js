// Convert a String into a Number
let price = "200";

price = parseInt(price); // Using parseInt() method
console.log(price);
console.log(typeof price);

price = Number(price) // Using Number() method
console.log(price)
console.log(typeof price);

price = + (price); // Using + Operator method
console.log(price);
console.log(typeof price);

// Convert a Number to a String
let distance = "150";

distance = distance.toString(); // Using toString() method
console.log(distance);
console.log(typeof distance);

distance = String(distance); // Using String() method
console.log(distance);
console.log(typeof distance);

// Convert a String into a Decimal Number
let weight = "72.5";
weight = parseFloat(weight);
console.log(weight);
console.log(typeof weight);