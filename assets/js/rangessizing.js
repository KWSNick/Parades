$("document").ready(function () {
  let varHeight = $(".card").width();
  let headerHeight = $(".card-header").height();
  $(".card").css({ height: varHeight });
  $(".card-body").css({ height: varHeight - headerHeight });
  $(window).resize(function () {
    let varHeight = $(".card").width();
    $(".card, .card-body").css({ height: varHeight });
    $(".card-body").css({ height: varHeight - headerHeight });
  });
});
