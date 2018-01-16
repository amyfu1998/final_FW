$(document).ready(function(){
  $(".square div").mouseenter(
    function(event) {
      $(this).fadeOut(100);
  });
  $(".square div").mouseout(
    function(event) {
      $(this).fadeIn(800);
  });
});
