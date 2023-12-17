// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
let passwordLength = '';
let includeSpecialChars = '';
let includeNumericChars = '';
let includeUpperCasedChars = '';

function getPasswordOptions() {

  passwordLength = prompt("The password length must be provided as a number, between 8 and 128.");
  while (passwordLength < 8 || passwordLength > 128 || passwordLength == NaN) {
    passwordLength = prompt("The password length must be provided as a number, between 8 and 128.");
  }
  includeSpecialChars = confirm("Press confirm to include special characters.");
  includeNumericChars = confirm("Press confirm to include numeric characters");
  includeUpperCasedChars = confirm("Press confirm to include Uppercase characters");

  //concatenation of arrays
  var arraysConcat = '';

  if (includeSpecialChars == true) {
    arraysConcat = lowerCasedCharacters.concat(specialCharacters)
    if (includeNumericChars == true) {
      arraysConcat = arraysConcat.concat(numericCharacters)
      if (includeUpperCasedChars == true) {
        arraysConcat = arraysConcat.concat(upperCasedCharacters)
      }
    }
  } else if (includeNumericChars == true) {
    arraysConcat = lowerCasedCharacters.concat(numericCharacters)
    if (includeUpperCasedChars == true) {
      arraysConcat = arraysConcat.concat(upperCasedCharacters)
    }
  }
  else if (includeUpperCasedChars == true) {
    arraysConcat = lowerCasedCharacters.concat(upperCasedCharacters)
  }
  else {
    arraysConcat = lowerCasedCharacters;
  }
  return arraysConcat
}

// Function for getting a random element from an array

function getRandom(arr) {
  var random = Math.floor(Math.random() * arr.length);
  return random;
}

// Function to generate password with user input
function generatePassword(arr) {

  var password = ''
  for (let i = 0; i < passwordLength; i++) {
    password += arr[getRandom(arr)]

  }
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  var finalArray = getPasswordOptions()
  var password = generatePassword(finalArray);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);