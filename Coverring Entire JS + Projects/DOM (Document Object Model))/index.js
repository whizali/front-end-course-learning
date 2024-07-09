// ------Selecting HTML Elements
document.getElementsByTagName("li")[2].style.fontSize = '200px';

document.getElementsByClassName("btn")[0].style.color="red";

document.getElementById("title").innerHTML = "he";

document.querySelector("body ul li a").style.color ="violet"; 

// ------Manipulating HTML Elements

document.querySelector("button").style.backgroundColor = "blue"

// ------Manipulating Text and HTML

document.querySelector("h1").innerHTML = "<em>Goodbye</em>";
// by above html can be added also

document.querySelector("h1").textContent = "Goodbye";
// only text can be added.


// ------Manipulating Attributes 
document.querySelector("h1").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "www.bing.com");