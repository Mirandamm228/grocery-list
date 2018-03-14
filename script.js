$(function(){
    $("#addFood").on("click", function(){
        var foodItem = $("input").val();
        if(foodItem !== ''){
            var createLiTag = $("<li class='food'></li>").text(foodItem);
            $(createLiTag).append("  <button class='del'>Delete</button>");
            $("#list").append(createLiTag);
            $("input").val("");
            $(".food").on({
                click: function(){
                  $(this).css("text-decoration","line-through");
                },
                dblclick: function(){
                  $(this).css("text-decoration", "none");
                }
            });
            $(".del").on("click", function(){
               $(this).parent().remove();
            });
        }
    });
});

$(function(){
   $("#reset").on("click", function(){
       $("#list").children().remove();
   });
});
