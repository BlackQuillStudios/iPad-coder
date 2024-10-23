// Import the functions you need from the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, OAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv9tEMnEsLfh8rryhRG8WEpJfcfGZyE-8",
  authDomain: "touchcode-7a444.firebaseapp.com",
  projectId: "touchcode-7a444",
  storageBucket: "touchcode-7a444.appspot.com",
  messagingSenderId: "387147414469",
  appId: "1:387147414469:web:cf255e870e2df23298a9ac",
  measurementId: "G-Y3Q2KCWEJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Event listener for Start Coding button
document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('homepage-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
});

// Google Sign-In
document.getElementById('google-signin').addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            alert(`Welcome ${result.user.displayName}!`);
            startCoding();
        })
        .catch((error) => {
            console.error("Error during Google sign-in:", error);
        });
});

// Apple Sign-In
document.getElementById('apple-signin').addEventListener('click', () => {
    const provider = new OAuthProvider('apple.com');
    signInWithPopup(auth, provider)
        .then((result) => {
            alert(`Welcome ${result.user.displayName || "User"}!`);
            startCoding();
        })
        .catch((error) => {
            console.error("Error during Apple sign-in:", error);
        });
});

// Email/Password Sign-In
document.getElementById('continue-button').addEventListener('click', () => {
    const email = document.getElementById('email-or-phone').value;
    const password = "password123";  // Replace this with an input field for passwords if needed

    signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            alert(`Welcome back, ${result.user.email}!`);
            startCoding();
        })
        .catch((error) => {
            console.error("Error signing in with email and password:", error);
            // If the user is not found, create a new account
            createUserWithEmailAndPassword(auth, email, password)
                .then((newUser) => {
                    alert(`Account created! Welcome ${newUser.user.email}!`);
                    startCoding();
                })
                .catch((error) => {
                    console.error("Error creating user:", error);
                });
        });
});

// Function to proceed to the coding editor after login
function startCoding() {
    document.getElementById('login-container').classList.add('hidden');
    // Here, you would load the coding editor or navigate to the main app page
    alert("Ready to start coding!");
}
