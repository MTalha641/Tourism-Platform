document.getElementById("login-form").addEventListener("submit", function (event) {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
