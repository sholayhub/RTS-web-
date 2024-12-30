document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (!name || !message) {
            event.preventDefault(); // Prevent form submission
            alert("Please fill out both fields.");
        } else {
            alert("Thank you for your message, " + name + "!");
        }
    });
    });