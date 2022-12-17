const signUpfirstName = document.querySelector("#SignUpfirstName");
const signUplastName = document.querySelector("#SignUplastName");
const signUpgender = document.querySelector("#SignUpgender");
const signUpbirthYear = document.querySelector("#SignUpbirthYear");
const signUpuserName = document.querySelector("#SignUpuserName");
const signUpPassword = document.querySelector("#SignUppassword");
const signUpcPassword = document.querySelector("#SignUppassword_");

document.querySelector("form").addEventListener("click", function (e) {
  e.preventDefault();
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
  //Post request follows:
  const data = {
    firstName: signUpfirstName.value,
    lastName: signUplastName.value,
    gender: signUpgender.value,
    dob: new Date(signUpbirthYear).toISOString,
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
      if (res.status === 201) return res.text();
      if (res.status === 200) return res.json();
    })
    .then((data) => {
      if (data.length === 1) alert(data[0]);
      else document.documentElement.innerHTML = data;
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
  alert(mess);
};
