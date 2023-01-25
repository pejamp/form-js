const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.elements['name'];
  const birthDate = event.target.elements['birth-date'];
  
  console.log(name.value, birthDate.value);
})