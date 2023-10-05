// Get DOM elements
const generateButton = document.getElementById('generate-password');
const passwordDisplay = document.getElementById('password-display');

// Character sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_-+=<>?';

// Function to generate a random password
function generatePassword() {
    const length = parseInt(15); // Set default password length to 15
    const includeLowercase = true; // Checked by default
    const includeUppercase = true; // Checked by default
    const includeNumbers = true; // Checked by default
    const includeSpecial = true; // Checked by default

    let charset = '';
    if (includeLowercase) charset += lowercaseChars;
    if (includeUppercase) charset += uppercaseChars;
    if (includeNumbers) charset += numberChars;
    if (includeSpecial) charset += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    passwordDisplay.textContent = password;
    passwordDisplay.style.backgroundColor = '#fff'; // Reset background color
}

// Event listener for the "Generate Password" button
generateButton.addEventListener('click', generatePassword);
