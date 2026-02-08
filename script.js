// Password check
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('errorMessage');
    
    // Change 'birthday' to your desired password
    if (password === 'birthday') {
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

// Show hint
function showHint() {
    const hintBox = document.getElementById('hintBox');
    hintBox.style.display = hintBox.style.display === 'block' ? 'none' : 'block';
}

// Allow Enter key to submit
document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Age calculation
document.getElementById('ageInput').addEventListener('input', function(e) {
    const age = parseInt(e.target.value);
    const calculation = document.getElementById('calculation');
    
    if (age) {
        const days = age * 365;
        const hours = days * 24;
        calculation.innerHTML = `${days.toLocaleString()} days or ${hours.toLocaleString()} hours`;
    } else {
        calculation.innerHTML = '';
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

// Blow cake (candles)
let cakeClicks = 0;
function blowCake() {
    cakeClicks++;
    const cake = document.querySelector('.cake');
    
    if (cakeClicks === 1) {
        cake.textContent = '🎂🕯️';
    } else if (cakeClicks === 2) {
        cake.textContent = '🎂💨';
    } else if (cakeClicks === 3) {
        cake.textContent = '🎂✨';
        alert('🎉 Make a wish! 🎉');
        setTimeout(() => {
            cake.textContent = '🎂';
            cakeClicks = 0;
        }, 2000);
    }
}

// Pop balloon
function popBalloon(balloon) {
    balloon.textContent = '💥';
    setTimeout(() => {
        balloon.style.display = 'none';
    }, 300);
}
