//Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// creating variables to be used to meet criteria
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericCharacters = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordLgth;
var selectUppercase;
var selectNum;
var selectSpecialChar;



// promt for password length 
function passwordLength() {

  passwordLgth = window.prompt("Choose desired password length: MUST BE BETWEEN 8-128 Characters");

  if (passwordLgth < 8 || passwordLength > 128) {
    window.alert("You must select a password length between 8-128.");
    passwordLength();

  } else if (isNaN(passwordLgth)) {
    window.alert("You must use a number to determine password lenghth.");
    passwordLength();

  } else {
    window.alert("The next few prompts will ask you what charcater types you would like in your password. \n If you select no for every option the password will only have default lowercase letters.");
  }

  return passwordLgth;
};

// Prompt for password including uppercase
function uppercaseSelection() {

  selectUppercase = window.prompt("Would you like to include Uppercase letters in your password \n(Yes or No) ");


  if (selectUppercase === null || selectUppercase === "") {
    window.alert("Please choose a valid option");
    uppercaseSelection();

  } else if (selectUppercase === "Yes" || selectUppercase === "yes" || selectUppercase === "YES") {
    selectUppercase = true;
    return selectUppercase;

  } else if (selectUppercase === "No" || selectUppercase === "no" || selectUppercase === "NO") {
    selectUppercase = false;
    return selectUppercase;

  } else {
    window.alert("Please choose a valid option");
    uppercaseSelection();

  }

  return selectUppercase;
};


// Prompt for password to include numbers
function numberSelection() {

  selectNum = window.prompt("Would you like to include numbers in your password \n(Yes or No) ");

  if (selectNum === null || selectNum === "") {
    window.alert("Please choose a valid option");
    numberSelection();

  } else if (selectNum === "Yes" || selectNum === "yes" ) {
    selectNum = true;
    return selectNum;

  } else if (selectNum === "No" || selectNum === "no") {
    selectNum = false;
    return selectNum;

  } else {
    window.alert("Please choose a valid option");
    numberSelection()

  }

  return selectNum;
};


// Prompt for password to include special chaarcters
function specialCharSelection() {

  selectSpecialChar = window.prompt("Would you like to include special characters in your password \n(Yes or No) ");

  if (selectSpecialChar === null || selectSpecialChar === "") {
    window.alert("Please choose a valid option");
    specialCharSelection();

  } else if (selectSpecialChar === "Yes" || selectSpecialChar === "yes") {
    selectSpecialChar = true;
    return selectSpecialChar;

  } else if (selectSpecialChar === "No" || selectSpecialChar === "no") {
    selectSpecialChar = false;
    return selectSpecialChar;

  } else {
    window.alert("Please choose a valid option");
    specialCharSelection()

  }

  return selectSpecialChar;
};


// this functions combines the values to generate the random password
function generatePassword() {
  passwordLength();
  console.log(passwordLgth);

  uppercaseSelection();
  console.log(selectUppercase);

  numberSelection();
  console.log(selectNum);

  specialCharSelection();
  console.log(selectSpecialChar);

  // This code concatenates the variable saved to be called if selected by the user
  var characters = lowercaseLetters;
  var password = "";
  if (selectUppercase && selectNum && selectSpecialChar){
    characters += uppercaseLetters + numericCharacters + specialCharacters;
  } else if (selectUppercase && selectNum) {
    characters += uppercaseLetters + numericCharacters;
  } else if (selectNum && selectSpecialChar) {
    characters += numericCharacters + specialCharacters;
  } else if (selectUppercase && selectSpecialChar) {
    characters += uppercaseLetters + specialCharacters;
  } else if (selectUppercase) {
    characters += uppercaseLetters;
  } else if (selectNum) {
    characters += numericCharacters;
  } else if (selectSpecialChar) {
    characters += specialCharacters;
  } else {
    characters === lowercaseLetters;
  }

  // using charAt to select charcetrs from all the variables and usuing Math to make sure all numbers are whole numbers
  
  for (var i = 0; i < passwordLgth; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
};


// Write password to the #password input
function writePassword() {

  var passwordCreate = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordCreate;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
