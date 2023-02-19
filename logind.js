console.log("JS fungerer perfekt jo!");

let myInput = document.getElementById("password");
let tal = document.getElementById("tal");
let karakterer = document.getElementById("karakterer");
let mySubmit = document.getElementById ("submit");
let taltal = /[0-9]/g;
let myForgot = document.getElementById("glemtkode");
let myUsername = document.getElementById("username");
let bogstaver = /[a-z]/g;
let bogbog = document.getElementById("bogstaver");

myInput.onfocus = function() {
    document.getElementById("passwordmessage").style.display = "block";
}
myInput.onblur = function() {
  document.getElementById("passwordmessage").style.display = "none";
}

myUsername.onfocus = function() {
  document.getElementById("usernamemessage").style.display = "block";
}
myUsername.onblur = function() {
  document.getElementById("usernamemessage").style.display = "none";
}

myUsername.onkeyup = function() {
  if(myUsername.value.match(bogstaver)) {
    bogbog.classList.remove("invalid");
    bogbog.classList.add("valid");
  }
  else {
    bogbog.classList.remove("valid");
    bogbog.classList.add("invalid");
  }
}

myInput.onkeyup = function() {
  if(myInput.value.match(taltal)) {  
    tal.classList.remove("invalid");
    tal.classList.add("valid");
  } else {
    tal.classList.remove("valid");
    tal.classList.add("invalid");
  }

  if(myInput.value.length >= 8) {
    karakterer.classList.remove("invalid");
    karakterer.classList.add("valid");
  } else {
    karakterer.classList.remove("valid");
    karakterer.classList.add("invalid");
  }
}

let besked = ["Log ind godkendt","Forkert adgangskode eller brugernavn","Glemt kode eller brugernavn?"]

mySubmit.onclick = function() {
  if(myInput.value.match(taltal) && myInput.value.length >= 8 && myUsername.value.match(bogstaver)) {
    alert(besked[0]);
  }
  else {
    alert(besked[1])
  }
}

myForgot.onclick = function() {
  alert(besked[2])
}