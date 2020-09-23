// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength;
var validpwLength;
var lwrcase;
var hasLwrcase;
var uppercase;
var hasUppercase;
var numbers;
var hasNumbers;
var symbols;
var hasSymbols;
var arrayofFunc = [];
var password;
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", clickpwBtn);

function clickpwBtn() {
  ensureLength();
  if (pwLength === null) {
    return;
  }
  else {
    ensureLower();
    ensureUpper();
    ensureNumbers();
    ensureSymbols();
    pushToArray();
    makePassword();
    writePassword();
  }
  pwLength = undefined;
  validpwLength = undefined;
  lwrcase = undefined;
  hasLwrcase = undefined;
  uppercase = undefined;
  hasUppercase = undefined;
  numbers = undefined;
  hasNumbers = undefined;
  symbols = undefined;
  hasSymbols = undefined;
  arrayofFunc = [];
  password = undefined;
}


function pushToArray() {
  if (hasSymbols === true) {
    arrayofFunc.push(addSymbols);
  }
  if (hasLwrcase === true) {
    arrayofFunc.push(addLowercase);
  }
  if (hasUppercase === true) {
    arrayofFunc.push(addUppercase);
  }
  if (hasNumbers === true) {
    arrayofFunc.push(addNumbers);
  }
}

function makePassword() {
  if (arrayofFunc.length === 0) {
    return;
  }
  password = "";
  for (var index = 0; index < validpwLength; index++){
    var mod = index % arrayofFunc.length;
    // mod is a number between 0 and 3
    // value is a function
    // func is arrayofFunc[0]
    // funcofFunc = [addSymbols, addLowerCase, addUpperCase, addNumbers]
    var func = arrayofFunc[mod];
    var value = func();
    var char = String.fromCharCode(value);
    password = password.concat(char);
    
  }
}

function ensureLength() {
  while (validpwLength !== pwLength || validpwLength === undefined) {
    pwLength = prompt(
      "Choose length for your password (between 8 and 128 characters):",
      "Type a number here"
    );

    if (pwLength <= 128 && pwLength >= 8) {
      validpwLength = pwLength;
    } else if (pwLength === null) {
      break;
    }
  }
}

function ensureLower() {
  while (hasLwrcase === undefined) {
    lwrcase = prompt(
      "Do you want lowercase letters in your password?",
      "type 'yes' or 'no'"
    );
    if (lwrcase === "yes") {
      hasLwrcase = true;
    }
    if (lwrcase === "no") {
      hasLwrcase = false;
    }

    if (lwrcase === null) {
      break;
    }
  }
}

function ensureUpper() {
  while (hasUppercase === undefined) {
    uppercase = prompt(
      "Do you want uppercase letters in your password?",
      "type 'yes' or 'no"
    );
    if (uppercase === "yes") {
      hasUppercase = true;
    }
    if (uppercase === "no") {
      hasUppercase = false;
    }
    if (uppercase === null) {
      break;
    }
  }
}

function ensureNumbers() {
  while (hasNumbers === undefined) {
    numbers = prompt(
      "Do you want numbers in your password?",
      "type 'yes' or 'no"
    );
    if (numbers === "yes") {
      hasNumbers = true;
    }
    if (numbers === "no") {
      hasNumbers = false;
    }
    if (numbers === null) {
      break;
    }
  }
}

function ensureSymbols() {
  while (hasSymbols === undefined) {
    symbols = prompt(
      "Do you want symbols in your password?",
      "type 'yes' or 'no"
    );
    if (symbols === "yes") {
      hasSymbols = true;
    }
    if (symbols === "no") {
      hasSymbols = false;
    }
    if (symbols === null) {
      break;
    }
  }
}



function addSymbols() {
  var r = getRandomInt(14) + 33;
  return r;
}
function addLowercase() {
  var r = getRandomInt(26) + 97;
  return r;
}
function addUppercase() {
  var r = getRandomInt(26) + 65;
  return r;
}
function addNumbers() {
  var r = getRandomInt(10) + 48;
  return r;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function writePassword() {
  if (password === undefined) {
    return;
  }
  alert("Your password will appear below");
  passwordText.value = password;
}
