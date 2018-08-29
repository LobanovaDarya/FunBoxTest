function hoverSelected(sizeCard) {
    var out = document.getElementById(sizeCard + "-selected-event");
    out.addEventListener("mouseout", function() {
        document.getElementsByClassName(sizeCard + "-selected-text")[0].className = sizeCard + "-selected-text " + sizeCard + "-selected-text-hidden";
        document.getElementsByClassName(sizeCard + "-selected-hover")[0].className = sizeCard + "-selected-hover " + sizeCard + "-selected-hover-visible";
        document.getElementsByClassName(sizeCard + "-circle-selected")[0].className = sizeCard + "-circle-selected-hover";
    });
    out.addEventListener("mouseover", function() {
        document.getElementsByClassName(sizeCard + "-selected-text")[0].className = sizeCard + "-selected-text " + sizeCard + "-selected-text-visible";
        document.getElementsByClassName(sizeCard + "-selected-hover")[0].className = sizeCard + "-selected-hover " + sizeCard + "-selected-hover-hidden";
        document.getElementsByClassName(sizeCard + "-circle-selected-hover")[0].className = sizeCard + "-circle-selected";
    });
};
hoverSelected("content__card-small");
hoverSelected("content__card-middle");
hoverSelected("content__card-big");