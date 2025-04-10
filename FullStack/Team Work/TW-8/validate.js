document.querySelector("main").classList.add("text-center");
document.getElementById("inputs-div").classList.add("m-5");

const inputField = document.getElementById("SSN-input");
const btn = document.getElementById("SSN-btn");

inputField.addEventListener("input", function () {
  let number = inputField.value.replace(/\D/g, "");
  if (number.length > 3 && number.length <= 5) {
    number = number.slice(0, 3) + "-" + number.slice(3);
  } else if (number.length > 5) {
    number =
      number.slice(0, 3) + "-" + number.slice(3, 5) + "-" + number.slice(5);
  }
  inputField.value = number;
});

btn.addEventListener("click", (f) => {
  const validSSN = (value) =>
    /^(?!(000|666|9\d{2}))\d{3}-(?!(00))\d{2}-(?!(0000))\d{4}$/.test(value)
      ? true
      : false;
  const validResult = validSSN(inputField.value);

  let resultMessage = document.createElement("h3");

  if (validResult) {
    resultMessage.textContent = `Entered SSN (${inputField.value}) is valid`;
  } else {
    resultMessage.textContent = `SSN must be 11 character (9 numbers and two hypens)`;
  }
  const existingMessage = document.querySelector("#inputs-div h3");
  if (existingMessage) {
    existingMessage.remove();
  }
  document.getElementById("inputs-div").appendChild(resultMessage);
  inputField.value = "";
  f.preventDefault();
});
