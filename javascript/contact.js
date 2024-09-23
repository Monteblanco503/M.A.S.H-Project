document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscribeBtn').addEventListener('click', function() {
        window.location.href = '../routes/subscription.html';
    });

    document.getElementById('messageBtn').addEventListener('click', function() {
        console.log('Message button clicked');
        window.location.href = 'mailto:michaelthomas.pdx@gmail.com';
    });
});
