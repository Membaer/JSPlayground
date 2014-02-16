function machcanvas() {
    var x = 0;
    var y = 0;
    var malerei = document.getElementsByTagName("canvas")[0].getContext('2d');
    for (i = 0; i < 3; i++) {
        for (k = 0; k < 3; k++) {
        //console.debug(malerei);
            malerei.fillStyle = "rgba(255,0,0,0.2)";
            malerei.fillRect(x, y, 50, 50);
            malerei.fillStyle = "rgba(0,255,0,0.3)";
            malerei.fillRect(x + 15, y + 15, 20, 80);
            y += 100;
        }
        x += 60;
        y = 0;
    }
}

//window.onload = machcanvas;

function checkinput() {
    var inputfields = document.getElementsByTagName("input")
    for (i = 0; i < inputfields.length; i++) {
        if (inputfields[i].value == "") {
            alert("Bitte ausfüllen");
            inputfields[i].focus();
            break;
        }
        else {
        }
    }
}

window.onload = function ()
{
    document.getElementById("mybtn").onclick = checkinput;
}