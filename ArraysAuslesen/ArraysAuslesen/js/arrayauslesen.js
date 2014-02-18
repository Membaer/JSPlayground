// JavaScript source code

var ACValues = ["Subject", "Artist", "Platform"];
var text = "";

function init() {
    for (i = 0; i < ACValues.length; i++) {
        document.getElementById("AcValues").innerHTML = ACValues[i];
        break;
    }
    if (i = 0) {
        document.getElementById("AcValues").innerHTML = ACValues[0];
    }
    if (i = 1) {
        document.getElementById("AcValues").innerHTML = ACValues[1];
    }
    if (i = 2) {
        document.getElementById("AcValues").innerHTML = ACValues[2];
    }
}


window.onload = init;


