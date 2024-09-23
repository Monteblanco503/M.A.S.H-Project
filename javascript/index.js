// Function to redirect to a specific page
function redirectTo(page) {
    window.location.href = page;
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get button elements
    const startGameBtn = document.getElementById('startGame-btn');
    const tutorialBtn = document.getElementById('tutorial-btn');

    // Add click events for the buttons
    if (startGameBtn) {
        startGameBtn.addEventListener('click', () => redirectTo('game.html'));
    }
    if (tutorialBtn) {
        tutorialBtn.addEventListener('click', () => redirectTo('instructions.html'));
    }
});
