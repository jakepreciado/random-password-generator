// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var newPassword = []
    var chosenParameters = []
    var lowerCase = "abcdefghijklmnopqrstuvwxyz"
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var num = "1234567890"
    var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"';
  
    var lowArray = lowerCase.split("");
    var upArray = upperCase.split("");
    var numArray = num.split("");
    var specialArray = special.split("");
  
    var newPswdLength = prompt('Enter desired password length (between 8 and 128 characters).')
    while (newPswdLength < 8 || newPswdLength > 128) {
      newPswdLength = prompt('Password must only be between 8 and 128 characters. Please enter again.')
    }
    selectUpper = confirm("Include uppercase characters in your password? Select OK to confirm, CANCEL to opt out.");
    selectLower = confirm("Include lowercase characters in your password? Select OK to confirm, CANCEL to opt out.");
    selectNum = confirm("Include numbers in your password? Select OK to confirm, CANCEL to opt out.");
    selectSpecial = confirm("Include special characters in your password? Select OK to confirm, CANCEL to opt out.")
    if (!selectUpper && !selectLower && !selectNum && !selectSpecial) {
      alert("At least one parameter is required for your password.");
      return "At least one parameter is required for your password. Please try again."
    } else {
      if (selectLower) {
        chosenParameters.push(lowArray);
      }  
      if (selectUpper) {
        chosenParameters.push(upArray);
      }  
      if (selectNum) {
        chosenParameters.push(numArray);
      }  
      if (selectSpecial) {
        chosenParameters.push(specialArray);
      }
    }
    chosenParameters = chosenParameters.flat();
    console.log(chosenParameters);
  
    for (i = 0; i < newPswdLength; i++){
       newPassword.push(chosenParameters[Math.floor(Math.random()*chosenParameters.length)]);
    }
    return newPassword.join("");
  }  