$("document").ready(function () {
  let varHeight = $(".card").width();
  let headerHeight = $(".card-header").height();
  $(".card").css({ height: varHeight });
  $(".card-body").css({ height: varHeight - headerHeight });
  $(window).resize(function () {
    let varHeight = $(".card").width();
    $(".card").css({ height: varHeight });
    $(".card-body").css({ height: varHeight - headerHeight });
  });
  $("#ranges>div>div>h4>button").click(function () {
    let id = $(this).parent().parent().prop("id");
    $("#ranges>div>div>h4>button")
      .children("i")
      .removeClass("fas fa-circle")
      .addClass("fas fa-chevron-circle-down");
    if (
      $("#" + id)
        .siblings("div")
        .hasClass("collapse show")
    ) {
      $("#" + id)
        .children()
        .children()
        .children("i")
        .removeClass("fas fa-circle")
        .addClass("fas fa-chevron-circle-down");
    } else if (
      $("#" + id)
        .siblings()
        .hasClass("collapse")
    ) {
      $("#" + id)
        .children()
        .children()
        .children("i")
        .removeClass("fas fa-chevron-circle-down")
        .addClass("fas fa-circle");
    }
  });
});
