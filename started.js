const form = document.getElementById('business-form');
const passwordInput = document.getElementById('business-password');
const togglePasswordButton = document.getElementById('toggle-password');
const ideaDescription = document.getElementById('idea-description');
const ideaPreview = document.getElementById('idea-preview');
const formMessage = document.getElementById('form-message');
const copySummaryButton = document.getElementById('copy-summary');
const previewName = document.getElementById('preview-name');
const previewOwner = document.getElementById('preview-owner');
const previewCategory = document.getElementById('preview-category');
const previewGoal = document.getElementById('preview-goal');
const fundingSuggestion = document.getElementById('funding-suggestion');
const progressSteps = document.querySelectorAll('.progress-step');
const successActions = document.getElementById('success-actions');

function updatePreview() {
  const businessName = form.businessName.value.trim();
  const ownerName = form.ownerName.value.trim();
  const categoryValue = form.category.value;
  const fundingValue = form.fundingGoal.value.trim();
  const ideaText = ideaDescription.value.trim();

  previewName.textContent = businessName || 'Sweet Hive Studio';
  previewOwner.textContent = ownerName || 'Your name';
  previewCategory.textContent = categoryValue ? capitalize(categoryValue) : 'Not selected';
  previewGoal.textContent = fundingValue ? fundingValue : '$0';
  ideaPreview.textContent = ideaText || 'Type your idea description to see a quick preview here.';
  updateSuggestion(fundingValue);
  updateProgressTracker();
}

function updateSuggestion(goalValue) {
  const numericGoal = Number(goalValue.replace(/[^0-9.]/g, ''));

  if (!goalValue || Number.isNaN(numericGoal) || numericGoal === 0) {
    fundingSuggestion.textContent = 'Enter a funding goal to receive a launch estimate.';
    return;
  }

  if (numericGoal <= 5000) {
    fundingSuggestion.textContent = 'Great for an early MVP launch — focus on customer testing and fast delivery.';
  } else if (numericGoal <= 15000) {
    fundingSuggestion.textContent = 'A solid runway for market validation, branding, and small-team growth.';
  } else {
    fundingSuggestion.textContent = 'Strong growth funding — plan your roadmap and split work into quarterly milestones.';
  }
}

function updateProgressTracker() {
  const completed = [
    form.businessName.value.trim(),
    form.ownerName.value.trim(),
    form.email.value.trim(),
    form.password.value,
    form.category.value,
    form.ideaTitle.value.trim(),
    form.ideaDescription.value.trim(),
  ].filter(Boolean).length;

  progressSteps.forEach((step, index) => {
    const threshold = index * 3 + 1;
    step.classList.toggle('active', completed >= threshold);
  });
}

function showMessage(message, type = 'success') {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function togglePasswordVisibility() {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  togglePasswordButton.textContent = isHidden ? 'Hide' : 'Show';
  togglePasswordButton.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
}

function copyFormSummary() {
  const businessName = form.businessName.value.trim() || 'Sweet Hive Studio';
  const ownerName = form.ownerName.value.trim() || 'Your name';
  const categoryValue = form.category.value || 'Not selected';
  const ideaTitle = form.ideaTitle.value.trim() || 'Untitled idea';
  const ideaText = ideaDescription.value.trim() || 'No description yet.';
  const fundingValue = form.fundingGoal.value.trim() || '$0';

  const summary = `Business: ${businessName}\nFounder: ${ownerName}\nCategory: ${capitalize(categoryValue)}\nIdea: ${ideaTitle}\nDescription: ${ideaText}\nFunding Goal: ${fundingValue}`;

  navigator.clipboard.writeText(summary).then(() => {
    showMessage('Business summary copied to clipboard!', 'success');
  }).catch(() => {
    showMessage('Copy failed. Please try again.', 'error');
  });
}

function handleFormSubmit(event) {
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
  successActions.innerHTML = `<a href="account.html" class="btn btn-primary">Go to your dashboard</a>`;
  successActions.classList.remove('hidden');
  form.reset();
  updatePreview();
  passwordInput.type = 'password';
  togglePasswordButton.textContent = 'Show';
}

function initPage() {
  updatePreview();
  updateProgressTracker();

  togglePasswordButton.addEventListener('click', togglePasswordVisibility);
  ideaDescription.addEventListener('input', updatePreview);
  form.businessName.addEventListener('input', updatePreview);
  form.ownerName.addEventListener('input', updatePreview);
  form.category.addEventListener('change', updatePreview);
  form.fundingGoal.addEventListener('input', updatePreview);
  form.addEventListener('submit', handleFormSubmit);
  copySummaryButton.addEventListener('click', copyFormSummary);
}

initPage();
