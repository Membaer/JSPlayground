



function zeichnen() {
    var malerei = document.getElementsByTagName("canvas")[0].getContext('2d');
    //console.debug(malerei);
    malerei.fillStyle = "rgba(255,0,0,0.2)";
    malerei.fillRect(0, 0, 140, 80);
    malerei.fillStyle = "rgba(0,255,0,0.3)";
    malerei.fillRect(15, 15, 60, 130);
}

function init() {
    zeichnen();
}

window.onload = init;