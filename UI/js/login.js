const loginButton = document.getElementById('loginButton');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');

const usernameAlert = document.querySelector('div#usernamealert');
const passwordAlert = document.querySelector('div#passwordalert');
const pageAlert = document.querySelector('div#pagealert');

usernameField.onblur = () => {
  if (!usernameField.value ) {
    usernameAlert.innerHTML = 'Please fill in your username or email address';
  } else {
    usernameAlert.innerHTML = '';
  }
};

passwordField.onblur = () => {
  if (!passwordField.value ) {
    passwordAlert.innerHTML = 'Please fill in your password';
  } else {
    passwordAlert.innerHTML = '';
  }
};

loginButton.onclick = () => {
  const username = usernameField.value;
  const password = passwordField.value;

  if (!password.trim()) {
    passwordAlert.innerHTML = 'Please fill in your password';
    return;
  }
  passwordAlert.innerHTML = '';
  
  if (!username.trim()) {
    usernameAlert.innerHTML = 'Please fill in your username or email address';
    return;
  }
  usernameAlert.innerHTML = '';
  
  if (usernameAlert.innerHTML == '' || passwordAlert.innerHTML == '') {
    pageAlert.innerHTML = 'Please correct the errors in red below';
  } else {
    pageAlert.innerHTML = '';
  }
};
