console.log("Hello animals!");

// Maxence
var $monkey = document.getElementById("monkey")
$monkey.style.color = "chartreuse";
$monkey.innerHTML = $monkey.innerHTML + "!!"

// Mir
document.getElementsByTagName('li')[1].style.color = "blue";

// Noelia
document.getElementsByClassName('ta')[1].style.color = "yellow";

// Tor
document.querySelectorAll('ul .ta')[2].style.color = "purple";

var $tas = document.querySelectorAll('ul .ta')
for (var i = 0; i < $tas.length; i++) {
  $tas[i].style.backgroundColor = "orange"
}