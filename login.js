document.getElementById("login-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
                                    // mock for testing 
        const response = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Store token
            localStorage.setItem("token", data.token);
            document.getElementById("login-message").textContent = "Success.";

            // redirect to protected page 
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);
        } else {
            // show error message 
            document.getElementById("login-message").textContent = data.error || "Login failed";
        }
    } catch (error) {
        document.getElementById("login-message").textContent = "Network error, please try again";
    }
});