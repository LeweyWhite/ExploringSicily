document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('news-form');
  const message = document.getElementById('message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const text = document.getElementById('text').value.trim();

    if (!username || !email || !text) {
      message.textContent = 'All fields are required.';
      message.style.color = 'red';
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5001/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, text })
      });

      if (!response.ok) {
        throw new Error('Errore durante l\'invio della news');
      }

      message.textContent = 'News submitted successfully!';
      message.style.color = 'green';
      form.reset();
    } catch (error) {
      console.error(error);
      message.textContent = 'Error: ' + error.message;
      message.style.color = 'red';
    }
  });
});
