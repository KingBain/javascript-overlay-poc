function stealCredentials() {
    const email = document.getElementById('fake-email').value;
    const password = document.getElementById('fake-password').value;
    
    console.log('Captured Credentials:');
    console.log('Email:', email);
    console.log('Password:', password);
    
    alert('Credentials "stolen"! Check the console. In a real attack, these would be sent to the attacker.');
    
    document.getElementById('fake-email').value = '';
    document.getElementById('fake-password').value = '';
}

const cookies = document.cookie;
if (cookies) {
    console.log('Cookies accessible to this container:', cookies);
} else {
    console.log('No cookies found - but they would be here if set for app.com!');
}