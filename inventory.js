{

const inventory = 
[
{ name: "laptop", price: 500, quantity: 10, lowStockLevel: 3},
{ name: "mouse", price: 70, quantity: 30, lowStockLevel: 5},
{ name: "keyboard", price: 100, quantity: 25, lowStockLevel: 5,},
{ name: "monitor", price: 250, quantity: 20, lowStockLevel: 5},
{ name: "speaker", price: 150, quantity: 20, lowStockLevel: 5}
]
// initalize inventory with product objects
}
{
    function displayProuctDetails(product) {
    const { name, price, quantity, lowStockLevel } = product;
    let stockStatus;
    if (quantity <= lowStockLevel)
        {stockStatus = "low stock";}
    else {stockStatus = "in stock";}
    console.log(`Name: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`Quantity in stock ${quantity}`);
    console.log(`Stock Status: ${stockStatus}`);
}
}
displayProuctDetails(inventory[0]);

var inventory = [
{ name: "laptop", price: 500, quantity: 10, lowStockLevel: 3},
{ name: "mouse", price: 70, quantity: 30, lowStockLevel: 5},
{ name: "keyboard", price: 100, quantity: 25, lowStockLevel: 5,},
{ name: "monitor", price: 250, quantity: 20, lowStockLevel: 5},
{ name: "speaker", price: 150, quantity: 20, lowStockLevel: 5}
]