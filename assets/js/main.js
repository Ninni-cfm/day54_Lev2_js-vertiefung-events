/*****************************************************************************
JS Vertiefung CodeFlow Übung lev2_1: Farben Umschalter - Aufgabenstellung

Schreibe eine kleine App, die die Hintergrundfarbe ändert.
Nutze: onclick, HTML und CSS befinden sich im Kommentar.
*/
//const ul = document.getElementById("umschalter");

for (let li of document.getElementsByTagName("li")) {
    li.addEventListener('click', function (e) {
        let bgColor = getComputedStyle(e.target).getPropertyValue("background-color");
        document.getElementById("lev2_1").style.backgroundColor = bgColor;
    });
}


/*****************************************************************************
JS Vertiefung CodeFlow Übung lev2_2: KeyCodeInfo - Aufgabenstellung

Schreibe eine kleine App, die Dir die Taste ("key"), den Unicode Tastencode
("keyCode") und  den "Code" anzeigt, sobald Du eine Taste auf deinem Keyboard
drückst.
*/
addEventListener('keypress', (e) => {
    document.getElementById("key").textContent = e.key;
    document.getElementById("code").textContent = e.code;
    for (let elt of document.getElementsByClassName("keycode")) {
        elt.textContent = e.keyCode;
    }
});

