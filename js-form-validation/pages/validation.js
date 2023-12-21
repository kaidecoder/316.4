/**
 * ! Clean up and refactor the functions
 **/

let usernameForm1 = document.getElementById("username");
let emailForm1 = document.getElementById("email");
let passwordForm1 = document.getElementById("password");
let cpasswordForm1 = document.getElementById("passwordCheck");
let errorDisplay = document.querySelector("#errorDisplay");
let form = document.querySelector("#register");
let form2 = document.querySelector("#login");
let formContainer = document.querySelector(".form-container");
let inputFields = document.querySelectorAll("input");

console.log(inputFields);

let info = [];
document.querySelector("#register").addEventListener("click", (e) => {
  e.preventDefault();

  validateInput(usernameForm1, 0, `Username cannot be empty`);
  validateInput(emailForm1, 1, `Email cannot be empty`);
  validateInput(passwordForm1, 2, `Password cannot be empty`);
  validateInput(cpasswordForm1, 3, `Confirm password cannot be empty`);
});

function validateInput(inputField, serial, message){
  if(inputFields[serial].value.trim() === ""){
    onError(serial, `${inputFields[serial].id} can't be blank`)
  }
}

// function validateInput() {
//   //check username empty
//   if (username.value.trim() === "") {
//     onError(username, "UserName cannot be empty");
//   } else {
//     if (!isValidUsername(username.value.trim())) {
//       onError(username, "Username is not valid");
//     } else {
//       onSuccess(username, "username is valid");
//     }
//   }
//   if (email.value.trim() === "") {
//     onError(email, "Email cannot be empty");
//   } else {
//     if (!isValidEmail(email.value.trim())) {
//       onError(email, "Email is not valid");
//     } else {
//       onSuccess(email, "Email is valid");
//     }
//   }
//   if (password.value.trim() === "") {
//     onError(password, "Password cannot be empty");
//   } else {
//     if (!isValidPassword(password.value.trim())) {
//       onError(password, "Password is not valid");
//     } else {
//       onSuccess(password, "Password is valid");
//     }
//   }
//   if (cpassword.value.trim() === "") {
//     onError(cpassword, "Confirm password cannot be empty");
//   } else {
//     if (!isValidCPassword(cpassword.value.trim())) {
//       onError(cpassword, "Confirm password is not valid");
//     } else {
//       onSuccess(cpassword, "Confirm Password is valid");
//     }
//   }
// }






function onSuccess(input, message) {
  // console.log(input.value);
  let parent = input.parentElement;
  let msgEl = parent.querySelector("small");
  msgEl.style.visibility = "visible";
  msgEl.innerText = message;
  parent.classList.add("success");
  parent.classList.remove("error");
  info.push(input.value);
  localStorage.setItem("form info:", info);
  small.forEach((item) => {
    if (item.textContent.includes("valid")) {
      errorDisplay.style.display = "block";
      errorDisplay.innerText = "Successful submission";
    }
    return item
  });
  // inputs.forEach(input => {
  //   if(item.textContent.includes("valid")){

  //     input.reset()
  //   }
  // })
}

function onError(input, message) {
  let msgEl = document.querySelector("small");
  msgEl.style.visibility = "visible";
  msgEl.innerText = message;
  msgEl.classList.add("error");
  msgEl.classList.remove("success");
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
        onSuccess(inputs[6], "username is valid");
      }
    }
    if (inputs[7].value.trim() === "") {
      onError(inputs[7], "Password cannot be empty");
    } else {
      if (!isValidPassword(password2.value.trim())) {
        onError(inputs[7], "Password is not valid");
      } else {
        onSuccess(inputs[7], "Password is valid");
      }
    }
  }  