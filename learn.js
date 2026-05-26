document.getElementById('learnMoreBtn').addEventListener('click', function() {
    const content = document.getElementById('contentSection');
    
    if (content.classList.contains('hidden')) {
        // Reveal section
        content.style.display = 'block';
        // Timeout ensures the CSS transition triggers properly after display changes
        setTimeout(() => {
            content.classList.remove('hidden');
        }, 10);
        this.textContent = 'Show Less';
    } else {
        // Hide section
        content.classList.add('hidden');
        setTimeout(() => {
            content.style.display = 'none';
        }, 500); // Matches the 0.5s CSS transition time
        this.textContent = 'Learn More';
    }
});
