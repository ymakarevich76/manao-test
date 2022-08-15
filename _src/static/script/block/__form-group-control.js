const formGroupControl = document.querySelectorAll(".form-group__control");

formGroupControl.forEach((element) => {
  element.addEventListener("input", (evt) => {
    let flag = false;

    if (evt.target.value.length && !flag) {
      evt.target.previousElementSibling.classList.add(
        "form-group__label--active"
      );
      flag = true;
    } else {
      evt.target.previousElementSibling.classList.remove(
        "form-group__label--active"
      );
      flag = false;
    }
  });
});
