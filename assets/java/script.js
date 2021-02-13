// Assignment code here

var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['~','!','@','#','$','%','^','&','*','(',')','_','+'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  if (isNaN(length) == true) {
    alert('Password length must be provided as a number');
    return;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters long.');
    return;
  }

  if (length > 128) {
    alert('Password lenght must not be more than 129 characters long.');
    return
  }

  var hasNumericCharacters = confirm('click OK to include numeric characters.');
  var hasSpecialCharacters = confirm('click OK to include special characters.');
  var hasUpperCasedCharacters = confirm('click OK to include uppercased characters.');
  var hasLowerCasedCharacters = confirm('click OK to include lowercased characters.');

  if (
    hasNumericCharacters == false &&
    hasSpecialCharacters == false &&
    hasUpperCasedCharacters == false &&
    hasLowerCasedCharacters == false
  ) {
    alert('Must pick at least one character type.');
    return;
  }

  var getPasswordOptions = {
    length: length,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
  };
  return getPasswordOptions;
  
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex]
  return randElement;
}
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
}














// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
