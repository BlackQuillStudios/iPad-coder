document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('homepage-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
});

// Simulate login flow (real authentication would need backend setup)
document.getElementById('google-signin').addEventListener('click', () => {
    alert('Signing in with Google... (needs real backend integration)');
});

document.getElementById('apple-signin').addEventListener('click', () => {
    alert('Signing in with Apple... (needs real backend integration)');
});

document.getElementById('email-signin').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Signing in with email: ${email} (needs real backend integration)`);
});
