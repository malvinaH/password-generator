// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // Data
  // we need to know the number of characters
  // different sets of character : numbers, lowercase, uppercase, special char
  // whether they chose numbers, lowercase, uppercase or special character

  // promt questions 
      // how many char? (between 8-128)
      // lowercase? Y/N
      // uppercase? Y/N
      // special character? Y/N

  // put selected character together

  // rendomly select characters from pool

  // put them together

  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var password = "";
  
  const aNumber = Number(window.prompt("How many characters do you want to use between 8 and 128?", ""));
  prompt("Do you want to use numbers?");
  prompt("Do you want to use lowercase characters?")
  prompt("Do you want ot use uppercase characters?")
  prompt("Do you want to use special characters?")
  
  passwordLength = aNumber;
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
