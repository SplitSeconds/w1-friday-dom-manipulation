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

// Silvio
var $li = document.createElement('li')
$li.innerText = "Silvio the Snake"
document.querySelector('ul').appendChild($li)
$li.style.color = "green"

var $tas = document.querySelectorAll('ul .ta')
for (var i = 0; i < $tas.length; i++) {
  $tas[i].style.backgroundColor = "orange"
}

// Changing the HREF tag
var $link = document.getElementsByTagName('a')[0]
$link.setAttribute('href', 'https://www.google.de/search?q=monkey&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiHt-jskoHeAhWPKlAKHQ05C7YQ_AUIDigB&biw=447&bih=572&dpr=1.75')
$link.setAttribute('target', 'blank')

// Button
var $button = document.getElementById('add-animal')
$button.onclick = function() {
  console.log("You clicked on the button!!")
}