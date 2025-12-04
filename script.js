document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop actual submission for demo

        // Get values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validation Logic (Syllabus Requirement #4)
        // 1. Name should contain alphabets and length > 6 (Adjusted to > 3 for realism)
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name) || name.length < 3) {
            alert("Please enter a valid name (Alphabets only, min 3 chars).");
            return;
        }

        // 2. Email validation
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        // 3. Message validation
        if (message.length < 10) {
            alert("Message must be at least 10 characters long.");
            return;
        }

        // Success Feedback (simulating database storage)
        alert(`Thank you, ${name}! Your message has been received.`);
        form.reset();
    });
});