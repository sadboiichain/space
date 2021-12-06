
 //function to start and control the countdown
 function countDown() {
    var currTime = 10;
//    start the timer
    for (var i = 1; i <= 11; i++) {
        //complete
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {//half
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "WARNING, LESS THAN HALF TIME REMAINING! Time Remaining:  " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {//start
            setTimeout(function () {
                alert("started");
                document.getElementById("countdownTimer").innerHTML = "Time Remaining: " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}

function Check(){
var name = document.getElementById("Name").value;
var badge = document.getElementById("Badge").value;
if(name.length>20){
    document.getElementById("error").innerHTML = "Name is too long. Please try again.";
}else if(badge>=1000){
    document.getElementById("error").innerHTML = "Badge number is incorrect. Please try again.";
}else{
    document.getElementById("error").innerHTML = "";
    alert("Log in successful. Please continue");
}

}





// craps
function craps() {
//variables to set up the dice
var die1 = Math.ceil( Math.random()*6);
var die2 = Math.ceil( Math.random()*6);
var sum = die1+die2;


//presenting to the user

//die 1
document.getElementById("die1Result").innerHTML = "Die 1: "+ die1;
//die 2
document.getElementById("die2Result").innerHTML = "Die 2: "+ die2;
//sum
document.getElementById("sumResult").innerHTML = "The sum of the dice is: " + sum;


//Loss
if(sum == 7 || sum ==11){
    money == 0;
    document.getElementById("conclusion").innerHTML = "CRAPS - You Lose! <br/> Try Again?";
}else if(die1 == die2 && die1%die2 == 0){//Win 
    document.getElementById("conclusion").innerHTML = "DOUBLES - You Win! <br/> Try for more?";
}else{//Continue
    document.getElementById("conclusion").innerHTML = "Nothing gained, nothing lost. <br/> Try again?";
}

}

// higher or lower
{
function high(){
    var d1 = Math.ceil( Math.random()*20 );
    var p1 = Math.ceil( Math.random()*20 );


    document.getElementById("dealer").innerHTML = "Dealer: "+ d1 ;
    document.getElementById("player").innerHTML = "Player: "+ p1 ;

    if (d1 < p1){
        document.getElementById("concHi").innerHTML = "You Win! <br/> Try for more?";
    }else if (d1 > p1){
        document.getElementById("concHi").innerHTML = "You Lose! <br/> Try again?";
    }else{
        document.getElementById("concHi").innerHTML = "Nothing gained, Nothing lost. <br/> Try again?";
    }

}

function low(){
    var d1 = Math.ceil( Math.random()*20 );
    var p1 = Math.ceil( Math.random()*20 );


    document.getElementById("dealer").innerHTML = "Dealer: "+ d1 ;
    document.getElementById("player").innerHTML = "Player: "+ p1 ;

    if (d1 > p1){
        document.getElementById("concHi").innerHTML = "You Win! <br/> Try for more?";
    }else if (d1 < p1){
        document.getElementById("concHi").innerHTML = "You Lose! <br/> Try again?";
    }else{
        document.getElementById("concHi").innerHTML = "Nothing gained, Nothing lost. <br/> Try again?";
    }

}

function even(){
    var d1 = Math.ceil( Math.random()*20 );
    var p1 = Math.ceil( Math.random()*20 );


    document.getElementById("dealer").innerHTML = "Dealer: "+ d1 ;
    document.getElementById("player").innerHTML = "Player: "+ p1 ;

    if (d1 == p1){
        document.getElementById("concHi").innerHTML = "You Win! <br/> Try for more?";
    }else{
        document.getElementById("concHi").innerHTML = "You Lose! <br/> Try again?";
    }

}
}

//Coin Toss
{
function heads(){
    //to flip the coin
    var coin = Math.ceil(Math.random()*20);

    //the results
    if(coin <= 10){
        document.getElementById("coin").innerHTML = "Heads: You Win! <br/> Try for more?";
    }else{
        document.getElementById("coin").innerHTML = "Tails: You Lose! <br/> Try Again?";
    }
}

function tails(){
    //to flip a coin
    var coin = Math.ceil(Math.random()*20);

    //The results
    if(coin >= 10){
        document.getElementById("coin").innerHTML = "Tails: You Win! <br/> Try for more?";
    }else{
        document.getElementById("coin").innerHTML = "Heads: You Lose! <br/> Try Again?";
    }
}
}
