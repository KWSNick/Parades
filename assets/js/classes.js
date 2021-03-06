$("document").ready(function() {
    $("body").addClass("bgGreenFibers mainFont");
    $("article").addClass("bgGlass articleMargin");
    $("h3").addClass("subHeaderFont");
    $("h4").addClass("minorHeaderFont noMargin");
    $(".container-fluid").addClass("noPadding");
    $("#header").addClass("col-12 noPadding navbar navbar-expand-xl navbar-light bgHeader");    
    $(".navbar-brand").addClass("col-6 col-xl-2 noPadding noMargin textAlignLeft");
    $("#tagline").addClass("d-none d-xl-block col-2 navBorderLeft navBorderRight");
    $("#tagline h1, #headerContact h1, #navbarContact h1").addClass("d-block taglinePadding");
    $("address").addClass("noMargin");
    $("#hamburger").addClass("navbar-toggler ml-auto noBorder col-2 col-md-1 maxWidth100");
    $("#navbarNavigation").addClass("col height100 noPadding collapse navbar-collapse");
    $(".navbar-nav").addClass("col noPadding ml-auto");
    $(".nav-item").addClass("col col-xl-6 noPadding");
    $(".nav-link").addClass("height100 width100 noPadding paddingTopBottom12 navLinkText hvr-sweep-to-bottom");
    $("#headerContact").addClass("d-none d-xl-block col-4 navBorderLeft");
    $("#navbarContact").addClass("d-block d-xl-none col-12");
    $("#jumboTicker").addClass("jumbotron noMargin noPadding row bgWhite");
    $("#jumboTicker").children("#abstract .jumboTickerSlides").addClass("inlineBlock");
    $(".jumboTickerSlides").addClass("noPadding col-12 col-md-8");
    $(".jumboTickerSlides #jumboCallouts").addClass("row no-gutters");
    $("#abstract").addClass("bgLightOlive col-12 col-md-4 paddingTopBottom2vh paddingLeftRight2vh font1");
    $("table").addClass("height100 width100");
    $("td").addClass("align-middle");
    $("#jumboCallouts").addClass("col-12 bgDarkGreen lightYellowFont");
    $("#jumboCallouts>aside").addClass("col-12 paddingTopBottom2vh");
    $("#jumboCallouts>aside>p").addClass("noMargin");
    $(".jumboTickerSlides>img, article>img").addClass("maxWidth100 maxHeight35vh");
    $(".jumboTickerSlides>h2").addClass("headerFont");
    $("#innerMainFooter").addClass("row no-gutters bgHeader");
    $("#innerMainFooter").children().addClass("paddingTopBottom2vh footerFont");
    $("#innerMainFooterNav, #innerMainFooterNote, #innerMainFooterCopy").addClass("col-12 col-md-4 inlineBlock noPadding verticalCenter");
    $("#innerMainFooterNav>ul, #innerMainFooterNote>p, #innerMainFooterCopy>p").addClass("noMargin");
    $("#innerMainFooterNav>ul").addClass("d-flex flex-row noPadding noListStyle");
    $("#innerMainFooterNav>ul>li").addClass("ml-auto mr-auto");
    $("#intro").addClass("col-12 font1 noPadding");
    $("#innerContents").addClass("col-12 noPadding");
    $("#ranges").addClass("row accordion");
    $("#innerContents>article>div").addClass("col-md-6 col-xl-3 card noPadding noBackground noBorder inlineBlock");
    $("#innerContents>article").children().children().even().addClass("card-header noPadding");
    $(".card").first().addClass("bgRecliner");
    $(".card").first().next().addClass("bgCabinet");
    $(".card").last().prev().addClass("bgSofa");
    $(".card").last().addClass("bgDining");
    $("#ranges button").addClass("btn width100").attr("type","button").attr("data-toggle", "collapse").attr("aria-expanded", "false");
    $("#innerContents>article").children().children().odd().addClass("collapse").attr("data-parent", "#ranges");
    $("#innerContents>article>div>div>div").addClass("card-body whiteFont paddingLeftRightHalfvw");
    $(".card-header, .card-body").addClass("bgGlass bgDarken");
    $("#directions>div").addClass("row no-gutters");
    $("#directions>div>div").addClass("col-lg-6 inlineBlock paddingTopBottom2vh");
    $("#directions>div>div>img").addClass("maxWidth100");
    $("#directions ul").addClass("noPadding noListStyle");
    $("#directions h4").removeClass("noMargin");
    $("button>i").addClass("chevronPadding");
    $("#map").addClass("height100 width100");
})
