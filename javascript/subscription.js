document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("input[type='email']");
    const goBackButton = document.querySelector(".cancel-btn");

  
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        const email = emailInput.value;
        
      
        if (validateEmail(email)) {
            alert(`Thank you! You've been subscribed with the email: ${email}`);
            emailInput.value = ''; 
        } else {
            alert('Please enter a valid email address.');
        }
    });

    
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Go Back button event listener
    goBackButton.addEventListener("click", () => {
        window.history.back(); 
    });
});
