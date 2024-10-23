// Start the animation when the page loads
window.onload = () => {
    const logoWithText = document.getElementById('logo-with-text');

    // Wait for the animation to finish before showing the second logo
    setTimeout(() => {
        logoWithText.style.opacity = '1'; // Show the logo with text
        logoWithText.style.animation = 'show-logo 1s forwards'; // Fade in
        document.getElementById('editor').style.display = 'block'; // Show editor
    }, 2000); // Match this with the animation duration in CSS
};
