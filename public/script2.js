window.onload = function(){
  var xhttp = new XMLHttpRequest();
  var button = document.getElementById('button');
  var read = document.getElementById('read')
  var input = document.getElementById('input');
  var read = document.getElementById('read');
  var list = []
  button.addEventListener('click',makeList);
  read.addEventListener('click', sendList)

}

function makeList(){
  var inputVal = document.getElementById("input").value;
  if (inputVal.length > 0){
    list.push(inputVal);
    }
}

function sendList(){
  xhttp.open("POST",list,true);
  xhttp.send();
  list = []
}
