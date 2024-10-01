function startQuestions() {
    document.getElementById("questions").style.display = "block";
}

function answerYes() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("followUpQuestion").style.display = "block"; // Ipinapakita ang follow-up question
}

function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "OKAYY DII";
    showConfetti();
}

function goSomewhere(place) {
    document.getElementById("followUpQuestion").style.display = "none";
    document.getElementById("timeQuestion").style.display = "block"; // Ipinapakita ang tanong sa oras
}

function chooseTime(time) {
    document.getElementById("timeQuestion").style.display = "none";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = `SIGEE SEEUUUU`;
    showConfetti();
}

function showConfetti() {
    const confettiSettings = {
        target: 'confetti-canvas',
        respawn: true,
        colors: ['#ff0000', '#00ff00', '#0000ff'],
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
        confetti.clear();
    }, 5000);
}
