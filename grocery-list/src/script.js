// function eventCode(){
//    $(function(){
//       var foodItem = $("input").val();
//       if(foodItem !== ''){
//          var createLiTag = $("<li class='food'></li>").text(foodItem);
//          $(createLiTag).append("  <button class='del btn btn-danger btn-sm ml-3'>Delete</button>");
//          $("#list").append(createLiTag);
//          $("input").val("");
//          $(".food").on({
//              click: function(){
//                $(this).css("text-decoration","line-through");
//              },
//              dblclick: function(){
//                $(this).css("text-decoration", "none");
//              }
//          });
//          $(".del").on("click", function(){
//             $(this).parent().remove();
//          });
//       }
//    });
// }

// $(function(){
//    $("#addFood").on("click", function(){
//       eventCode();
//    });
// });

// $(function(){
//    $("#input").on("keyup", function(event){
//       if(event.key === "Enter"){
//          eventCode();
//       }
//    });
// });

// $(function(){
//    $("#reset").on("click", function(){
//        $("#list").children().remove();
//    });
// });
