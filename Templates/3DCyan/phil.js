// Cache DOM elements
const amountField = document.getElementById('amount');
const explanationField = document.getElementById('donationExplanation');

var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function () {
    var u = "//analytics.philwornath.de/";
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', '3']);
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
})();



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