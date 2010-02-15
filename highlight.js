var links = document.getElementsByTagName("a");
var prevLink;

for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener("click", function() { addBorder(this) }, false);
}

function addBorder(link) {
    link.style.borderStyle = "dotted";
    link.style.borderWidth = "1px";
    link.style.borderColor = "#ccc";

    if (prevLink) {
        removeBorder(prevLink);
    }

    prevLink = link;
}

function removeBorder(link) {
    link.style.borderWidth = 0;
}
