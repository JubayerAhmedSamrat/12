var price = 5000;
var age = 30;

// if(price >= 5000){
//     // 10% discount
//     var discount = price*10/100;
//     var ammountAfterDiscount = price - discount;
//     console.log(ammountAfterDiscount);
// }

if( age <= 20) {
    console.log("he/she will eat for free");
} else if( age >= 60 ){
    // 25% discount
    var discount = price * 0.25;
    var discountAfter = price - discount;
    console.log(discountAfter);
} else if (age >= 40 && age < 60) {
    // 10% discount
    var discount = price * 0.1;
    var discountAfter = price - discount;
    console.log(discountAfter);
} else if ( age >= 30 && age <40){
    // 5% discount
    var discount = price * .05;
    var discountAfter = price - discount;
    console.log(discountAfter);
} else {
    console.log(price);
}