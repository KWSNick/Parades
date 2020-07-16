$("document").ready(function () {
  let varHeight = $(".card").width();
  $(".card").css({ height: varHeight });
  $(window).resize(function () {
    let varHeight = $(".card").width();
    $(".card").css({ height: varHeight });
  });
});
