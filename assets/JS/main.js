const titleElement = document.getElementById('animatedTitle');
let originalText = titleElement.textContent;
let index = 0;
const titles = [
    "Русский сервер | F3F5",
    "Сервер без лицензии | F3F5",
    "Анархия | F3F5",
]

//Говно код :)
//function animateTitle(){if(index<titles.length-1){index++;}else{index=0;}document.title=titles[index];setTimeout(animateTitle,2500);}animateTitle();

function animatedTitle(){
    document.title = titles[index];
    if (index==titles.length-1){
        index=0;
    }else{
        index++;
    }
    setTimeout(animatedTitle, 3500);
}
animatedTitle();

const IPButton = document.getElementById("ip");
IPButton.onclick = function(){
    playSound();
    navigator.clipboard.writeText("f3f5.org");
    IPButton.textContent = "Скопировано!";
    setTimeout(()=>{IPButton.textContent = "IP: f3f5.org";}, 2000)
}

var audio = new Audio('assets/sound/random.click.mp3');
function playSound() {
    audio.play();
}

const serverUrl = 'https://api.mcsrvstat.us/3/f3f5.org';


fetch(serverUrl)
    .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
        document.getElementById("players").textContent = document.getElementById("players").textContent.replace("{players}", data["players"]["online"]+"/"+data["players"]["max"])
        //document.getElementById("motd").textContent = document.getElementById("motd").textContent.replace("{motd}", data["motd"]["clean"][0].replace("F3 ", ""))
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(95985610, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true
});