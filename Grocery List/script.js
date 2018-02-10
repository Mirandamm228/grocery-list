function addFood(){

  var li = document.createElement("li");
  var element = document.getElementById("list");
  element.appendChild(li);

//this is adding to the ul tag and not the newly made li tag
  var food = document.getElementById("food").value;
  var list = document.getElementById("list").innerHTML;
document.getElementById("list").innerHTML = list + food;

//won't need to add this since li tags have natural break
//   var _break = document.createElement("br");
//   var element = document.getElementById("list");
// element.appendChild(_break);

//will have to add a way to create a new <li> tag before inputting the food item

}

//this successfully removed an time with the <button> tag
//but, this worked on only one due to using only one id specificity
//have to find a way to remove any item list and perhaps update the id name
//of the <li> tag
function remove(){
  var del = document.getElementById("1");
  var ul = document.getElementById("list");
ul.removeChild(del);
}
