// console.log("Hello");

// var myName = 'Ali';
// console.log("my name is " + myName);

// var myName = 'Ali';
// var yourName = prompt("what is your name?");
// console.log('hello' + yourName + ' from ' + myName );


// var a = 8;
// var b = 9;

// var c = a;
// var a = b;
// var b = c;

// --------

// var myName='ali';
// console.log(myName.length);

// --------

// var tweet = prompt("compose your tweet: ");
// var tweetCOunt = tweet.length;
// var max = 50;
// console.log("you have written" + tweetCOunt + "characters, you have " + (max - tweetCOunt) +'characters left');

// ---slice function--
// var name = 'lorem4523';
// // var num = name.slice(3,7);
// console.log(name.slice(5,7));

// --------------
// var tweet = prompt("compose your tweet: ");
// var tweetCOunt = tweet.length;
// var max = 280;
// console.log("you have written" + tweetCOunt + "characters, you have " + (max - tweetCOunt) +'characters left');

// console.log(tweet.slice(0, 280));

// -----------
// var name = 'ali';
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());


// ---------
// var name = prompt("what is your name");

// console.log("hello and welcome " + name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase()) ;


// ------------

// var x = 45;
// var y = ++x; // 46 pre increment -- incremenets value before assigning
// var y = x++; // 45 ++ post incremement,
// console.log(y);

// ----------

// Functions

// function bodyMassIndex(weight, height){
//     var bmi;
//     bmi = weight/(Math.pow(height,2));
//     return bmi;
// }

// console.log(bodyMassIndex(21,1));


// Math.floor();
// Math.round();
// Math.pow();
// Math.random(); [0-0.99999999]

prompt("what is your name: ?");
prompt("what is their name: ?");

var score = Math.random(score) * 100;
console.log(score);

// ----------comparators. 
// === equal to
// !== not equal to 

// ---leap year
// function isLeapYear(inputYear) {
//     if ((inputYear % 400 === 0) || (inputYear % 4 === 0 && inputYear % 100 !== 0)) {
//         console.log("is a leap year");
//     } else {
//         console.log("not a leap year");
//     }
// }



// -- searching for a variable in array
// var guestList = ["Hello", "Hi", "Bye", "goodbye"];
// var guestName = prompt("Enter Your Name: ");

// if(guestList.includes(guestName)){
//     console.log("welcome")
// }
// else{
//     console.log("not welcome")
// }

// -- who's going to buy lunch today ? program 

// var friends = ["Ali", "Hassan", "Usman", "Raheel"];

// function whoIsPaying(friends){
// var totalFriends = friends.length;
// var randomNumber = Math.floor((Math.random() * totalFriends));

// console.log(friends[randomNumber] + 'is going to pay the bill today') ;

// }


// --- juice lyrics while loooop

// function lyrics (){
//     iv = 98;
//     ivdec = iv;
//     fv = 1
    
//     while(iv>=fv){
//     console.log( iv + " bottles of apple juice on the wall, " + iv + "bottles of apple juice. Take one down and pass it around, " + (iv-fv) + "bottles of apple juice on the wall.")
//     iv--;
// }
// }
// lyrics();

// ----
// while vs for loop 
// while focuses on the truth state of the conditiononly. 
// for loop focuses on the iteration/repetition only

// ---------
// fibbonaci sequence generator program.

function fibGen(upto){
    var fibSeq = [0,1];

    for(var i = 2; i < upto; i++){
        var nextNum = fibSeq[i-1] + fibSeq[i-2];
        fibSeq.push(nextNum);}

        output(fibSeq);
}

function output(fibSeq){
for(var i =0; i <fibSeq.length;i++){
    console.log(fibSeq[i]);
}}

fibGen(10)