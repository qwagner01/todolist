window.onload = function(){
var button = document.getElementById('button');
var input = document.getElementById('input');


button.addEventListener('click',add)


function add(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Write Something!");
  } else {
    ul.appendChild(li);
  }
  inputValue.value = "";

}











}
