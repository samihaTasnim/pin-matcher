function getId() {
  let randomPin = Math.ceil(Math.random() * 10000);
  if(randomPin.toString().length < 4) {
    randomPin = Math.ceil(Math.random() * 10000);
    document.getElementById("generated-pin").value = randomPin;
  }
  document.getElementById("generated-pin").value =  randomPin;
}

function showInput(id) {
  document.getElementById("button-output").value+= document.getElementById(id).innerText + '';
}

function clearInput() {
  document.getElementById("button-output").value = ""
}
function matchPin() {
  if(document.getElementById("generated-pin").value === "") {
    alert("Please generate a pin to continue")
    return ;
  }
  if( parseInt(document.getElementById("generated-pin").value) === parseInt(document.getElementById("button-output").value) ) {
    document.getElementById("notify-positive").style.display = "block";
    clearInput()
  } else {
    document.getElementById("notify-negative").style.display = "block";
    document.getElementById("notify-positive").style.display = "none";
    clearInput()
  }
}

function clearPrevious() {
  document.getElementById("button-output")
}