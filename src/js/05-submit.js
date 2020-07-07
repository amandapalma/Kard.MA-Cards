"use strict";
//LISTENERS
fullName.addEventListener("keyup", () => {
  valueInput();
  validateForm();
});
job.addEventListener("keyup", () => {
  valueInput();
  validateForm();
});
selectImagen.addEventListener("change", () => {
  valueInput;
  validateForm;
});
email.addEventListener("keyup", () => {
  valueInput();
  validateForm();
});
telephone.addEventListener("keyup", () => {
  valueInput();
  validateForm();
});
linkedIn.addEventListener("keyup", () => {
  valueInput();
  validateForm();
});
gitHub.addEventListener("keyup", () => {
  valueInput();
  validateForm();
});
resetButton.addEventListener("click", resetForm);

// FUNCIÓN PARA VALIDAR EL FORMULARIO:

function validateForm() {
  if (
    infoPerson.name.length < 1 ||
    infoPerson.job.length < 1 ||
    infoPerson.email.length < 1 ||
    infoPerson.phone.length < 1 ||
    infoPerson.linkedin.length < 1 ||
    infoPerson.github.length < 1
  ) {
    submitButton.setAttribute("disabled", "disabled");
  } else {
    submitButton.removeAttribute("disabled");
    submitButton.classList.remove("cursor__btn__submit");
  }
}

submitButton.addEventListener("click", sendData);

// GENERAR URL DE LA TARJETA

const responseURL = document.querySelector(".response");

function sendData(ev) {
  ev.preventDefault();
  sendRequest(infoPerson);
}

function sendRequest(json) {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  if (result.success) {
    responseURL.innerHTML =
      "<a href=" + result.cardURL + ">" + result.cardURL + "</a>";
  } else {
    responseURL.innerHTML = "ERROR:" + result.error;
  }
}
