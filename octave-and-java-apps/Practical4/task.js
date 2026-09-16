function validateForm({ formId, formValidClass, formInvalidClass, inputErrorClass }) {
  const form = document.getElementById(formId);
  if (!form) return;

  const inputs = form.querySelectorAll("input");

  // ---- Validate a single input ----
  function validateInput(input) {
    let isValid = true;
    const value = input.value.trim();
    const rules = input.dataset;

    // Check required
    if (rules.required !== undefined && value === "") {
      isValid = false;
    }

    // Check validators
    if (isValid && rules.validator) {
      switch (rules.validator) {
        case "letters":
          if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(value)) {
            isValid = false;
          }
          break;

        case "number":
          if (!/^-?\d+(\.\d+)?$/.test(value)) {
            isValid = false;
          } else {
            const num = Number(value);
            if (rules.validatorMin !== undefined && num < Number(rules.validatorMin)) {
              isValid = false;
            }
            if (rules.validatorMax !== undefined && num > Number(rules.validatorMax)) {
              isValid = false;
            }
          }
          break;

        case "regexp":
          try {
            const pattern = new RegExp(rules.validatorPattern);
            if (!pattern.test(value)) {
              isValid = false;
            }
          } catch (e) {
            console.error("Invalid RegExp in data-validator-pattern:", rules.validatorPattern);
            isValid = false;
          }
          break;
      }
    }

    if (!isValid) {
      input.classList.add(inputErrorClass);
    }

    return isValid;
  }

  // ---- Input events ----
  inputs.forEach(input => {
    input.addEventListener("blur", () => {
      validateInput(input);
    });

    input.addEventListener("focus", () => {
      input.classList.remove(inputErrorClass);
    });
  });

  // ---- Form submission ----
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formIsValid = true;

    inputs.forEach(input => {
      if (!validateInput(input)) {
        formIsValid = false;
      }
    });

    form.classList.remove(formValidClass, formInvalidClass);

    if (formIsValid) {
      form.classList.add(formValidClass);
    } else {
      form.classList.add(formInvalidClass);
    }
  });
}

  




