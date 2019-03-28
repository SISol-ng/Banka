const oldPasswordField = document.getElementById('oldpassword');
const newPasswordField = document.getElementById('newpassword');
const rePasswordField = document.getElementById('repassword');

const oldPasswordAlert = document.querySelector('div#oldpasswordalert');
const newPasswordAlert = document.querySelector('div#newpasswordalert');
const rePasswordAlert = document.querySelector('div#repasswordalert');

function goBack() {
	window.history.back();
}
		
function showPassword (){
	const oldPasswordInput = document.getElementById("oldpassword");
	const newPasswordInput = document.getElementById("newpassword");
	const rePasswordInput = document.getElementById("repassword");
	if (oldPasswordInput.type === "password" && newPasswordInput.type === "password" && rePasswordInput.type === "password"){
		oldPasswordInput.type = "text";
		newPasswordInput.type = "text";
		rePasswordInput.type = "text";
	}else{
		oldPasswordInput.type = "password";
		newPasswordInput.type = "password";
		rePasswordInput.type = "password";
	}
}

oldPasswordField.onblur = () => {
  if (!oldPasswordField.value) {
    oldPasswordAlert.innerHTML = 'Please fill in your old password';
  } else {
    oldPasswordAlert.innerHTML = '';
  }
};

newPasswordField.onblur = () => {
  if (!newPasswordField.value ) {
    newPasswordAlert.innerHTML = 'Please fill in your new Password';
  } else {
    newPasswordAlert.innerHTML = '';
  }
};

rePasswordField.onblur = () => {
  if (!rePasswordField.value ) {
    rePasswordAlert.innerHTML = 'Please re-enter your password';
  } else if (rePasswordField.value !== newPasswordField.value) {
    rePasswordAlert.innerHTML = 'Password does not match';
  } else {
    rePasswordAlert.innerHTML = '';
  }
};