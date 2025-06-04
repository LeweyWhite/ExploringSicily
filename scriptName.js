
const ip = "http://127.0.0.1:5001/";

async function getUserData() {
    try {
        const response = await fetch(ip + 'api/news', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        const username = data.username;
        const email = data.email;
        document.getElementById('usernameUtente').textContent = 'Welcome back '  +'@' + username;
        document.getElementById('emailUtente').textContent = 'Email: ' + email;
    } catch (error) {
        console.error('Errore nel recupero dati utente:', error);
    }

     try {
        const response = await fetch(ip + 'api/faq', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        const firstName = data.first_name || '';
        const lastName = data.last_name || '';
        document.getElementById('first_name').textContent = `${firstName} ${lastName}`;
        document.getElementById('emailUtente').textContent = 'Email: ' + (email || '');
    } catch (error) {
        console.error('Errore nel recupero dati utente:', error);
    }
}

getUserData();

