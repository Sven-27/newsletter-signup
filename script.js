const errorText = document.querySelector('.error-text');
const emailInput = document.querySelector('input[type="text"]');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateEmail() {
  const email = emailInput.value;
  if (email === '' || !emailRegex.test(email)) {
    errorText.classList.remove('d-none')
    emailInput.classList.add('error')
    return false;
  } 
  else {
    errorText.classList.add('d-none');
    emailInput.classList.remove('error');
    sessionStorage.setItem("email adress", emailInput.value);
    emailInput.value = ''; // Clear the input field
    // Here you can add the code to handle the form submission, e.g., sending data to a server
    console.log("Form submitted successfully!");
    }
}

function handleSubmit(event) {
  event.preventDefault();
  validateEmail()  
} 