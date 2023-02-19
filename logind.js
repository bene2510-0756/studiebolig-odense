console.log("JS fungerer perfekt jo!");

let myInput = document.getElementById("password");
let numbers = document.getElementById("numbers");
let characters = document.getElementById("characters");
let mySubmit = document.getElementById ("submit");
let numberstonine = /[0-9]/g;
let myForgot = document.getElementById("glemtkode");
let myUsername = document.getElementById("username");
let smallletters = /[a-z]/g;
let smallletterstwo = document.getElementById("smallletterstwo");

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
  if(myUsername.value.match(smallletters)) {
    smallletterstwo.classList.remove("invalid");
    smallletterstwo.classList.add("valid");
  }
  else {
    smallletterstwo.classList.remove("valid");
    smallletterstwo.classList.add("invalid");
  }
}

myInput.onkeyup = function() {
  if(myInput.value.match(numberstonine)) {  
    numbers.classList.remove("invalid");
    numbers.classList.add("valid");
  } else {
    numbers.classList.remove("valid");
    numbers.classList.add("invalid");
  }

  if(myInput.value.length >= 8) {
    characters.classList.remove("invalid");
    characters.classList.add("valid");
  } else {
    characters.classList.remove("valid");
    characters.classList.add("invalid");
  }
}

let besked = ["Log ind godkendt","Forkert adgangskode eller brugernavn","Glemt kode eller brugernavn?"]

mySubmit.onclick = function() {
  if(myInput.value.match(numberstonine) && myInput.value.length >= 8 && myUsername.value.match(smallletters)) {
    alert(besked[0]);
  }
  else {
    alert(besked[1])
  }
}

myForgot.onclick = function() {
  alert(besked[2])
}