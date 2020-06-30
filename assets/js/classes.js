$("document").ready(function(){
    $(".container-fluid").addClass("noPadding");
    $("#header").addClass("col-12 noPadding navbar navbar-expand-xl navbar-light bgHeader");    
    $(".navbar-brand").addClass("col-2 noPadding");
    $("#tagline").addClass("d-none d-xl-block col-2 navBorderLeft navBorderRight");
    $("#tagline h1, #headerContact h1").addClass("d-block taglinePadding");
    $("#hamburger").addClass("navbar-toggler ml-auto noBorder");
    $("#navbarNavigation").addClass("col height100 noPadding collapse navbar-collapse");
    $(".navbar-nav").addClass("col noPadding ml-auto");
    $(".nav-item").addClass("col col-xl-6 noPadding");
    $(".nav-link").addClass("height100 width100 noPadding paddingTopBottom12 navLinkText hvr-sweep-to-bottom");
    $("#headerContact").addClass("d-none d-xl-block col-4 navBorderLeft");
})
