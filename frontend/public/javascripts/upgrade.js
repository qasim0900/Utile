$("li").on("click", function() {
	var color = $(this).css("background-color");

	$(".container").css("background-color", color)
  $(".button").css("background-color", color).hover(
    function() {
        $(this).css('color', color)
    }, function() {
        $(this).css('color', '#fff')
  });
});

$("ul.list-menu").hide();

  $(".trigger").click(function(event){
  $(".menu-icon").toggleClass("active");
  $("ul.list-menu").toggle("fade");
});