const form = document.querySelector(".form");
const submitBtn = document.querySelector("#submit");
const developerType = document.querySelector("#developerType");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");

form.addEventListener("submit", onSubmitClick);

function onSubmitClick(e) {
  e.preventDefault();
  const formElement = e.target.elements;
  const name = formElement.first_name.value;
  const lastName = formElement.last_name.value;
  const devType = formElement.developer_type.value;

  console.log(e.target.elements.last_name.value);
  console.log(e.target.elements.first_name.value);
  console.log(e.target.elements.developer_type.value);
  alert(`First name: "${name}"
Last name: "${lastName}"
Developer type: "${devType}"`);
}
