const form = document.getElementById('shop-form');
const businessNameInput = document.getElementById('business-name');
const emailInput = document.getElementById('business-email');
const passwordInput = document.getElementById('business-password');
const categorySelect = document.getElementById('business-category');
const messageBox = document.getElementById('form-message');
const categoryNote = document.getElementById('category-note');
const passwordStrength = document.getElementById('password-strength');
const passwordToggle = document.getElementById('toggle-password');

const categoryHints = {
  start: 'New businesses get a launch checklist and guided tools to get going fast.',
  about: 'We help you plan, promote, and grow your brand with expert support.',
  services: 'Discover services that make business setup, payments, and growth easier.',
};

function updateCategoryHint() {
  const hint = categoryHints[categorySelect.value] || categoryHints.start;
  categoryNote.textContent = hint;
}

function validateEmail(value) {
  return /^\S+@\S+\.\S+$/.test(value);
}

function getPasswordStrength(password) {
  if (password.length >= 7 && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) && /\d/.test(password)) {
    return 'strong';
  }
  if (password.length >= 8 && /\d/.test(password)) {
    return 'medium';
  }
  return 'weak';
}

function updatePasswordStrength(password) {
  const strength = getPasswordStrength(password);
  passwordStrength.textContent = {
    weak: 'Password strength: weak. Try adding numbers and symbols.',
    medium: 'Password strength: medium. Good job — add more length for extra security.',
    strong: 'Password strength: strong! This password is secure.',
  }[strength];

  passwordStrength.classList.remove('strength-weak', 'strength-medium', 'strength-strong');
  passwordStrength.classList.add(`strength-${strength}`);
}

function showMessage(text, type = 'success') {
  messageBox.textContent = text;
  messageBox.classList.remove('message-success', 'message-error');
  messageBox.classList.add(type === 'success' ? 'message-success' : 'message-error');
}

function clearMessage() {
  messageBox.textContent = '';
  messageBox.classList.remove('message-success', 'message-error');
}

function setInputState(input, valid) {
  input.classList.toggle('input-valid', valid);
  input.classList.toggle('input-invalid', !valid);
}

categorySelect.addEventListener('change', updateCategoryHint);
emailInput.addEventListener('input', () => {
  const valid = validateEmail(emailInput.value.trim());
  setInputState(emailInput, valid || emailInput.value.trim() === '');
  if (emailInput.value.trim() === '') {
    clearMessage();
  }
});
passwordInput.addEventListener('input', () => {
  updatePasswordStrength(passwordInput.value);
});

passwordToggle.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  passwordToggle.textContent = isPassword ? 'eye open' : 'Show';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const businessName = businessNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const category = categorySelect.value;

  if (!businessName || !email || !password) {
    showMessage('Please fill in every field before you continue.', 'error');
    setInputState(businessNameInput, !!businessName);
    setInputState(emailInput, validateEmail(email));
    setInputState(passwordInput, password.length >= 8);
    return;
  }

  if (!validateEmail(email)) {
    showMessage('Please enter a valid email address.', 'error');
    setInputState(emailInput, false);
    return;
  }

  const strength = getPasswordStrength(password);
  if (strength === 'weak') {
    showMessage('Your password is too weak. Use more characters, numbers, or symbols.', 'error');
    setInputState(passwordInput, false);
    return;
  }

  showMessage(`Great choice! We will send your setup guide to ${email}.`, 'success');
  form.reset();
  updateCategoryHint();
  updatePasswordStrength('');
  setInputState(businessNameInput, false);
  setInputState(emailInput, false);
  setInputState(passwordInput, false);
});

updateCategoryHint();
updatePasswordStrength('');
