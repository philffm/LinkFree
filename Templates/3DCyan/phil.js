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

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }


    function drawRandomCyanCircles() {
        for (let i = 0; i < 50; i++) {
            ctx.beginPath();
            ctx.arc(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() * 50,
                0,
                Math.PI * 2
            );
            ctx.strokeStyle = `rgba(123, 214, 197, ${Math.random() * 0.15 + 0.05})`; // subtle cyanlight
            ctx.lineWidth = Math.random() * 2 + 0.5; // Subtle lines
            ctx.stroke();
        }
    }

    function drawRandomPinkRectangles() {
        for (let i = 0; i < 200; i++) {
            ctx.fillStyle = `rgba(214, 123, 186, ${Math.random() * 0.05 + 0.05})`; // subtle pink
            ctx.fillRect(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() * 10,
                Math.random() * 10
            );
        }
    }



    function drawRandomCyanEllipses() {
        for (let i = 0; i < 100; i++) {
            ctx.beginPath();
            ctx.ellipse(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() * 30,
                Math.random() * 15,
                Math.random() * Math.PI,
                0,
                Math.PI * 2
            );
            ctx.strokeStyle = `rgba(58, 184, 161, ${Math.random() * 0.15 + 0.05})`; // subtle cyan
            ctx.lineWidth = Math.random() * 1.5 + 0.5; // Subtle lines
            ctx.stroke();
        }
    }



    const styles = [drawRandomPinkRectangles, drawRandomCyanEllipses];
    let currentStyleIndex = Math.floor(Math.random() * styles.length);

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        styles[currentStyleIndex]();
    }

    function animate() {
        draw();
        setTimeout(() => requestAnimationFrame(animate), 200); // Slower animation
    }

    function switchPattern() {
        currentStyleIndex = (currentStyleIndex + 1) % styles.length;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();
    setInterval(switchPattern, 5000); // Switch pattern every 10 seconds
});