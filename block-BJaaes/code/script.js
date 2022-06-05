let form = document.querySelector("form");
let usernameError,
  nameError,
  emailError,
  phoneError,
  confirmError = "";

function containNumber(string) {
  return string.split("").some((e) => Number(e));
}

function handleSubmit(event) {
  event.preventDefault();
  let usernameElm = event.target.elements.username;
  let nameElm = event.target.elements.name;
  let emailElm = event.target.elements.email;
  let phoneElm = event.target.elements.phone;
  let passwordElm = event.target.elements.password;
  let confirmElm = event.target.elements.confirmPsd;

  let parentElm = usernameElm.parentElement;
  let parentElm1 = nameElm.parentElement;
  let parentElm2 = emailElm.parentElement;
  let parentElm3 = phoneElm.parentElement;
  let parentElm4 = confirmElm.parentElement;

  if (usernameElm.value === "") {
    usernameError = "Can't be empty";
    parentElm.classList.add("error");
  } else if (usernameElm.value.length < 4) {
    usernameError = "Can't be less than 4 characters";
    parentElm.classList.add("error");
  } else {
    usernameError = "";
    parentElm.classList.add("success");
    parentElm.classList.remove("error");
  }

  if (nameElm.value === "") {
    nameError = "Can't be empty";
    parentElm1.classList.add("error");
  } else if (containNumber(nameElm.value)) {
    nameError = "Can't be a number";
    parentElm1.classList.add("error");
  } else {
    nameError = "";
    parentElm1.classList.add("success");
    parentElm1.classList.remove("error");
  }

  if (!emailElm.value.includes("@")) {
    emailError = "Must include @";
    parentElm2.classList.add("error");
  } else if (emailElm.value.split("@").length <= 6) {
    emailError = "Email must contain minimum 6 characters";
    parentElm2.classList.add("error");
  } else {
    emailError = "";
    parentElm2.classList.add("success");
    parentElm2.classList.remove("error");
  }

  if (!phoneElm.value.length >= 7 || phoneElm.value.length <= 10) {
    phoneError = "Number should be more than 7 and less than 10";
    parentElm3.classList.add("error");
  } else {
    phoneError = "";
    parentElm3.classList.add("success");
    parentElm3.classList.remove("error");
  }

  if (passwordElm.value !== confirmElm.value) {
    confirmError = "Password and confirm password should be same";
    parentElm4.classList.add("error");
  } else {
    confirmError = "";
    parentElm4.classList.add("success");
    parentElm4.classList.remove("error");
  }

  usernameElm.nextElementSibling.innerText = usernameError;
  nameElm.nextElementSibling.innerText = nameError;
  emailElm.nextElementSibling.innerText = emailError;
  phoneElm.nextElementSibling.innerText = phoneError;
  confirmElm.nextElementSibling.innerText = confirmError;
}

form.addEventListener("submit", handleSubmit);
