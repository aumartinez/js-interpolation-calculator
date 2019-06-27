//JavaScript

function run(){
  let elem;
  
  elem = document.getElementById("action-btn");
  elem.addEventListener("click", function(){ interpolate();}, false);
}

function interpolate(){
  let X0;
  let Y0;
  let X1;
  let Y1;
  let X;
  let Y;
  let result;
      
  X0 = Number(document.getElementById("px0").value);
  Y0 = Number(document.getElementById("py0").value);
  X1 = Number(document.getElementById("px1").value);
  Y1 = Number(document.getElementById("py1").value);
  X = Number(document.getElementById("px").value);
  
  Y = ((X - X0) * (Y1 - Y0) / (X1 - X0)) + Y0;  
  
  result = document.getElementById("result");
  result.value = Y;
}

window.onload = run;
