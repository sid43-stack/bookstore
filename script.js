// script.js

// Function to validate the payment form
function validatePaymentForm(event) {
    event.preventDefault(); // Prevent form submission

    const cardName = document.getElementById("cardName").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiryDate = document.getElementById("expiryDate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const amount = document.getElementById("amount").value.trim();

    let isValid = true;

    // Clear any previous error messages
    document.querySelectorAll(".error").forEach((error) => error.remove());

    // Validate Name on Card
    if (cardName === "") {
        showError("cardName", "Name on card is required.");
        isValid = false;
    }

    // Validate Card Number
    if (!/^\d{16}$/.test(cardNumber)) {
        showError("cardNumber", "Card number must be 16 digits.");
        isValid = false;
    }

    // Validate Expiry Date
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        showError("expiryDate", "Expiry date must be in MM/YY format.");
        isValid = false;
    }

    // Validate CVV
    if (!/^\d{3}$/.test(cvv)) {
        showError("cvv", "CVV must be 3 digits.");
        isValid = false;
    }

    // Validate Amount
    if (amount === "" || isNaN(amount) || parseFloat(amount) <= 0) {
        showError("amount", "Enter a valid amount.");
        isValid = false;
    }

    if (isValid) {
        alert("Payment successful! Thank you for your purchase.");
        document.querySelector("form").reset(); // Clear the form
    }
}

// Function to display error messages
function showError(inputId, message) {
    const inputField = document.getElementById(inputId);
    const errorElement = document.createElement("div");
    errorElement.className = "error";
    errorElement.textContent = message;
    inputField.parentElement.appendChild(errorElement);
}

// Attach event listener to the form
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", validatePaymentForm);
});
