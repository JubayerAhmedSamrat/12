

var myScore = 80;
var frndScore =60;

if (myScore >= 80){
    console.log("inside friends score");
} else {
    if (myScore < 80){
        console.log("i'm so sad. i am sleeping");
    }
}

if (frndScore > 80){
    console.log("let's go lunch");
} else {
    if(frndScore < 80 && frndScore >= 60){
        console.log("good luck next time");
    } else {
        if( frndScore < 60 && frndScore >= 40){
            console.log("friends message unseen");
        }else{
            if( frndScore < 40){
                console.log("blocked friend");
            }
        }
    }
}