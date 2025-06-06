let ip= "http://127.0.0.1:5001"
async function login() {
    let username = document.getElementById ('username').value;
    let password = document.getElementById ('password').value;
    try {
        const response = await fetch (ip + '/api/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' ,
            },
            body: JSON.stringify({
                "username":username,
                "password":password
            })
        });
        const data = await response.json();
        console.log("json data: " , data);
 
        let resultElements = document.getElementById('resultElement');
 
        if (data.response.user) {
            let user = data.response.user;
            let email = data.response.email;
            localStorage.setItem('username', user); // Aggiunge localmente il dato dell'username
            localStorage.setItem('email', email); //Aggiunge localmente il dato dell'email
            localStorage.setItem('log', true); //Aggiunge localmente il dato del log
            console.log("User: " + user + ", Email: " + email);
            resultElements.innerHTML = "<p style='color:green'>Welcome: "; + user + "</p>";
            console.log("Login successful for user: " + user);
            window.location.href = "profilePage.html"; 

            
        } else {
            console.log("not ok");
            resultElements.innerHTML = "<p style='color:red'>" + data.response.error + "</p>";
            console.log("Login failed: " + data.response.error);
        }
    } catch(error) {
        console.error('Error:', error);
    }
}