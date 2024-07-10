// Javascript Objects

var bellBoy1 = {
    name: "timmy",
    age: 19,
    hasWorkPermit: 0,
    languages: ["English", "French"],
    moveSuitcase: function(){
        alert("may i take your suitcase?");
        pickUpSuitcase();
        move();
    }
}
console.log(bellBoy1.age);
bellBoy1.moveSuitcase();

// Constructor Function
function BellBoy(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function(){
        alert("may i take your suitcase?");
        pickUpSuitcase();
        move();
    }
}
// creating instances of objects
var BellBoy1 = new BellBoy(Harry, 12, true, ["french", "english"]);



function HouseKeeper(){
    this.yearsOfExperience;
    this.name;
    this.cleaningRepertoire;
}

var HouseKeeper1 = new HouseKeeper(4, "Tom", ["Lobby", "bedroom, kitchen"]);
