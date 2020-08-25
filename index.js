var button = document.getElementById('menuBtn');
var closebutton = document.getElementById('closeMenuBtn');
var links = document.getElementById('links');
var reqs = document.getElementById('reqs');
var everything = document.getElementById('everything');
var ign = document.getElementById('ignInput');
var tag = document.getElementById('tagInput');
var shot = document.getElementById('shotInput');
var checkBtn = document.getElementById('check');
var submit = document.querySelector('.submit');

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
    document.cookie = "read=true";
    everything.style.display = "unset";
    reqs.style.display = "none"
}

if(document.cookie == "read=true") {
    everything.style.display = "unset";
    reqs.style.display = "none";
}

function check(e) {
    e.preventDefault()
   if(ign.value.trim() == "") {
      checkBtn.innerHTML = "type in your ign";
      setTimeout(function() {
          checkBtn.innerHTML = "Check";
      }, 2000);
   } else if(tag.value.trim() == "") {
      checkBtn.innerHTML = "type in your discord tag";
      setTimeout(function() {
        checkBtn.innerHTML = "Check";
    }, 2000);
   } else if(shot.value.trim() == "") {
      checkBtn.innerHTML = "type in the screenshot url of your stats";
      setTimeout(function() {
        checkBtn.innerHTML = "Check";
    }, 2000);
   } else {
       checkBtn.style.display = "none";
       submit.style.display = "unset";
   }

}

reqs.addEventListener("click", reqBtnClicked);
button.onclick = menuBtn;
closebutton.onclick = closeBtn;
checkBtn.onclick = check;
