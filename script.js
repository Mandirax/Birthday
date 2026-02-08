// Password check
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('errorMessage');
    
    // Password is 'hampi' (case-insensitive)
    if (password.toLowerCase() === 'hampi') {
        // Hide landing page
        document.getElementById('landingPage').style.display = 'none';
        // Show birthday page
        document.getElementById('birthdayPage').style.display = 'block';
        // Change background
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        
        // Trigger initial confetti
        setTimeout(() => {
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    createConfetti();
                }, i * 100);
            }
        }, 500);
    } else {
        errorMsg.style.display = 'block';
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInput').focus();
        
        // Shake animation
        document.querySelector('.container').style.animation = 'shake 0.5s';
        setTimeout(() => {
            document.querySelector('.container').style.animation = 'shipRock 3s infinite ease-in-out';
        }, 500);
    }
}

// Allow Enter key to submit
document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Celebrate function
function celebrate() {
    const surprise = document.getElementById('surprise');
    surprise.style.display = 'block';
    
    // Create confetti
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 30);
    }
}

// Create confetti
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}
