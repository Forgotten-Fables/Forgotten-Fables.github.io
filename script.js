"use strict";
var message = "hi crinfarr";
function fablesMenuShow() {
    var bar = document.getElementsByClassName("fables");
    for (var i = 0; i < bar.length; i++) {
        var button = bar.item(i);
        if (button != null) {
            if (button.className == "fables") {
                button.className += " hide";
            }
            else {
                button.className = "fables";
            }
        }
    }
}
