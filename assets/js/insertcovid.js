$("document").ready(function(){
    $("div").first().before('<div class="container-fluid"><aside id="covid"><strong>COVID-19:</strong> We are fully open and have implemented procedures to minimise risk.  <a data-toggle="modal" data-target="#covidModal">Learn More</a> <button type="button" class="close" data-dismiss="covid" aria-label="close"><span aria-hidden="true">&times;</span></button></button></aside></div>');
    $("#covid").hide();
    $("body").append(`<div id="covidModal"><div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content"><div class="modal-header"></div><div class="modal-body"></div><div class="modal-footer"></div></div></div></div>`);
    $("#covidModal>div>div>.modal-header").append(`<h4>COVID 19 risk management at Parades</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>`);
    $("#covidModal>div>div>.modal-body").append(`<ul><li>No need to book an appointment.</li><li>We are limiting customer numbers in store, and may ask you to briefly wait outside.</li><li>Hand sanitiser is available for staff and customers.</li><li>Surfaces and touch points disinfected regularly.</li><li>Our staff will be wearing masks in store.</li></ul>`);
    $("#covidModal>div>div>.modal-footer").append(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`);
    function covidSlide() {
    $("#covid").delay(3000).slideDown(500);
};
    covidSlide();

    $("#covid>button").click(function(){
        $("#covid").slideUp(500);
    });
    $("#covid").addClass("alert alert-info noMargin");
    $("#covidModal").addClass("modal fade").attr("tabindex","-1").attr("role", "dialog").attr("aria-labelledby", "covidModalLabel").attr("aria-hidden", "true");
    $(".modal-footer>button").addClass("modalBtn");
    $(".modal-body>ul").addClass("modalUl");
    $(".modal-body>ul>li").addClass("modalLi");
})