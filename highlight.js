// Keep track of the highlighted link
var prevLink;

// Add a outline to the highlighted link
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    var link = links[i];

    link.addEventListener("mousedown", function() {
        if (prevLink) {
            removeOutline(prevLink);
        }

        addOutline(this);
    }, false);

    link.addEventListener("mouseup", function() { addOutline(this); }, false);
}

// Reset the highlighted link when anything else is clicked
document.addEventListener("mouseup", function() {
    if (prevLink) {
        removeOutline(prevLink);
    }
}, true);

function addOutline(link) {
    var style = window.getComputedStyle(link, null);

    link.style.outlineStyle = "dotted";
    link.style.outlineWidth = "1px";
    link.style.outlineColor = style.color;

    prevLink = link;
}

function removeOutline(link) {
    link.style.outlineWidth = 0;
}
