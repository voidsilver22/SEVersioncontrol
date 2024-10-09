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
    if (!validateName(name) || !validateAge(age)) {
        // Display an error message if either validation fails
        if (!validateName(name)) {
            errorMessage.innerText = 'Invalid name. Please enter a valid name.';
        } else if (!validateAge(age)) {
            errorMessage.innerText = 'Invalid age. Please enter a valid age.';
        }
    } else {
        // If both validations pass, display a success message
        errorMessage.innerText = `Hello, ${name}! You are eligible to vote.`;
    }
});

// Function to validate the user's name
function validateName(name) {
    // Check if the name contains only alphabets
    if (!/^[a-zA-Z]+$/.test(name)) {
        return false;
    }

    // Check if the name is not more than 50 characters
    if (name.length > 50) {
        return false;
    }

    // If all checks pass, return true
    return true;
}

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