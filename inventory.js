
{
const inventory = 
[
{ name: "laptop", price: 500, quantity: 10, lowStockLevel: 5},
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
// Create displayProductDetails function
var inventory = [
{ name: "laptop", price: 500, quantity: 10, lowStockLevel: 5},
{ name: "mouse", price: 70, quantity: 30, lowStockLevel: 5},
{ name: "keyboard", price: 100, quantity: 25, lowStockLevel: 5,},
{ name: "monitor", price: 250, quantity: 20, lowStockLevel: 5},
{ name: "speaker", price: 150, quantity: 20, lowStockLevel: 5}
];
function updateStock(product, unitsSold){
    product.quantity = product.quantity - unitsSold;
    var stockStatus;
    if (product.quantity <= 0);{
        stockStatus = "out of stock";
    }
     if(product.quantity <= product.lowStockLevel){
        stockStatus = "low stock";
    } else {
        stockStatus = "in stock";
    }
    console.log('Product:' + product.name);
    console.log('quantity left:' + product.quantity);
    console.log('stock status:' + stockStatus);

// create updatedStock function

function checkLowStock () {
    inventory.forEach(function(product){
        if (product.quantity < product.lowStockLevel) {
            console.log(product.name + 'is low in stock.');
        }
    });

//"Create checkLowStock function"

function calculateInventoryValue () {
    var totalValue = invintory.reduce((price * quantity));
    console.log('total inventory:', totalValue);
    
}
// Create calculateInventoryValue function

function processSale () {

}
// i ran out of time :( [idk why the curly bracket is red... help]
}
