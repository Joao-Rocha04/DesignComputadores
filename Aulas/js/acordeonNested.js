var accNested = document.getElementsByClassName("accordionNested");
var i;

for (i = 0; i < accNested.length; i++) {
    accNested[i].onclick = function(){
        this.classList.toggle("activeNested");
        var panelNested = this.nextElementSibling;
        if (panelNested.style.display === "block") {
            panelNested.style.display = "none";
        } else {
            panelNested.style.display = "block";
        }
    }
}

var acc = document.getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
