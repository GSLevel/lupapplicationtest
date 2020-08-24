var button = document.getElementById('menuBtn');
var closebutton = document.getElementById('closeMenuBtn');
var links = document.getElementById('links');

function menuBtn() {
     links.style.display = "unset";
     closebutton.style.display = "unset";
     button.style.display = "none";
}

function closeBtn() {
    links.style.display = "none";
    closebutton.style.display = "none";
    button.style.display = "unset";
}


button.onclick = menuBtn;
closebutton.onclick = closeBtn;
