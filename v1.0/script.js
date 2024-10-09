// Get the form and error message elements
const form = document.getElementById('voter-form');
const errorMessage = document.getElementById('error-message');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the user's input
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Validate the user's input
    if (!validateAge(age)) {
        // Display an error message if the age is invalid
        errorMessage.innerText = 'Invalid age. Please enter a valid age.';
    } else {
        // If the age is valid, display a success message
        errorMessage.innerText = `Hello, ${name}! You are eligible to vote.`;
    }
});

// Function to validate the user's age
function validateAge(age) {
    // Check if the age is a number
    if (isNaN(age)) {
        return false;
    }

    // Check if the age is not negative
    if (age < 0) {
        return false;
    }

    // Check if the age is greater than 18
    if (age < 18) {
        return false;
    }

    // If all checks pass, return true
    return true;
}