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
var sentMsg = document.getElementById('sentMsg');

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

function sendWebhook() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/749139816066580517/gS5qIfEt0GlSGl9exY41AO_DMB927tWxciHUsHiIDvIB1GkKvuW1P4xC3_6d_lHPFf0U");
    request.setRequestHeader('Content-type', 'application/json');

    var embed = {
        author: {
            name: "New Application! (webhook made by Level#1720 with some help from the internet)"
        },
        title: "Application:",
        description: `\n In Game Name: ${ign.value} \n Discord Tag: ${tag.value} \n Screenshot Of Stats: ${shot.value}`,
        color: hexToDecimal("#00FF00")
    }

    var params = {
        username: "+1UP Application Deliverer",
        avatar_url: "https://cdn.discordapp.com/attachments/699663156011729023/747133963222515772/1UPLogoTransparent.png",
        embeds: [ embed ]
    }

    request.send(JSON.stringify(params));

    function hexToDecimal(hex) {
        return parseInt(hex.replace("#", ""), 16)
    }
}

function msgSent() {
    everything.style.display = "none";
    sentMsg.style.display = "";
}

submit.addEventListener("click", msgSent)
