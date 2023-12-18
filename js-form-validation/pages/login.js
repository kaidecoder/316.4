let username2 = document.getElementById("username2");
let password2 = document.getElementById("password2");
// form = document.querySelector("#login");
// let formContainer = document.querySelector(".form-container");
// let msgEl = document.querySelector("#errorDisplay")

function validateInput() {
  //check username empty
  if (username2.value.trim() === "") {
    onError(username2, "UserName2 cannot be empty");
  } else {
    if (!isValidUsername(username2.value.trim())) {
      onError(username2, "Username is not valid");
    } else {
      onSuccess(username2, "username is valid");
    }
  }

  if (password2.value.trim() === "") {
    onError(password2, "Password2 cannot be empty");
  } else {
    if (!isValidPassword(password2.value.trim())) {
      onError(password2, "Password is not valid");
    } else {
      onSuccess(password2, "Password is valid");
    }
  }
}

document.querySelector("#login-btn").addEventListener("click", (e) => {
  e.preventDefault();
  validateInput();
});

function onSuccess(input, msg) {
  let parent = input.parentElement;
  let message = parent.querySelector("small");
  message.style.visibility = "visible";
  message.innerText = msg;
  parent.classList.add("success");
  parent.classList.remove("error");
}

function onError(input, msg) {
  let parent = input.parentElement;
  let message = parent.querySelector("small");
  message.style.visibility = "visible";
  message.innerText = msg;
  parent.classList.add("error");
  parent.classList.remove("success");
}

function isValidUsername(username2) {
  return /^(?=\S)(?!.*[\s])(?!.*[^\w\s]).{4,}(?:(.).*?(?!\1)){2,}$/.test(
    username2,
  );
}

function isValidPassword(password2) {
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*!@$%^&(){}[]:;<>,.?]).{12,}$/.test(
    password2,
  );
}
