var list = []
var visibleList = document.getElementById('ul');
window.onload = function(){
  var button = document.getElementById('button');
  var input = document.getElementById('input');
  var read = document.getElementById('read');

  read.addEventListener('click', sendList);
  button.addEventListener('click',add)
};

function add(){
   var lis = document.createElement("li");
   var inputVal = document.getElementById("input").value;
   var t = document.createTextNode(inputVal);
   lis.appendChild(t);
   visibleList.appendChild(lis);

   list.push(inputVal);



}

function sendList(){
  console.log(list)
  var xhttp = new XMLHttpRequest();
  var arrStr = JSON.stringify({x: list})
  // var arrStr = encodeURIComponent(JSON.stringify(list));
  // console.log(arrStr)
  xhttp.open("POST","/list",true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  // xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send(arrStr);
  list = [];
  //$('li').remove();
}
