const errorText = document.querySelector('.error-text');
const emailInput = document.querySelector('input[type="text"]');
const submitButton = document.querySelector('button[type="submit"]');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-btn');
const userEmail = document.querySelector('.user-email');

function showModal() {
  modal.classList.add('show');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function hideModal() {
  modal.classList.remove('show');
  modal.style.display = 'none';
  document.body.style.overflow = ''; // Restore scrolling
}

closeButton.addEventListener('click', hideModal);

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
    showModal();
    emailInput.value = ''; // Clear the input field
    }
}

function handleSubmit(event) {
  event.preventDefault();
  validateEmail();
  userEmail.textContent = sessionStorage.getItem("email adress");  
} 