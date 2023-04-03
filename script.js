// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var captialAlapbets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ' \ ', ']', '^', '_', '`', '{', '}', '|', '~'];

var passwordSet = alphabets + captialAlapbets + numerics + specialCharacters;

var password = [];

var passwordLength = parseInt(prompt("How long should the password be? Has to be between 8 and 128."));
if(passwordLength < 8){
  parseInt(prompt("too low, try again"));
}

alphabets = prompt("Do you want lowercase in your password? Click okay for yes or cancel for no.");

captialAlapbets = prompt("Do you want captial letters in your password? Click okay for yes or cancel for no.");

numerics = prompt("Do you want numbers in your password? Click okay for yes or cancel for no.");

specialCharacters = prompt("Do you want special characters in your password? Click okay for yes or cancel for no.");

for(var i = 0; i < passwordLength; i++){
  password.push(passwordSet[Math.floor(Math.random() * passwordSet.length)]);
}
 
console.log(password);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
