
function updateDonation(amount, explanation) {
    // Set the amount in the input field
    document.getElementById('amount').value = amount;
  
    // Display the explanation for the selected donation purpose
    document.getElementById('donationExplanation').innerHTML = explanation;
  }
  
  function sendDonation() {
    // Get the donation amount from the input field
    const amount = document.getElementById('amount').value;
  
    if (amount && !isNaN(amount) && amount > 0) {
      // Open PayPal link with the specified amount
      window.open(`https://www.paypal.com/paypalme/philwr/${amount}`, '_blank');
    } else {
      alert('Please enter a valid amount.');
    }
  }
  