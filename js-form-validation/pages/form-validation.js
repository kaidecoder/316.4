let username = document.getElementById("username");
let email = document.getElementById("email");
let form = document.querySelector("#register");
let form2 = document.querySelector("#login");
let password = document.getElementById("password");
let cpassword = document.getElementById("passwordCheck");
let formContainer = document.querySelector(".form-container");
let errorDisplay = document.querySelector("#errorDisplay");
let inputs = document.querySelectorAll("input");
let small = document.querySelectorAll("small");
console.log(inputs);

function validateInput() {
  //check username empty

  if (username.value.trim() === "") {
    onError(username, "UserName cannot be empty");
  } else {
    if (!isValidUsername(username.value.trim())) {
      onError(username, "Username is not valid");
    } else {
      onSuccess(username, "username is valid");
    }
  }
  if (email.value.trim() === "") {
    onError(email, "Email cannot be empty");
  } else {
    if (!isValidEmail(email.value.trim())) {
      onError(email, "Email is not valid");
    } else {
      onSuccess(email, "Email is valid");
    }
  }
  if (password.value.trim() === "") {
    onError(password, "Password cannot be empty");
  } else {
    if (!isValidPassword(password.value.trim())) {
      onError(password, "Password is not valid");
    } else {
      onSuccess(password, "Password is valid");
    }
  }
  if (cpassword.value.trim() === "") {
    onError(cpassword, "Confirm password cannot be empty");
  } else {
    if (!isValidCPassword(cpassword.value.trim())) {
      onError(cpassword, "Confirm password is not valid");
    } else {
      onSuccess(cpassword, "Confirm Password is valid");
    }
  }
}

document.querySelector("#register").addEventListener("click", (e) => {
  e.preventDefault();
  validateInput();
});

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

function isValidUsername(username) {
  return /^(?=\S)(?!.*[\s])(?!.*[^\w\s]).{4,}(?:(.).*?(?!\1)){2,}$/.test(
    username,
  );
}

function isValidEmail(email) {
  return /^(?!.*@example\.com)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/.test(
    email,
  );
}

function isValidPassword(password) {
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])([^password]).{12,}$/.test(
    password,
  );
}

function isValidCPassword(cpassword) {
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])([^password]).{12,}$/.test(
    cpassword,
  );
}

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  validateLoginInput(inputs);
});

function validateLoginInput(inputs) {
  console.log("inside login");
  if (inputs[6].value.trim() === "") {
    onError(inputs[6], "UserName cannot be empty");
  } else {
    if (!isValidUsername(username2.value.trim())) {
      onError(inputs[6], "Username is not valid");
    } else {
      onSuccess(inputs[6], "username equals username");
    }
  }
  if (inputs[7].value.trim() === "") {
    onError(inputs[7], "Password cannot be empty");
  } else {
    let storedPassword = localStorage.getItem("password");

    if (inputs[7].value.trim().toLowerCase() === storedPassword) {
      onSuccess(inputs[7], "Password equals password");
    } else {
      onError(inputs[7], "Incorrect password");
    }
  }
}
