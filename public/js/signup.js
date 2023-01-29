const signUpfirstName = document.querySelector("#SignUpfirstName");
const signUplastName = document.querySelector("#SignUplastName");
const signUpgender = document.querySelector("#SignUpgender");
const signUpbirthYear = document.querySelector("#SignUpbirthYear");
const signUpuserName = document.querySelector("#SignUpuserName");
const signUpPassword = document.querySelector("#SignUppassword");
const signUpcPassword = document.querySelector("#SignUppassword_");

const errorEl = document.querySelector("#error");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  errorEl.textContent = "";
  checkCorrectSignUp();
});

const checkCorrectSignUp = function () {
  const firstName = signUpfirstName.value.trim();
  const lastName = signUplastName.value.trim();
  const gender = signUpgender.value;
  const birthDate = signUpbirthYear.value;
  const username = signUpuserName.value.trim();
  const password = signUpPassword.value;
  const cpassword = signUpcPassword.value;
  if (
    errorSignUp(
      firstName,
      lastName,
      gender,
      birthDate,
      username,
      password,
      cpassword
    )
  )
    return;

  const data = {
    firstName: signUpfirstName.value,
    lastName: signUplastName.value,
    gender: signUpgender.value,
    dob: signUpbirthYear.value,
    username: signUpuserName.value,
    password: signUpPassword.value,
  };
  fetch(window.location.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 400) {
        res.json().then((data) => {
          error.textContent = data?.error;
        });
      } else if (res.status === 200) {
        res.text().then((data) => {
          document.body.innerHTML = data;
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const errorSignUp = function (f, l, g, b, u, p, cp) {
  if (f === "") {
    displayErrorSignUp("Please Enter First Name");
    return true;
  }
  if (!onlyLetters(f)) {
    displayErrorSignUp("Enter correct First Name");
    return true;
  }
  if (l === "") {
    displayErrorSignUp("Please Enter Last Name");
    return true;
  }
  if (!onlyLetters(l)) {
    displayErrorSignUp("Enter correct Last Name");
    return true;
  }
  if (g === "") {
    displayErrorSignUp("Enter correct gender");
    return true;
  }
  if (b === "") {
    displayErrorSignUp("Enter correct Date");
    return true;
  }
  if (u === "") {
    displayErrorSignUp("Please Enter Username");
    return true;
  }
  if (p === "") {
    displayErrorSignUp("Please Enter Password");
    return true;
  }
  if (p.length < 6) {
    displayErrorSignUp("Password To Weak");
    return true;
  }
  if (cp === "") {
    displayErrorSignUp("Please Enter Password");
    return true;
  }
  if (cp !== p) {
    displayErrorSignUp("Password Doesn't Match");
    return true;
  }
  return false;
};

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

const displayErrorSignUp = function (mess) {
  errorEl.textContent = mess;
};
