var button = document.getElementById('menuBtn');
var closebutton = document.getElementById('closeMenuBtn');
var links = document.getElementById('links');
var reqs = document.getElementById('reqs');
var everything = document.getElementById('everything');
var reqCookie = document.cookie = "read=false"

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

function reqBtnClicked() {
    reqCookie = document.cookie = "read=true";
    everything.style.display = "unset";
    reqs.style.display = "none"
}

if(reqCookie == document.cookie == "read=true") {
    everything.style.display = "unset";
    reqs.style.display = "none"
}

reqs.addEventListener("click", reqBtnClicked);
button.onclick = menuBtn;
closebutton.onclick = closeBtn;
