// Assignment Code
// function generatePassword(){
  // Data 
var generateBtn = document.querySelector("#generate");

function getPasswordLength(){
  do {
    var passwordLength = parseInt(prompt("How many characters do you want to use between 8 and 128"));
  } while (passwordLength <8 || passwordLength > 128);
  return passwordLength;
}

function generatePassword(){
    // Data
    var numbers = "1234567890";
    var lowerCaseCharacters = "absdefghijklmnpqrstuvwxyz";
    var upperCaseCharacters = lowerCaseCharacters.toUpperCase();
    var specialCharacter = "!@#$%^&*()";
    var choices = "";
    var password = "";


    var passwordLength = getPasswordLength();
    console.log(passwordLength);

    if (confirm("Would you like to use a number?")) choices += numbers;
    if (confirm("Would you like to use a lowercase character?")) choices += lowerCaseCharacters;
    if (confirm("Would you like to use an uppercase character?")) choices += upperCaseCharacters;
    if (confirm("Would you like to use a special character?")) choices += specialCharacter;
}

    function writePassword(){
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      
      passwordText.value = password;
    }

generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);