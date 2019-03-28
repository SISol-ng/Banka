//const uploadButton = document.getElementById('uploadphoto');
//const profilephotoField = document.getElementById('profilephoto');
const accountnumberField = document.getElementById('accountnumber');
const amountField = document.getElementById('amount');

//const photoAlert = document.querySelector('div#photoalert');
const accountnumberAlert = document.querySelector('div#accountnumberalert');
const amountAlert = document.querySelector('div#amountalert');

accountnumberField.onblur = () => {
  if (!accountnumberField.value ) {
    accountnumberAlert.innerHTML = 'Please fill in Account Number';
  } else {
    accountnumberAlert.innerHTML = '';
  }
};

accountnumberField.onkeyup = () => {
  if ((!isNaN(accountnumberField.value) && accountnumberField.value.length !== 10) ||  isNaN(accountnumberField.value)) {
    accountnumberAlert.innerHTML = 'Please enter correct Account Number';
  } else {
    accountnumberAlert.innerHTML = '';
  }
};

amountField.onblur = () => {
  if (!amountField.value ) {
    amountAlert.innerHTML = 'Please fill in Credit Amount';
  } else {
    amountAlert.innerHTML = '';
  }
};

amountField.onkeyup = () => {
  if (isNaN(amountField.value)) {
    amountAlert.innerHTML = 'Please enter valid Amount figure';
  } else {
    amountAlert.innerHTML = '';
  }
};

/*profilephotoField.onchange = () => {
	const fileupload = profilephotoField.files[0];
	if (fileupload === '') {
		photoAlert.innerHTML = 'Please select a file to upload';
	} else if (fileupload.size > 204800){
		photoAlert.innerHTML = 'Please select a file of 200kb or less in size';
	}else {
		photoAlert.innerHTML = '';
	}
};*/