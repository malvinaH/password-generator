
var generateBtn = document.querySelector("#generate");

// DATA - numbers, lowercase characters, uppercase characters, special characters.
var numbers = "1234567890";
var lowerCaseCharacters = "absdefghijklmnpqrstuvwxyz";
var upperCaseCharacters = lowerCaseCharacters.toUpperCase();
var specialCharacters = "!@#$%^&*()";
var choices = "";
var password = "";

// user input for password length.
function getPasswordLength(){
    do {
      var passwordLength = parseInt(prompt("How many characters do you want to use between 8 and 128"));
    } while (passwordLength < 8 || passwordLength > 128);

    return passwordLength;
}

function generatePassword(){

    var passwordLength = getPasswordLength();

    // asking for at least one character type to include in the password and put them together
    choices = getSelection();
    if (choices === "") {
        do {
          alert("You must choose a criterion!");
          choices = getSelection();
        } while (choices === "")
    }
    // randomly select characters fromm all the selected choices and put them together in a string assigned to password var.
    for (var i=0 ; i < passwordLength; i++){
      var randomIndex = Math.floor(Math.random()* choices.length)
      var randomCharacter = choices[randomIndex];
      password += randomCharacter;
    }

    return password;
}

  function getSelection() {
      let choice = "";

      if (confirm("Would you like to use a number?")) choice += numbers;
      if (confirm("Would you like to use a lowercase character?")) choice += lowerCaseCharacters;
      if (confirm("Would you like to use an uppercase character?")) choice += upperCaseCharacters;
      if (confirm("Would you like to use a special character?")) choice += specialCharacters;

      return choice;
  }

function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
