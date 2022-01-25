console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Kevin Cuesta" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

/** 
 * get quantity 
 * if plus button clicked , increment quantity
 * if negative button clicked, subtract quantity and check that quantity is not less than 0
 */

const credit = document.querySelector('#credit')
const gbPlusBtn = document.querySelector('#add-gb')
let positivegbBtn = document.getElementById('quantity-up');
gbPlusBtn.addEventListener('click', function() {
    quantity = quantity +1;
    quantityContainer.textContent = `Quantity: ${quantity}`;
});

let negativegbBtn = document.addEventListener('quantity-down');
negativegbBtn.addEventListener('click', function(){
    if(quantity > 0) {
        quantity = quantity - 1;
    }
    quantityContainer.textContent = `Quantity: ${quantity}`;
});
console.log('Gingerbread + button was clicked!')

const ccPlusBtn = document.querySelector('#add-cc')
let positiveccBtn = document.getElementById('quantity-up');
ccPlusBtn.addEventListener('click', function() {
    quantity = quantity +1;
    quantityContainer.textContent = `Quantity: ${quantity}`;
});
let negativeccBtn = document.getElementById('quantity-down');
negativeccBtn.addEventListener('click', function(){
    if(quantity > 0) {
        quantity = quantity - 1;
    }
    quantityContainer.textContent = `Quantity: ${quantity}`;
});
console.log('Chocolate + button was clicked!')

const credit = document.querySelector('#credit')
const sugarPlusBtn = document.querySelector(#add-sugar)
let positivesugarBtn = document.getElementById('quantity-up');
sugarPlusBtn.addEventListener('click', function(){
    quantity = quantity +1;
    quantityContainer.textContent = `Quantity: ${quantity}`;
});

let negativesugarBtn = document.getElementById('quantity-down');
negativesugarBtn.addEventListener('click', function(){
    if(quantity > 0) {
        quantity = quantity - 1;
    }
    quantityContainer.textContent = `Quantity: ${quantity}`;
});
console.log('Sugar + button was clicked')


