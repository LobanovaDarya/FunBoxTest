function mouseEvent(contentCard) {
    var cardDefault = document.getElementById(contentCard + "-default-event");
    cardDefault.addEventListener("mousedown", function() {
        document.getElementsByClassName(contentCard + "-default")[0].className = contentCard + "-default " + contentCard + "-default-hidden";
        document.getElementsByClassName(contentCard + "-selected")[0].className = contentCard + "-selected " + contentCard +  "-selected-visible";
      });
    var linkDefault = document.getElementById(contentCard + "-link-selected-event");
    linkDefault.addEventListener("mousedown", function() {
        document.getElementsByClassName(contentCard + "-default")[0].className = contentCard + "-default " + contentCard + "-default-hidden";
        document.getElementsByClassName(contentCard + "-selected")[0].className = contentCard + "-selected " + contentCard +  "-selected-visible";
    });
    var cardSelected = document.getElementById(contentCard + "-selected-event");
    cardSelected.addEventListener("mousedown", function() {
        document.getElementsByClassName(contentCard + "-selected")[0].className = contentCard + "-selected " + contentCard + "-selected-hidden";
        document.getElementsByClassName(contentCard + "-default")[0].className = contentCard + "-default " + contentCard + "-default-visible";
    });
};
mouseEvent("content__card-small");
mouseEvent("content__card-middle");
mouseEvent("content__card-big");

