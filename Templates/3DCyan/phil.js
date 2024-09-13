
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
        // Get the current URL
        const url = new URL(window.location.href);
      
        // Get the anchor parameter from the URL
        const anchor = url.searchParams.get('anchor');
      
        // If there is an anchor parameter
        if (anchor) {
          // Find the element with the corresponding id
          const element = document.getElementById(anchor);
      
          // If the element exists, scroll to it
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      };
      

  }
  