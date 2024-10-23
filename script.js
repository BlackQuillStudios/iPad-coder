document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('homepage-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
});

// Simulate login flow (needs real authentication backend)
document.getElementById('google-signin').addEventListener('click', () => {
    alert('Signing in with Google... (needs real backend integration)');
});

document.getElementById('microsoft-signin').addEventListener('click', () => {
    alert('Signing in with Microsoft... (needs real backend integration)');
});

document.getElementById('apple-signin').addEventListener('click', () => {
    alert('Signing in with Apple... (needs real backend integration)');
});
