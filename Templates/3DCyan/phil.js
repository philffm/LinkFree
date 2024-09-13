
function updateDonation(amount, explanation) {
    // Set the amount in the input field
    document.getElementById('amount').value = amount + '.00';
    
  
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


    window.onload = function() {
        // Check if there is a hash in the URL
        if (window.location.hash) {
            // Get the element with the ID matching the hash (without the # symbol)
            const targetElement = document.getElementById(window.location.hash.substring(1));
            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    
    
  }
  