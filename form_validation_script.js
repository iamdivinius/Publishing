// script.js - Divinius Publishing Contact Form Validation

// This script validates the contact form before allowing submission.
// It checks that all required fields are filled and that the email is valid.
// If the form is complete, it displays a thank-you message and resets the form.

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();

    // Check if any fields are empty
    if (name === "" || email === "" || msg === "") {
      message.textContent = "⚠️ All fields are required. Please complete the form.";
      message.style.color = "#cc3300"; // Deep red
      return;
    }

    // Validate the email format using a basic regex pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      message.textContent = "⚠️ Invalid email format. Please check your address.";
      message.style.color = "#cc3300";
      return;
    }

    // If everything passes, show a success message
    message.textContent = "✅ Thank you for reaching out to Divinius Publishing! We’ll be in touch soon.";
    message.style.color = "#2e7d32"; // Soft green

    // Clear the form fields for a fresh start
    form.reset();
  });
});
