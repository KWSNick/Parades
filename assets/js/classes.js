$("document").ready(function() {
    $("body").addClass("bgGreenFibers mainFont");
    $("article").addClass("bgGlass  articleMargin");
    $("h3").addClass("subHeaderFont");
    $(".container-fluid").addClass("noPadding");
    $("#header").addClass("col-12 noPadding navbar navbar-expand-xl navbar-light bgHeader");    
    $(".navbar-brand").addClass("col-6 col-xl-2 noPadding noMargin textAlignLeft");
    $("#tagline").addClass("d-none d-xl-block col-2 navBorderLeft navBorderRight");
    $("#tagline h1, #headerContact h1").addClass("d-block taglinePadding");
    $("#hamburger").addClass("navbar-toggler ml-auto noBorder col-2 col-md-1 maxWidth100");
    $("#navbarNavigation").addClass("col height100 noPadding collapse navbar-collapse");
    $(".navbar-nav").addClass("col noPadding ml-auto");
    $(".nav-item").addClass("col col-xl-6 noPadding");
    $(".nav-link").addClass("height100 width100 noPadding paddingTopBottom12 navLinkText hvr-sweep-to-bottom");
    $("#headerContact").addClass("d-none d-xl-block col-4 navBorderLeft");
    $("#jumboTicker").addClass("jumbotron noMargin noPadding bgWhite");
    $(".jumboTickerSlides").addClass("row no-gutters");
    $(".jumboTickerSlides>img").addClass("maxWidth100");
    $(".jumboTickerSlides>h2").addClass("headerFont");
    $("#innerMainFooter").addClass("row no-gutters bgHeader");
    $("#innerMainFooterNav, #innerMainFooterNote, #innerMainFooterCopy").addClass("col-12 col-md-4 inlineBlock noPadding verticalCenter");
    $("#innerMainFooterNav>ul, #innerMainFooterNote>p, #innerMainFooterCopy>p").addClass("noMargin");
    $("#innerMainFooterNav>ul").addClass("d-flex flex-row noPadding noListStyle");
    $("#innerMainFooterNav>ul>li").addClass("ml-auto mr-auto");
    $("#intro").addClass("col-12 font1 noPadding");
    $("#innerContents").addClass("col-12");
    $("#innerContents>article").addClass("col-6");
    $("#sidebar").addClass("col-4");
})
