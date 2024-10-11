// Create the button
const backButton = document.createElement('a');
backButton.href = '/index.html';
backButton.textContent = 'Back to Main Menu';
backButton.className = 'back-to-main-menu';

// Add the button to the top of the page
document.body.insertBefore(backButton, document.body.firstChild);