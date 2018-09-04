window.onload = function(){
  var button = document.getElementById('button');
  var input = document.getElementById('input');
  var read = document.getElementById('read');
  var list = []
  button.addEventListener('click',makeList);
}

function makeList(){
  var inputVal = document.getElementById("input").value;
  if (inputVal.length > 0){
    list.push(inputVal);
    }
}
