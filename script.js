// Assignment code here


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


function generatePassword(){
  var confirmcharc = ""


  var passwordlength = prompt("How many character you want in your password? Pick a number 8 - 128")
  
  
  if (passwordlength === null){
    alert("You must choose a number");
    generatePassword()
  }



    // if (passwordlength <= 7 || passwordlength =>129)
    //     alert("You must choose a number");
  
  var lowercase = confirm("Will this password contain lowercase characters?")
  var uppercase = confirm("Will this password contain uppercase characters?")
  var numbers = confirm("Will this password contain numbers?")
  var specialcharc = confirm("Will this password contain special characters?")

  


  

  if(lowercase === true) {
    confirmcharc = confirmcharc +"abcdefghijklmnopqrstuvwxwz"
  }

  if(uppercase === true) {
    confirmcharc = confirmcharc +"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if(numbers === true) {
    confirmcharc = confirmcharc +"1234567890"
  }

  if(specialcharc === true) { 
    confirmcharc = confirmcharc +"!@#$%^&*()_+"
  }


  var generatedpassword = ""
  for (let i = 0; i < passwordlength; i++) {
    generatedpassword = generatedpassword + confirmcharc.charAt(Math.floor(Math.random()*confirmcharc.length))
   }

   
   return generatedpassword;   
}






  
