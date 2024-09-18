

var weight = 60;
var height = 5.7;
height = height * 0.3048;
var bmi = weight / (height * height);

console.log(bmi.toFixed(2));
if( bmi < 18.5){
    console.log("you are underweight.");
} else {
    if(bmi >= 18.5 && bmi <= 24.5){
        console.log("you are normal.");
    } else {
        if(bmi >= 25 && bmi <= 29.9){
            console.log("you are overweight.");
        } else {
            console.log("you are obese.");
        }
    }
}