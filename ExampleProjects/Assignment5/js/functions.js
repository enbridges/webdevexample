/* define your functions here */
//function outputCarRow will write each object created in the data.js
function outputCartRow(item, total) {
    document.write('<tr>'); //row
    document.write('<td class="painting"><img src="/ExampleProjects/Assignment5/images/' + item.product.filename + '"></td>'); // show image
    document.write('<td>' + item.product.title + '</td>'); // show name
    document.write('<td class="center">' + item.quantity + '</td>'); // show quantity
    document.write('<td class="right">$' + item.product.price.toFixed(2) + '</td>'); // show price
    document.write('<td class="right">$' + total.toFixed(2) + '</td>'); // show item total price
    document.write('</tr>');         
}

function calculateTotal(i) // calculate total for item
{
    let total = cart[i].product.price * cart[i].quantity;
    return total;
}

function calculateTax(subtotal, tax_rate) // calculate tax
{
    return subtotal * tax_rate;
    
}

/* CHANGE THE VALUES TO GET IT TO WORK!!! PUTTING IN PLAIN TO BEGIN!!!! */
function calculateShipping(subtotal, shipping) {
    if (subtotal > shipping) {
        return 0;
    }
    else {
        return 40;
    }
}


function calculateGrandTotal(shipping, tax, total) //calculate whole total
{
    return shipping + tax + total;
}

//This function will output the values into the fields subtotal, tax, shipping and grand total  
function output(num) {
    document.write("$" + num.toFixed(2));   
}





        
