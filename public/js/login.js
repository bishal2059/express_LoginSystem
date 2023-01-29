"use strict";

const loginEle = document.querySelector("#login");
const userEle = document.querySelector("#username");
const passwordEle = document.querySelector("#password");
const error = document.querySelector("#error");

loginEle.addEventListener("submit", (e) => {
  e.preventDefault();
  error.textContent = "";
  userEle.focus();
  const data = {
    userName: userEle.value,
    password: passwordEle.value,
  };
  userEle.value = passwordEle.value = "";
  fetch("http://localhost:3000/", {
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
      console.error(err.message);
    });
});
