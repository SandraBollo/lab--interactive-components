/* 02 - FORM VALIDATION :: YOUR CODE BELOW */
var  registerForm = document.forms['registration-form']

// console.log(registerForm);

document.querySelector('.btn').addEventListener('click', function validation(e) {
  e.preventDefault()
  // console.log('funciona');
  var  texValidationName = registerForm.querySelector('.validation--username')
  // console.log(texValidationName);
  var userName = registerForm.elements.username.value
  // console.log(userName);
  if(userName ===''){
    texValidationName.textContent = 'username cannot be _blank'
  }else if (userName !== '') {
    texValidationName.textContent = 'Success'
  }
  var password = registerForm.elements.userpassword.value
  var textValidationPasseord = registerForm.querySelector('.validation--user-password')

  if (password.length < 8) {
    textValidationPasseord.textContent = 'passwords must '
  }else if (password.length >=8 ) {
    textValidationPasseord.textContent = 'Success'

  }

  var confirmpassword = registerForm.elements.confirmpassword.value
  var textValidationConfirmPassaword = registerForm.querySelector('.validation--confirm-password')

 if(confirmpassword === password && confirmpassword !== ''){
   textValidationConfirmPassaword.textContent = 'sucess'
 }else {
   textValidationConfirmPassaword.textContent = 'passwords must match'
 }
var number = registerForm.elements.taxid.value
var numberValidation = registerForm.querySelector('.validation--tax-id')

if(number.length === 10 && / ^([0-9]{10})$/i.test(number)){
  numberValidation.textContent ='bien'
}else if (number === '') {
  numberValidation.textContent ='no hay texto'
} else{
  numberValidation.textContent ='mal'
}

 var account = registerForm.elements.account
 var selectItem = account.options[account.selectedIndex]
 var texValidationSelected = registerForm.querySelector('.validation--account')
 // console.log("_____________hola",account.option);

if(selectItem.value == ''){
texValidationSelected.textContent = "Mus"

}else{
  texValidationSelected.textContent.textContent = 'Success'
}


var termsofservice = registerForm.elements.termsofservice

var resultBoxEl =  registerForm.querySelector('.validation--terms-of-service')

if(termsofservice.checked === true){
  resultBoxEl.textContent = 'Yes You are VERY old...'
} else {
  resultBoxEl.textContent = 'Not so old, or sexy'
}


})
