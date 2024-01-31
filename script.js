window.onload = () => {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
    document.getElementById("email").oninput = checkEmail;
    document.getElementById('password').oninput = checkPassword;
    document.getElementById('conf-password').oninput = checkPassword;
  };

function checkPassword(){
    const password = document.getElementById('password');
    const confPassword = document.getElementById('conf-password');
    const passwordError = document.getElementById('password-error');
    if(password.value === confPassword.value){
        password.setCustomValidity("");
        confPassword.setCustomValidity("");
        passwordError.textContent = "";
    }else{
        password.setCustomValidity("Passwords don't match");
        confPassword.setCustomValidity("Dont match");
        passwordError.textContent = "Passwords don't match";
    }
}
  
function checkEmail(){
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    if(!email.checkValidity()){
        emailError.textContent = 'Please input a valid email';
    }
    else{
        emailError.textContent = '';
    }
}

function checkZIP() {
    const constraints = {
      ch: [
        "^(CH-)?\\d{4}$",
        "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
      ],
      fr: [
        "^(F-)?\\d{5}$",
        "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
      ],
      de: [
        "^(D-)?\\d{5}$",
        "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
      ],
      nl: [
        "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
        "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
      ],
    };
  
    const country = document.getElementById("Country").value;
  
    const ZIPField = document.getElementById("ZIP");
    const zipError = document.getElementById('zip-error');
  
    const constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);
  
    if (constraint.test(ZIPField.value)) {
      ZIPField.setCustomValidity("");
      zipError.textContent = '';
    } else {
      ZIPField.setCustomValidity('invalid');
      zipError.textContent = constraints[country][1];
    }
  }
  