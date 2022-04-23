///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function(acc, curr ){
    
}
)





//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax){
    return ((tax + 1) * cartTotal) -= couponValue
}



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Costumer:
    customer name: this is one of the most important properties because the resturaunt needs to be able to indentify which customer is which. the data type should be a string because we want an actually name to put in for the value.
    order number: this should be another property because the resturaunt is going to want to be able to access the individuals order from there name. you dont want to have to remember what Bob ordered if he calls back with a problem with his order. the data type for this should be a number becuase the easiest way to track the orders throughout the day is numerically.
    phone number: this should also be a property because the resturant will be able to know returning customers from their stored data, as well as being able to contact customers if they end up needing to relay something to them. the data type should be numbers because the expected value will be a phone number which is obviously numbers.
    payment method: this could also be a useful property to have because cash and card payments will proccess differently it could help if there are any shortages of problems at the end of the day to be able to go back and account for each transaction and see weather it was cash or card. the data type for this should be a string because we would want to see the actual word 'card' or 'cash' to differentiate between the two

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: 'Addy',
    order: 56,
    phone: 5554442222,
    payment: 'cash'
}
