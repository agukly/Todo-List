$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(300, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var task = $(this).val();
    $(this).val("");
    $("ul").append("<li><span>✗ </span>" + task + "</li>")
  }
});

$("h3").click(function(){
  $("input[type='text']").fadeToggle()
})
