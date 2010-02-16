// Keep track of the highlighted link
var prevLink;

// Add a border to the highlighted link
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener("click", function() { addBorder(this) }, false);
}

// Reset the highlighted link when something else is clicked
document.addEventListener("click", function() {
    if (prevLink) {
        removeBorder(prevLink);
    }
}, true);

function addBorder(link) {
    var style = window.getComputedStyle(link, "visited");

    link.style.borderStyle = "dotted";
    link.style.borderWidth = "1px";
    link.style.borderColor = style.color;

    prevLink = link;
}

function removeBorder(link) {
    link.style.borderWidth = 0;
}
