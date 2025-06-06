console.log("scriptName.js caricato");

function user_Name(){  
    const username = localStorage.getItem("username");
    if (username) {
        if(document.getElementById("usernameNavbar"))
            document.getElementById("usernameNavbar").textContent = "Welcome back " + username;
        if(document.getElementById("usernameProfile"))
            document.getElementById("usernameProfile").textContent = "@" + username;
    } else {
        if(document.getElementById("usernameNavbar"))
            document.getElementById("usernameNavbar").textContent = "Welcome!";
        if(document.getElementById("usernameProfile"))
            document.getElementById("usernameProfile").textContent = "@username";
    }
}

function user_Email(){
    const email = localStorage.getItem("email");
    if (email) {
        if(document.getElementById("emailUtente"))
            document.getElementById("emailUtente").textContent = email;
    } else {
        if(document.getElementById("emailUtente"))
            document.getElementById("emailUtente").textContent = "Email:";
    }
}

user_Name();
user_Email();