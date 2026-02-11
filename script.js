// Remove symbols automatically
document.getElementById("love-pass").addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
});

// Unlock Function
function unlock() {
    const input = document.getElementById("love-pass").value.trim().toLowerCase();
    const errorText = document.getElementById("login-error");
    const inputField = document.getElementById("love-pass");

    const valid1 = "1042022";
    const valid2 = "october42022";

    // Hide error first
    errorText.style.display = "none";

    // Check invalid symbols
    const invalidPattern = /[^a-z0-9]/;

    if (invalidPattern.test(input)) {
        showError();
        return;
    }

    if (input === valid1 || input === valid2) {
        document.getElementById("lock-screen").classList.add("hidden");
        document.getElementById("main-content").classList.remove("hidden");

        // Play music
        document.getElementById("bg-music").play().catch(() => {});
    } else {
        showError();
    }

    function showError() {
        errorText.style.display = "block";
        inputField.classList.add("shake");

        setTimeout(() => {
            inputField.classList.remove("shake");
        }, 400);
    }
}

// Press Enter to Unlock
document.getElementById("love-pass").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        unlock();
    }
});
