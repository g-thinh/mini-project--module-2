// ####################### TERM VALIDATION ####################################

// const checkBox = document.getElementById("agree-check").nodeValue;
// console.log(checkBox);

function check() {
  //if terms are not checked, display window alert
  if (!document.getElementById("agree-check").checked) {
    window.alert("Please agree to the terms of service before submitting");
    //need to exit out of the function, otherwise the form resets
    //and user is unable to continue
    return;
  }
}

// ####################### SUBMIT FORM #########################################

const password1 = document.getElementById("pw1");
const password2 = document.getElementById("pw2");
const warning = document.getElementById("warning");
const warningText = document.getElementById("warningText");



//Display Message Warning when Passwords dont match
function passwordsNoMatch() {
  // document.getElementById("noMatch").style.display = "flex";
  warning.style.display = "flex";
  warning.innerText = "Your passwords don't match!";
  password2.style.border = '3px solid hsl(333deg, 100%, 44%)';
}

function passwordsTooShort() {
  //document.getElementById("pwTooShort").style.display = "flex";
  warning.style.display = "flex";
  warning.innerText =
    "Your password is too short! Must be at least 10 characters long";
  password1.style.border = '3px solid hsl(333deg, 100%, 44%)';
}

function resetWarnings() {
  // document.getElementById("noMatch").style.display = "none";
  // document.getElementById("pwTooShort").style.display = "none";

  warning.style.display = "none";
  //reverts border to default
  password2.style.border = '1px solid #ccc';
  password1.style.border = '1px solid #ccc';
}




const submit = document.getElementById("myForm");

//listener event is the submit from the form
submit.addEventListener('submit', function submitForm() {

  resetWarnings();

  //prevents erasing already typed in form
  event.preventDefault();
  // console.log(`your first password is ${password1.value}`);
  // console.log(`your second password is ${password2.value}`);

  if(password1.value !== password2.value) {
    // console.log("Passwords dont match!");
    passwordsNoMatch();
    return;
  }

  if(password1.value.length < 10) {
    // console.log("Password is too short!");
    passwordsTooShort();
    return;
  }

  if (!document.getElementById("agree-check").checked) {
    window.alert("Please agree to the terms of service before submitting");
    return;
  }

  document.getElementById("myForm").submit();
  window.alert("Form received! Thank you!");
});

// ######################## CLEAR BUTTON #####################################

const clearBtn = document.getElementById("btn1");
const inputFields = document.querySelectorAll(".input-field input");
// console.log(inputFields);

clearBtn.addEventListener('click', function() {
  inputFields.forEach(field => {
    field.value = '';
  })
  resetWarnings();
  document.getElementById("agree-check").checked = false;
})