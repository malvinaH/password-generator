
var generateBtn = document.querySelector("#generate");

// user input for password length.
function getPasswordLength(){
  do {
    var passwordLength = parseInt(prompt("How many characters do you want to use between 8 and 128"));
  } while (passwordLength <8 || passwordLength > 128);
  return passwordLength;
}

function generatePassword(){
     // DATA - numbers, lowercase characters, uppercase characters, special characters.
    var numbers = "1234567890";
    var lowerCaseCharacters = "absdefghijklmnpqrstuvwxyz";
    var upperCaseCharacters = lowerCaseCharacters.toUpperCase();
    var specialCharacter = "!@#$%^&*()";
    var choices = "";
    var password = "";


    var passwordLength = getPasswordLength();

    // asking for character type to include in the password and put them together
    if (confirm("Would you like to use a number?")) choices += numbers;
    if (confirm("Would you like to use a lowercase character?")) choices += lowerCaseCharacters;
    if (confirm("Would you like to use an uppercase character?")) choices += upperCaseCharacters;
    if (confirm("Would you like to use a special character?")) choices += specialCharacter;
    
    if (!numbers && !lowerCaseCharacters && !upperCaseCharacters && !specialCharacter){
      choices = alert("You must choose a criteria!");
        }

    // randomly select characters fromm all the selected choices and put them together in a string assigned to password var.
    for (var i=0 ; i < passwordLength; i++){
      var randomIndex = Math.floor(Math.random()* choices.length)
      var randomCharacter = choices[randomIndex];
      password += randomCharacter;
    }


    return password
}
    function writePassword(){
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      
      passwordText.value = password;
    }

generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);