$(function () {
  $("#range").bind("input", function () {
    var range = $("#range").val();
    $(".range").html(range);
  });
});
