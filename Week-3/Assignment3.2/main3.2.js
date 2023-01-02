//.call Function
//
console.log("\n \n\n Example of .call Function\n\n\n")
function printaddress(){
    var address = [
        this.hno,
        '\nStreet- ',
        this.street,
        '\nCity- ',
        this.city
    ].join('');
    console.log(address);
}

var amaanadd = {
    hno: '34', street: 'Gautama Budha Road', city: 'Lucknow'
}
printaddress.call(amaanadd); //calling printaddress function with a separate object

//
//
//
//
//
//.bind Function
//
console.log("\n \n\n Example of .bind Function\n\n\n")

function product(a,b){
    return this.a * this.b;
}

const productB = product.bind({a: 40, b: 30}); // Binding a and b as an object to the 'this' object

console.log(productB());

//
//
//
//
//.apply Function
//
console.log("\n \n\n Example of .apply Function\n\n\n")
var arrayofnumbers = [9,8,5,4,2,10,7,6,];

var max = Math.max.apply(null, arrayofnumbers); // Calling Math.max while passing an array using .apply
console.log('Largest No. - ', max);