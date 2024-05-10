
//Alerts to prompt the user to enter the Tax Rate and the Shipping cost
const tax_rate = prompt('Enter your local Tax Rate');
const shipping_threshold = prompt('Enter the shipping threshold to recieve free shipping');

/* running total for subtotals */
let subtotal = 0;

/* for loop for each item in the cart */
for (let i = 0; i < cart.length; i++)
{
    let amount = calculateTotal(i);
    subtotal += amount; 
    outputCartRow(cart[i], amount);
}
const sub = subtotal;
const tax= calculateTax(subtotal, tax_rate);
const shipping = calculateShipping(subtotal, shipping_threshold);
const grand = calculateGrandTotal(shipping, tax, subtotal)

/* Once the loop is done, pass the values to functions */