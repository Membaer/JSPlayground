function init() {
   document.getElementsByTagName("input")[0].onmousedown = function () {
        document.getElementsByTagName("input")[0].value = "";
    }

    document.getElementsByTagName("input")[1].onmousedown = function () {
        document.getElementsByTagName("input")[1].value = "";
    }

    document.getElementsByTagName("button")[0].onclick = function () {
        var z1 = parseFloat(document.getElementsByTagName("input")[0].value);
        var z2 = parseFloat(document.getElementsByTagName("input")[1].value);
        var ausgabe = z1 + z2;
        document.getElementById("ergebnis").innerHTML = ausgabe;
    }

    document.getElementsByTagName("button")[1].onclick = function () {
        var z1 = parseFloat(document.getElementsByTagName("input")[0].value);
        var z2 = parseFloat(document.getElementsByTagName("input")[1].value);
        var ausgabe = z1 - z2;
        document.getElementById("ergebnis").innerHTML = ausgabe;
    }

    document.getElementsByTagName("button")[2].onclick = function () {
        var z1 = parseFloat(document.getElementsByTagName("input")[0].value);
        var z2 = parseFloat(document.getElementsByTagName("input")[1].value);
        var ausgabe = z1 * z2;
        document.getElementById("ergebnis").innerHTML = ausgabe;
    }

    document.getElementsByTagName("button")[3].onclick = function () {
        var z1 = parseFloat(document.getElementsByTagName("input")[0].value);
        var z2 = parseFloat(document.getElementsByTagName("input")[1].value);
        var ausgabe = z1 / z2;
        document.getElementById("ergebnis").innerHTML = ausgabe;
    }

    document.getElementsByTagName("button")[4].onclick = function () {
        if (document.getElementsByTagName("input")[0].value != "" || document.getElementsByTagName("input")[1].value != "" || document.getElementById("ergebnis").innerHTML != "") {
            document.getElementsByTagName("input")[0].value = "";
            document.getElementsByTagName("input")[1].value = "";
            document.getElementById("ergebnis").innerHTML = "";
        };
    }
};

//window.onload = init;


//Aufgaben Funktionen
/*window.onload = fDoppelt;
function fDoppelt(d) {
    return d * 2;
};
var d = parseFloat(prompt("Bitte geben Sie eine Zahl ein"));
alert("Das Doppelte von " + d + " ist " + fDoppelt(d) + "!");

*/

//Funktionsaufgabe Livie - Selbstversuch
/*
window.onload = fDoppelt;
var d = prompt("Bitte geben Sie eine Zahl ein");

function fDoppelt(d) {
    //Ergebnis muss mit return ausgegeben werden
    return parseFloat(d) * 2;
}

alert("Das Doppelte von " + d + " ist " + fDoppelt(d));
*/

//Selbstversuch No 2


var a = prompt("Bitte gib Deinen Namen ein");
var b = prompt("Bitte gib Du auch Deinen Namen ein");
var c = prompt("Du auch noch");

window.onload = namenmerken;
//wenn ich die funktion mit function namenmerken (a,b,c) aufrufe, setze ich diese damit auf 0 und der Text heisst undefined geht was essen
function namenmerken() {
    console.debug(a);
    var text = "der " + a + " geht mit " + b + " was essen und trifft " + c;
    document.getElementById("ergebnis").innerHTML = text;
}

// zum übergeben von werten an eine funktion muss diese mit variablen aufgerufen werden z.B. window.onload = function (){namenmerken(a,b,c)}
