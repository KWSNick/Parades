$("document").ready(function(){
    let dirParas = $("#directions").children("div").children("div").children("p");
    $(dirParas[2]).after(`<div id="tothillClosed"><p>Tothill Car Park is currently closed until further notice.<br> Please find alternative parking below.</p></div>`);
    $("#tothillClosed").hide().addClass("alert alert-danger col-10 ml-auto mr-auto");
    $("#tothillClosed>p").addClass("noMargin");
    function alertSlide() {
    $("#tothillClosed").delay(5000).slideDown(500);
    };

    alertSlide();
});