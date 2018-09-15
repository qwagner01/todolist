var list = []

var visibleList = document.getElementById('ul');
window.onload = function(){
  var button = document.getElementById('button');
  var nam = document.getElementById('nambutton');
  var rd = document.getElementById('read')
  var input = document.getElementById('input');
  var subm = document.getElementById('sub');
  var clr = document.getElementById('clear');

  subm.addEventListener('click', sendList);
  button.addEventListener('click',add)
  nam.addEventListener('click',sendName)
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
  var key = document.getElementById("name").value;
  var arrStr = JSON.stringify(key)
  var request = new XMLHttpRequest

request.addEventListener('load', function(){


var data = JSON.parse(this.responseText);

//console.log(data);

data.forEach(function(val,i){
  var listfinal = val.list;

  var lis = document.createElement("li");
  var inputVal = data
  var t = document.createTextNode(listfinal);
  lis.appendChild(t);
  visibleList.appendChild(lis);
  list.push(listfinal);



});


// var lis = document.createElement("li");
// var inputVal = data
// var t = document.createTextNode(inputVal);
// lis.appendChild(t);
// visibleList.appendChild(lis);
// list.push(inputVal);

})
request.open("GET",'/respo',true)

request.send();

}



function clrList(){
  var xhttp = new XMLHttpRequest
  xhttp.open("POST",'/del',true)
xhttp.send();
$('li').remove();
}

function sendList(){
 var data
  var key = document.getElementById("name").value;
  var xhttp = new XMLHttpRequest();
  var contents = {key, list};
  var arrStr = JSON.stringify(contents)
  xhttp.open("POST","/list",true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(arrStr);
  list = [];
  $('li').remove();
}

function sendName(){
  var nam = document.getElementById("name").value;
  var xhttp = new XMLHttpRequest();
  var contents = {"key" : nam};
  var arrStr = JSON.stringify(contents)
  xhttp.open("POST","/name",true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(arrStr);

}
