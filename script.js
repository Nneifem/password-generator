// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ' \ ', ']', '^', '_', '`', '{', '}', '|', '~'];

  var finalPassword = [];
  
  var passwordLength = parseInt(prompt("How long do you want your password to be? Must be 8 to 128 characters long."));
    if(passwordLength < 8 || passwordLength > 128){
      prompt("try again, enter another length between 8 and 128");
    }

    var question1 = prompt("Do you want lowercase letters in your password? Click okay for yes or cancel for no.");
      
    var queston2 = prompt("Do you want uppercase letters in your password? Click okay for yes or cancel for no.");
      
    var question3 = prompt("Do you want numbers in your password? Click okay for yes or cancel for no.");
      
    var question4 = prompt("Do you want special characters in your password? Click okay for yes or cancel for no.");
    

    for(var i = 0; i < passwordLength; i++){
      finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
    }
    
    console.log(finalPassword);
    return finalPassword.join("");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
