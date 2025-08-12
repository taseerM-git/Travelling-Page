// Welcome message on Home page
function welcomeMessage() {
    alert("Welcome to TravelSite! Ready to explore?");
}

// Contact form validation
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill out all fields.");
        return false;
    }
    alert("Thanks for contacting us, " + name + "!");
    return true;
}
