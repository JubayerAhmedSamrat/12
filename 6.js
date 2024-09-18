

var age = 82;
var student = true;
var ticketFare = 800;
var discount;
var finalPrice;

if(age < 10) {
    console.log("free ticket");
} else {
    if(student){
        discount = ticketFare * 0.5;
        finalPrice = ticketFare - discount;
        console.log("you are a student. pay: " + finalPrice + "tk");
    } else{
        if(age >= 60){
            discount = ticketFare * 0.15;
            finalPrice = ticketFare - discount;
            console.log("you are a senior citizen. pay: " + finalPrice + "tk");
        } else{
            console.log("For regular ticket. pay: " + ticketFare + "tk");
        }
    }
}