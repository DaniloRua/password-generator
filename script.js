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
let passwordLenght = '';
let includeSpecialChars = '';
let includeNumericChars = '';
let includeUpperCasedChars = '';
let includeLowerCasedChars = '';

function getPasswordOptions() {

  passwordLenght = prompt("The password length must be provided as a number, between 8 and 128.")
  
  while (passwordLenght < 8 || passwordLenght > 128 || passwordLenght == NaN) {
   passwordLenght = prompt("The password length must be provided as a number, between 8 and 128.")
  }
  includeSpecialChars = confirm("Press confirm to include special characters.")
  includeNumericChars = confirm("Press confirm to include numeric characters")
  includeUpperCasedChars = confirm("Press confirm to include Uppercase characters")
  includeLowerCasedChars = confirm("Press confirm to include lowercase characters")
  console.log(passwordLenght)

}

// Function for getting a random element from an array
function getRandom(arr) {


}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions()
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);