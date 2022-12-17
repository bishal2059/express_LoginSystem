"use strict";

const loginEle = document.querySelector("#login");
const userEle = document.querySelector("#username");
const passwordEle = document.querySelector("#password");

loginEle.addEventListener("submit", (e) => {
  e.preventDefault();
  userEle.focus();
  const data = {
    username: userEle.value,
    password: passwordEle.value,
  };
  userEle.value = passwordEle.value = "";
  fetch(window.location.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      // console.log(res);
      if (res.status === 201) return res.text();
      if (res.status === 200) return res.json();
    })
    .then((d) => {
      if (d.length === 1) {
        alert(d[0]);
      } else {
        document.documentElement.innerHTML = d;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
});
