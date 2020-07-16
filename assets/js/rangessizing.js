$("document").ready(function () {
  let varHeight = $(".card").width();
  $(".card, .card-body").css({ height: varHeight });
  $(window).resize(function () {
    let varHeight = $(".card").width();
    $(".card, .card-body").css({ height: varHeight });
  });
});
