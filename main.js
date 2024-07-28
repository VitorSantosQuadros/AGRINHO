document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (validateEmail(email)) {
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Mensagem:', message);

        alert('Obrigado pelo seu contato, ' + name + '!');

        document.getElementById('contact-form').reset(); // Limpa o formulário após o envio
    } else {
        alert('Por favor, insira um email válido.');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA
