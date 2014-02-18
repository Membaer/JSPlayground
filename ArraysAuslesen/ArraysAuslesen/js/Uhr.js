function show() {
    //Variablen holen (date) und dann variablen mit stunden, minuten, sekunden befüllen
    var Digital = new Date();
    var hours = Digital.getHours();
    var minutes = Digital.getMinutes();
    var seconds = Digital.getSeconds();

    //wenn zahlen < 9 vorkommen, dann jeweils eine 0 vorne ranhängen e.g. 09.05
    if (hours <= 9)
        hours = "0" + hours;
    if (minutes <= 9)
        minutes = "0" + minutes;
    if (seconds <= 9)
        seconds = "0" + seconds;

    //in das div id "uhr" die werte abfüllen
    document.getElementById("uhr").innerHTML = "Uhrzeit: " + hours + ":" + minutes + ":" + seconds;

    //die funktion soll sich selbst wieder aufrufen (show()) aber erst nach 1000 millisekunden
    setTimeout("show()", 1000);
}

window.onload = show;