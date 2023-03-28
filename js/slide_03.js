//defer
var dragging = false;

$(".POR_dragbar").mousedown(function (e) {
  //console.log(12312312);
  e.preventDefault();
  dragging = true;
  var side = $(".POR_side");
  $(document).mousemove(function (ex) {
    side.css("width", ex.pageX - 325);
  });
});

$(document).mouseup(function (e) {
  if (dragging) {
    $(document).unbind("mousemove");
    dragging = false;
  }
});