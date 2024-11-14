document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword');

    togglePasswordButton.addEventListener('click', function() {
        // Toggle the type attribute between password and text
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Change button icon based on the state
        togglePasswordButton.textContent = type === 'password' ? '👁️' : '🙈';
    });
});
