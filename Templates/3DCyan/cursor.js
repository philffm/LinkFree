
// Get the custom cursor element
const customCursor = document.getElementById('customCursor');

// Track the mouse position
let mouseX = 0;
let mouseY = 0;


// Update the position of the custom cursor
document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    const cursorWidth = customCursor.offsetWidth;
    const cursorHeight = customCursor.offsetHeight;

    // Adjust the position by subtracting half the cursor's size
    customCursor.style.transform = `translate(${mouseX - cursorWidth / 1}px, ${mouseY - cursorHeight / 1}px) scale(1)`;
});


// Custom cursor press down effect
document.addEventListener('mousedown', () => {
    customCursor.classList.add('mouseDown');
    // Transition the scale and other properties smoothly
    customCursor.style.transition = 'transform 0.1s ease, width 0.2s, height 0.2s, background-color 0.2s, opacity 0.2s';
    // Scale down the cursor while keeping its current position
    customCursor.style.transform = `translate(${mouseX - customCursor.offsetWidth / 1}px, ${mouseY - customCursor.offsetHeight / 1}px) scale(0.6)`;
});

document.addEventListener('mouseup', () => {
    customCursor.classList.remove('mouseDown');
    // Restore the original scale after mouseup
    customCursor.style.transform = `translate(${mouseX - customCursor.offsetWidth / 1}px, ${mouseY - customCursor.offsetHeight / 1}px) scale(1)`;
});




// on ios or android, hide the custom cursor

if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
    customCursor.style.display = 'none';
}

