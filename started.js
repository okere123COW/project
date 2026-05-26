const form = document.getElementById('business-form');
const passwordInput = document.getElementById('business-password');
const togglePasswordButton = document.getElementById('toggle-password');
const ideaDescription = document.getElementById('idea-description');
const ideaPreview = document.getElementById('idea-preview');
const formMessage = document.getElementById('form-message');

function updateIdeaPreview() {
  const value = ideaDescription.value.trim();
  ideaPreview.textContent = value.length
    ? value
    : 'Type your idea description to see a quick preview here.';
}

function showMessage(message, type = 'success') {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

togglePasswordButton.addEventListener('click', () => {
  const isPasswordHidden = passwordInput.type === 'password';
  passwordInput.type = isPasswordHidden ? 'text' : 'password';
  togglePasswordButton.textContent = isPasswordHidden ? 'Hide' : 'Show';
  togglePasswordButton.setAttribute(
    'aria-label',
    isPasswordHidden ? 'Hide password' : 'Show password'
  );
});

ideaDescription.addEventListener('input', updateIdeaPreview);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const businessName = form.businessName.value.trim();
  const ownerName = form.ownerName.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const category = form.category.value;
  const ideaTitle = form.ideaTitle.value.trim();
  const ideaText = form.ideaDescription.value.trim();

  if (!businessName || !ownerName || !email || !password || !category || !ideaTitle || !ideaText) {
    showMessage('Please complete all required fields before submitting.', 'error');
    return;
  }

  if (password.length < 8) {
    showMessage('Password must be at least 8 characters long.', 'error');
    return;
  }

  if (ideaText.length < 20) {
    showMessage('Please provide a more detailed idea description.', 'error');
    return;
  }

  const registration = {
    businessName,
    ownerName,
    email,
    phone: form.phone.value.trim(),
    category,
    ideaTitle,
    ideaDescription: ideaText,
    fundingGoal: form.fundingGoal.value.trim(),
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem('businessRegistration', JSON.stringify(registration));

  showMessage('Your business registration is complete. We will contact you soon!', 'success');
  form.reset();
  updateIdeaPreview();
  passwordInput.type = 'password';
  togglePasswordButton.textContent = 'Show';
});
