/**
 * ! Clean up and refactor the functions
 **/

let getById = (id) => document.getElementById(id);
let getByClasses = (classes) => document.getElementsByClassName(classes);

let usernameForm1 = getById("username"),
  emailForm1 = getById("email"),
  passwordForm1 = getById("password"),
  cpasswordForm1 = getById("passwordCheck"),
  usernameForm2 = getById("username"),
  passwordForm2 = getById("password"),
  errorDisplay = getById("errorDisplay"),
  form1 = getById("register"),
  form2 = getById("login"),
  formContainer = getByClasses("form-container"),
  inputFields = document.querySelectorAll("input");

console.log(inputFields);

let info = [];

/**
 * ! Adding the first form validation
 * **/



form1.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput(usernameForm1, 0, `Username cannot be empty`);
  validateInput(emailForm1, 1, `Email cannot be empty`);
  validateInput(passwordForm1, 2, `Password cannot be empty`);
  validateInput(cpasswordForm1, 3, `Confirm password cannot be empty`);
});

function validateInput(field, serial, message) {
  if (field.value.trim() === "") {
    onError(serial, `${field.id} can't be blank`);
  } else {
    if (!isValidField(field)) {
      onError(serial, `${field.id} is not valid`);
    } else {
      onSuccess(serial, `${field.id} is valid`);
    }
  }
}

function onSuccess(input, message) {
  // console.log(input.value);
  let parent = input.parentElement;
  let msgEl = parent.querySelector("small");

  // Check if username is already in local storage
  if (localStorage.getItem("username") === input.value.trim()) {
    msgEl.style.visibility = "visible";
    msgEl.innerHTML = "This username is already taken.";
    parent.classList.add("error");
    parent.classList.remove("success");
    return;
  }

  msgEl.style.visibility = "visible";
  msgEl.innerHTML = message;
  parent.classList.add("success");
  parent.classList.remove("error");

  small.forEach((item) => {
    if (item.textContent.includes("valid")) {
      errorDisplay.style.display = "block";
      errorDisplay.innerHTML = "Successful submission";
    }
    localStorage.setItem(`${input.id}`, input.value.toLowerCase());
    return item;
  });
  input.value = "";
  errorDisplay.style.display = "none";
}

function onError(input, message) {
  let parent = input.parentElement;
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
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])([^password]).{12,}$/.test(
      field.value.trim(),
    );
  }
}

/**
 * ! Adding a second form validation
 * **/
form2.addEventListener("submit", (e) => {
  e.preventDefault();

  validateFieldForLogin(usernameForm2, 4, "Username cannot be empty");
  validateFieldForLogin(passwordForm2, 5, "Password cannot be empty");
});

function isValidFieldForLogin(field) {
  if (field === usernameForm2) {
    return /^(?=\S)(?!.*[\s])(?!.*[^\w\s]).{4,}(?:(.).*?(?!\1)){2,}$/.test(
      field.value.trim(),
    );
  } else if (field === passwordForm2) {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{12,}$/.test(
      field.value.trim(),
    );
  }
}

function validateFieldForLogin(field, serial, message) {
  if (field.value.trim() === "") {
    onError(serial, `${field.id} is not valid`);
  } else {
    if (!isValidFieldForLogin(field)) {
      onError(serial, `${field.id} is not valid for login`);
    } else {
      // onSuccess(serial, `${field.id} is valid for login`);
      let storedPassword = localStorage.getItem("password");

      if (inputs[serial].value.trim().toLowerCase() === storedPassword) {
        onSuccess(inputs[serial], `${field.id} equals username`);
      } else {
        onError(inputs[serial], `Incorrect ${field.id}`);
      }
    }
  }
}
