const signupButton = document.getElementById('signupButton');
const firstnameField = document.getElementById('firstname');
const lastnameField = document.getElementById('lastname');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phonenumber');
const categoryField = document.getElementById('category');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const repasswordField = document.getElementById('repassword');

const firstnameAlert = document.querySelector('div#firstnamealert');
const lastnameAlert = document.querySelector('div#lastnamealert');
const emailAlert = document.querySelector('div#emailalert');
const phoneAlert = document.querySelector('div#phonealert');
const categoryAlert = document.querySelector('div#categoryalert');
const usernameAlert = document.querySelector('div#usernamealert');
const passwordAlert = document.querySelector('div#passwordalert');
const repasswordAlert = document.querySelector('div#repasswordalert');
const pageAlert = document.querySelector('div#pagealert');

//const regEx = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

let validation = true;

/*function isValidPassword(value) {
  if (!/[a-z]/.test(value)) {
    return 'Your password must contain at least one lowercase letter';
  } if (!/[A-Z]/.test(value)) {
    return 'Your password must contain at least one uppercase letter';
  } if (!/\d/.test(value)) {
    return 'Your password must contain at least one number';
  } if (!/[!@#$%&*-+\/\\?]/.test(value)) {
    return 'Your password must contain at least one of these characters: !, @, #, $, %, &, *, -, +, /, \';
  } if (value.length < 6) {
    return 'Your password must be composed of at least 6 characters';
  }
  return true;
}*/

firstnameField.onblur = () => {
  if (!firstnameField.value ) {
    firstnameAlert.innerHTML = 'Please fill in your First name';
	validation = false;
  } else {
    firstnameAlert.innerHTML = '';
  }
};

lastnameField.onblur = () => {
  if (!lastnameField.value ) {
    lastnameAlert.innerHTML = 'Please fill in your Last name';
	validation = false;
  } else {
    lastnameAlert.innerHTML = '';
  }
};

emailField.onblur = () => {
  if (!emailField.value ) {
    emailAlert.innerHTML = 'Please fill in your email address';
	validation = false;
  //} else if (regEx.test(emailField.value);) {
 //   emailAlert.innerHTML = 'Please enter email address';
  } else {
    emailAlert.innerHTML = '';
  }
};

phoneField.onblur = () => {
  if (phoneField.value && (phoneField.length !== 14 || phoneField.charAt(0) !== '+')) {
    phoneAlert.innerHTML = 'Please enter correct phone number (e.g +2348098765432)';
	validation = false;
  } else {
    phoneAlert.innerHTML = '';
  }
};

usernameField.onblur = () => {
  if (!usernameField.value ) {
    usernameAlert.innerHTML = 'Please fill in your Username';
	validation = false;
  } else {
    usernameAlert.innerHTML = '';
  }
};

passwordField.onblur = () => {
  if (!passwordField.value ) {
    passwordAlert.innerHTML = 'Please fill in your Password';
	validation = false;
  /*} else if (!isValidPassword(passwordField.value)){
	  passwordAlert.innerHTML = isValidPassword(passwordField.value);*/
  }else {
    passwordAlert.innerHTML = '';
  }
};

repasswordField.onblur = () => {
  if (!repasswordField.value ) {
    repasswordAlert.innerHTML = 'Please re-enter your password';
	validation = false;
  } else if (repasswordField.value !== passwordField.value) {
    repasswordAlert.innerHTML = 'Password does not match';
	validation = false;
  } else {
    repasswordAlert.innerHTML = '';
  }
};

categoryField.onblur = () => {
  if (!categoryField.value ) {
    categoryAlert.innerHTML = 'Please select staff category';
	validation = false;
  } else {
    categoryAlert.innerHTML = '';
  }
};