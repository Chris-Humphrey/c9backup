var faker = require("faker");
var shop = "Welcome To My Shop!";
var lines = "~~~~~~~~~~~~~~~~~~~~";

// Shop banner
console.log(lines);
console.log(shop.toUpperCase());
console.log(lines);

for(var i = 0; i < 10; i++) {
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}