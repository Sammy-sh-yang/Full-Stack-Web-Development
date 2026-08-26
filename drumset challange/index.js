
var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
    debugger;
        switch (this.innerText) {
            case 'w':
        alert("this is w");
        break;
    case 'a':
        alert("this is a");
        break;
    case 's':
        alert("this is s");
        break;
    case 'd':
        alert("this is d");
        break;
    default:
        break;
}

    });
}


