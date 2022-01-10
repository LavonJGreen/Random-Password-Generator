//Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// creating variables to be used to meet criteria
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericCharacters = "0123456789";
var specialCharacters =  !"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var selectUppercase;
var selectNum;
var selectSpecialChar;
var passwordLgth


// promt for password length 
function passwordLength(){
  
  passwordLgth = window.prompt("Choose desired password length: MUST BE BETWEEN 8-128 Characters");

  if(passwordLgth < 8 || passwordLength > 128){
    window.alert("You must select a password length between 8-128.");
    passwordLength();

  } else if(isNaN(passwordLgth)){
    window.alert("You must use a number to determine password lenghth.");
    passwordLength();

  }else{
    window.alert("The next few prompts will ask you what charcater types you would like in your password. \n If you selecto no for every option the password will only have default lowercase letters.")
  }

  return passwordLgth;
};


// Prompt for password inclduing lowercase
/*function lowercaseSelection(){

   selectLowercase = window.prompt("Would you like to include lowercase letters in your password \n(Yes or No) ");

  if(selectLowercase === null || selectLowercase === ""){
    window.alert("Please choose a valid option");
    lowercaseSelection();

  } else if(selectLowercase === "Yes" || selectLowercase === "yes" || selectLowercase === "YES"){
    selectLowercase = true;
    return selectLowercase;

  } else if(selectLowercase === "No" || selectLowercase === "no" || selectLowercase === "NO") {
    selectLowercase = false;
    return selectLowercase;

  } else{
    window.alert("Please choose a valid option");
    lowercaseSelection()

  }

  return selectLowercase;
};*/




// Prompt for password including uppercase
function uppercaseSelection(){

   selectUppercase = window.prompt("Would you like to include Uppercase letters in your password \n(Yes or No) ");

  if(selectUppercase === null || selectUppercase === ""){
    window.alert("Please choose a valid option");
    uppercaseSelection();

  } else if(selectUppercase === "Yes" || selectUppercase === "yes" || selectUppercase === "YES"){
    selectUppercase = true;
    return selectUppercase;

  } else if(selectUppercase === "No" || selectUppercase === "no" || selectUppercase === "NO") {
    selectUppercase = false;
    return selectUppercase;

  } else{
    window.alert("Please choose a valid option");
    uppercaseSelection();

  }
 
  return selectUppercase;
};


// Prompt for password to include numbers
function numberSelection(){

   selectNum = window.prompt("Would you like to include numbers in your password \n(Yes or No) ");

  if(selectNum === null || selectNum === ""){
    window.alert("Please choose a valid option");
    numberSelection();

  } else if(selectNum === "Yes" || selectNum === "yes" || selectNum === "YES"){
    selectNum = true;
    return selectNum;

  } else if(selectNum === "No" || selectNum === "no" || selectNum === "NO") {
    selectNum = false;
    return selectNum;

  } else{
    window.alert("Please choose a valid option");
    numberSelection()

  }

  return selectNum;
};


// Prompt for password to include special chaarcters
function specialCharSelection(){

   selectSpecialChar = window.prompt("Would you like to include special characters in your password \n(Yes or No) ");

  if(selectSpecialChar === null || selectSpecialChar === ""){
    window.alert("Please choose a valid option");
    specialCharSelection();

  } else if(selectSpecialChar === "Yes" || selectSpecialChar === "yes" || selectSpecialChar === "YES"){
    selectSpecialChar = true;
    return selectSpecialChar;

  } else if(selectSpecialChar === "No" || selectSpecialChar === "no" || selectSpecialChar === "NO") {
    selectSpecialChar = false;
    return selectSpecialChar;

  } else{
    window.alert("Please choose a valid option");
    specialCharSelection()

  }

  return selectSpecialChar;
};

function generatePassword(){
  passwordLength();
  console.log(passwordLgth);

  uppercaseSelection();
  console.log(selectUppercase);

  numberSelection();
  console.log(selectNum);

  specialCharSelection();
  console.log(selectSpecialChar);


  var characters = lowercaseLetters;
var password = "";
if (selectUppercase && selectNum && selectSpecialChar){
  characters +=   + selectUppercase + selectNum + selectSpecialChar;

}else if (selectUppercase && selectNum){
  characters += selectUppercase + selectNum ;

}else if (selectNum && selectSpecialChar){
  characters += selectNum + selectSpecialChar;

}else if (selectUppercase && selectSpecialChar){
  characters += selectUppercase + selectSpecialChar;

}else if (selectUppercase){
  characters += uppercaseChar;

}else if(selectNum){
  characters += numberChar;

}else if (selectSpecialChar){
  characters += specialChar;

}else{
  characters === lowercaseLetters;
}

  for(var i = 0; i < passwordLgth; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {

  var password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;

}
        
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
