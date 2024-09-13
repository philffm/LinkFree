// Cache DOM elements
const amountField = document.getElementById('amount');
const explanationField = document.getElementById('donationExplanation');

// Update donation amount and explanation
function updateDonation(amount, explanation) {
    // Update amount with fixed decimal places
    amountField.value = `${amount.toFixed(2)}`;
    
    // Update explanation for the donation
    explanationField.innerHTML = explanation;
}

// Handle sending the donation
function sendDonation() {
    const amount = parseFloat(amountField.value);  // Convert to a number

    // Validate the donation amount
    if (!isNaN(amount) && amount > 0) {
        // Open PayPal link with the specified amount
        window.open(`https://www.paypal.com/paypalme/philwr/${amount}`, '_blank');
    } else {
        alert('Please enter a valid amount.');
    }
}
// Get the custom cursor element
const customCursor = document.getElementById('customCursor');

// Update the position of the custom cursor
document.addEventListener('mousemove', (e) => {
    const cursorWidth = customCursor.offsetWidth;
    const cursorHeight = customCursor.offsetHeight;
    
    // Adjust the position by subtracting half the cursor's size
    customCursor.style.transform = `translate(${e.pageX - cursorWidth / 2}px, ${e.pageY - cursorHeight / 2}px)`;
});
