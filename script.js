// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
  
  var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  var numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
  
  var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ' \ ', ']', '^', '_', '`', '{', '}', '|', '~'];

  var passwordOptions = [];
  var finalPassword = [];
  var lowPasswordLength = 8;
  var highPasswordLength = 128;

  var passwordLength = prompt("How long do you want your password to be? Must be 8 to 128 characters long.");
    if(passwordLength < lowPasswordLength || passwordLength > highPasswordLength){
      alert("must be between 8 and 128")
      return null;
    }
    else if(isNaN(passwordLength)){
      alert("must be a number value");
      return null;
    }
    else if(passwordLength % 1 != 0){
      alert("must be a whole number");
      return null;
    }

    var question1 = confirm("Do you want lowercase letters in your password?");
      if(question1 === true){
        passwordOptions = passwordOptions.concat(lowercaseLetters);
      }
      
    var question2 = confirm("Do you want uppercase letters in your password?");
      if(question2 === true){
        passwordOptions = passwordOptions.concat(uppercaseLetters);
      }
      
    var question3 = confirm("Do you want numbers in your password?");
      if(question3 === true){
        passwordOptions = passwordOptions.concat(numerics);
      }
      
    var question4 = confirm("Do you want special characters in your password?");
      if(question4 === true){
        passwordOptions = passwordOptions.concat(specialCharacters);
      }
      console.log(passwordOptions);
    for(var i = 0; i < passwordLength; i++){
      finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
    }
    
    console.log(passwordOptions);
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
