const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('input[name="email"]');
const inputName = document.querySelector('input[name="name"]');

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function isNameValid(value) {
  return value.length >= 3;
}

function onInput() {

  if (!isEmailValid(input.value)) {
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "#7e779a";
  }
  if (!isNameValid(inputName.value)) {
    inputName.style.borderColor = "red";
  } else {
    inputName.style.borderColor = "#7e779a";
  }

  if (isEmailValid(input.value) && isNameValid(inputName.value)) {
    input.style.borderColor = "#7e779a";
    inputName.style.borderColor = "#7e779a";
    modalOpen();
    const formData = new FormData(form);

    for (const value of formData.values()) {
      if (value !== "") {
        console.log(value);
      }
    }
    setTimeout(() => {
      form.reset();
      input.style.borderColor = "#7e779a";
      inputName.style.borderColor = "#7e779a";
      console.clear();
    }, 3000);
  }
}

const modal = document.querySelector(".modal"),
  btnCloseModal = modal.querySelector("[data-close]");

const modalOpen = () => {
  modal.classList.add("show", "fade");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

const modalClose = () => {
  modal.classList.remove("show", "fade");
  modal.classList.add("hide");
  document.body.style.overflow = "";
};

modal.addEventListener("click", (event) => {
  if (event.target === modal || event.target === btnCloseModal) {
    modalClose();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.classList.contains("show")) {
    modalClose();
  }
});

const formsWork = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onInput();

    setTimeout(() => {
      modalClose("[data-modal]");
    }, 4000);
  });
};

formsWork();
