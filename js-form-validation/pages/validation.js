let getById = (id) => document.getElementById(id);
let getByClass = (classes) => document.getElementsByClassName(classes);

let usernameForm1 = getById("username"),
  emailForm1 = getById("email"),
  passwordForm1 = getById("password"),
  cpasswordForm1 = getById("passwordCheck"),
  form1 = getById("register"),
  errorDisplay = getById("errorDisplay"),
  form2 = getById("login"),
  formContainer = getByClass("form-container"),
  inputs = getByClass("input"),
  small = getByClass("small");

let info = [];

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput(usernameForm1, 0, "Username cannot be blank");
  validateInput(emailForm1, 1, "Email cannot be blank");
  validateInput(passwordForm1, 2, "Password cannot be blank");
  validateInput(cpasswordForm1, 3, "Password Check cannot be blank");
});

// serial is an index of each input, field is the input
function validateInput(field, serial, message) {
  //check username empty
  if (field.value === "") {
    onError(field, `${field.id} is not valid`);
  } else {
    if (!isValidField(field)) {
      onError(field, `${field.id} is not valid`);
    } else {
      onSuccess(field, `${field.id} is valid`);
    }
  }
}

function onSuccess(field, serial, message) {
  let parent = field.parentElement;
  let msgEl = parent.querySelector("small");
  msgEl.style.visibility = "visible";
  msgEl.innerHTML = message;
  parent.classList.add("success");
  parent.classList.remove("error");
  info.push(field.value);
  localStorage.setItem(`${field.id} info`, field.value);
  errorDisplay.style.display = "block";
  errorDisplay.innerText = "Successful submission";
}

function onError(field, serial, message) {
  let parent = field.parentElement;
  let msgEl = parent.querySelector("small");
  msgEl.style.visibility = "visible";
  msgEl.innerHTML = message;
  parent.classList.add("error");
  parent.classList.remove("success");
}

function isValidField(field) {
  if (field === usernameForm1) {
    return /^(?=\S)(?!.*[\s])(?!.*[^\w\s]).{4,}(?:(.).*?(?!\1)){2,}$/.test(
      field.value.trim(),
    );
  } else if (field === emailForm1) {
    return /^(?!.*@example\.com)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/.test(
      field.value.trim(),
    );
  } else if (field === passwordForm1 || field === cpasswordForm1) {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{12,}$/.test(
      field.value.trim(),
    );
  }
}
