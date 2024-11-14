// Function to preview the profile image
function previewProfileImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        // Set the profile image preview to the selected file
        document.getElementById('profileImagePreview').src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Function to preview the background image
function previewBannerImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        // Set the background image preview to the selected file
        document.getElementById('backgroundImagePreview').src = e.target.result;
    };
    reader.readAsDataURL(file);
}
