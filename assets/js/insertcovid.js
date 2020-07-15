$("document").ready(function(){
    $("div").first().before('<div class="container-fluid"><aside id="covid"><strong>COVID-19:</strong> We are fully open and have implemented procedures to minimise risk.  <a data-toggle="modal" data-target="#covidModal">Learn More</a> <button type="button" class="close" data-dismiss="covid" aria-label="close"><span aria-hidden="true">&times;</span></button></button></aside></div>');
    $("#covid").hide();
    $("body").append(`<div id="covidModal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">Modal DIV Header</div><div class="modal-body">Modal Body</div><div class="modal-footer">Modal Footer</div></div></div></div>`);
    $("#covidModal>div>div>.modal-header").add("Test adding Header");
    function covidSlide() {
    $("#covid").delay(3000).slideDown(500);
};
    covidSlide();

    $("#covid>button").click(function(){
        $("#covid").slideUp(500);
    });
})