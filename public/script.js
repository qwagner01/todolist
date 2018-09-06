var list = []
$(document).ready(function(){  var button = document.getElementById('button');
  var input = document.getElementById('input');
  var read = document.getElementById('read');
  read.addEventListener('click', sendList);
  button.addEventListener('click',add)
});

function add(){
  var li = document.createElement("li");
  var inputVal = document.getElementById("input").value;
  var t = document.createTextNode(inputVal);
  li.appendChild(t);
  if (inputVal === '') {
    alert("Write Something!");
  } else {
    ul.appendChild(li);
    list.push(inputVal);
  }
  inputVal.value = "";

}

function sendList(){
  var xhttp = new XMLHttpRequest();
  var arrStr = encodeURIComponent(JSON.stringify(list));
  console.log(arrStr)
  xhttp.open("POST","/list",true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send(arrStr);
  list = [];
  $('li').remove();
}
