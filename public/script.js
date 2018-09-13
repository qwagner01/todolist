var list = []

var visibleList = document.getElementById('ul');
window.onload = function(){
  var button = document.getElementById('button');
  var rd = document.getElementById('read')
  var input = document.getElementById('input');
  var subm = document.getElementById('sub');
  var clr = document.getElementById('clear');
  subm.addEventListener('click', sendList);
  button.addEventListener('click',add)
  rd.addEventListener('click',readList)
  clr.addEventListener('click', clrList)

};

function add(){
   var lis = document.createElement("li");
   var inputVal = document.getElementById("input").value;
   var t = document.createTextNode(inputVal);
   lis.appendChild(t);
   visibleList.appendChild(lis);
   list.push(inputVal);
   $('#input').val('')
}


function readList(){
  var request = new XMLHttpRequest

request.open("GET",'/respo',true)
request.send();


}



function clrList(){
  var xhttp = new XMLHttpRequest
  xhttp.open("POST",'/del',true)
xhttp.send();
}

function sendList(){
 var data
  var key = document.getElementById("name").value;
  var xhttp = new XMLHttpRequest();
  var contents = {};
  contents[key] = list;
  var arrStr = JSON.stringify(contents)
  xhttp.open("POST","/list",true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(arrStr);
  list = [];
  $('li').remove();
}
