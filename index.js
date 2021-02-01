function getId() {
  let randomPin = Math.ceil(Math.random() * 10000);
  if(randomPin.toString().length < 4) {
   return getId();
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
  else if(parseInt(document.getElementById("try-count").innerText) <= 0 ) {
    alert("Sorry your cannot try again");
    return;
  }
  else if( parseInt(document.getElementById("generated-pin").value) === parseInt(document.getElementById("button-output").value) ) {
    document.getElementById("notify-positive").style.display = "block";
    document.getElementById("count-paragraph").style.display = "none"
    clearInput()
  } 
  else {
    document.getElementById("notify-negative").style.display = "block";
    document.getElementById("notify-positive").style.display = "none";
    document.getElementById("try-count").innerText = parseInt(document.getElementById("try-count").innerText) - 1;
    clearInput()
  }
}

function clearPrevious() {
  document.getElementById("button-output").value = document.getElementById("button-output").value.slice(0, -1);
}