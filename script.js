const errorText = document.querySelector('.error-text');
const emailInput = document.querySelector('input[type="text"]');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailInput.value);
function validateEmail() {
  const email = emailInput.value;
  console.log(email);
  if (email === '' || !emailRegex.test(email)) {
    errorText.classList.remove('d-none')
    emailInput.classList.add('error')
    return false;
  } 
}

function handleSubmit(event) {
    event.preventDefault();
    console.log(validateEmail());
  console.log(emailInput.value);
}