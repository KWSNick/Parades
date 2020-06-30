$("document").ready(function(){
    $(".container-fluid").addClass("noPadding");
    $("#header").addClass("col-12 noPadding navbar navbar-expand-xl navbar-light bgHeader");    
    $(".navbar-brand").addClass("col-2 noPadding");
    $("#tagline").addClass("col-2 navBorderLeft navBorderRight");
    $("#tagline h1, #headerContact h1").addClass("d-block taglinePadding");
    $(".navbar-nav").addClass("col-4 height100 noPadding");
    $(".nav-item").addClass("col-6 noPadding");
    $(".nav-link").addClass("height100 width100 noPadding paddingTopBottom12 navLinkText hvr-sweep-to-bottom");
    $("#headerContact").addClass("col-4 navBorderLeft");
})
