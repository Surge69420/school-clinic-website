if (document.getElementById("Poemas") != null) {
    document.getElementById("Poemas").addEventListener("click", () => {
        document.getElementById('coverwholescreenUn').classList.add('coverwholescreen');
        setTimeout(function () {
            // Redirect to a different HTML page
            window.location.href = 'poemas.html';
        }, 1000);
    })
}
if (document.getElementById("back") != null) {
    document.getElementById("back").addEventListener("click", () => {
        document.getElementById('coverwholescreenUn').classList.add('coverwholescreen');
        setTimeout(function () {
            // Redirect to a different HTML page
            window.location.href = 'index.html';
        }, 1000);
    })
}
if (document.getElementById("Escritores") != null) {
    document.getElementById("Escritores").addEventListener("click", () => {
        document.getElementById('coverwholescreenUn').classList.add('coverwholescreen');
        setTimeout(function () {
            // Redirect to a different HTML page
            window.location.href = 'http://www.apescritores.pt/';
        }, 1000);
    })
}
setTimeout(() => {
    var butanoList = document.getElementsByClassName("butano");
    for (var i = 0; i < butanoList.length; i++) {
        butanoList[i].classList.add("buttonH");
        if (butanoList[i].classList.contains("butanoD")) {
            butanoList[i].classList.add("buttonDarkBH");
        }
    }
}, 2500);
