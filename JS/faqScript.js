
const ip = 'http://172.17.0.2:5001/'; // Replace with your server's IP address


fetch(ip + "api/faq")
.then(res => console.log(res))