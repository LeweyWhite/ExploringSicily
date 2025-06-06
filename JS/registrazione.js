let ip = "http://127.0.0.1:5001";

async function register() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    try {
        const response = await fetch(ip + '/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        });

        const data = await response.json();
        console.log("json data:", data);

        let resultElement = document.getElementById('resultElement');

        if (data.response && data.response.user) {
            let user = data.response.user;
            let email = data.response.email;

            resultElement.innerHTML = "<p style='color:green'>User registered: " + user + " (" + email + ")</p>";
            window.location.href = "index.html"; 
        } else {
            console.log("Registration failed");
            resultElement.innerHTML = "<p style='color:red'>" + (data.response?.error || "Request error") + "</p>";
        }
    } catch (error) {
        console.error('Error:', error);
        let resultElement = document.getElementById('resultElement');
        resultElement.innerHTML = "<p style='color:red'>Request error</p>";
    }
}
