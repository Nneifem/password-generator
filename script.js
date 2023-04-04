// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var captialAlapbets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ' \ ', ']', '^', '_', '`', '{', '}', '|', '~'];

  var passwordSet = alphabets + captialAlapbets + numerics + specialCharacters;
  
  var passwordLength = parseInt(prompt("How long do you want your password to be? Must be 8 to 128 characters long."));
    if(passwordLength < 8 || passwordLength > 128){
      prompt("try again, enter another length between 8 and 128");
    }

    prompt("Do you want lowercase letters in your password? Click okay for yes or cancel for no.");
    prompt("Do you want uppercase letters in your password? Click okay for yes or cancel for no.");
    prompt("Do you want numbers in your password? Click okay for yes or cancel for no.");
    prompt("Do you want special characters in your password? Click okay for yes or cancel for no.")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
