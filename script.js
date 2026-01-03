// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Dark Mode
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let msg = document.getElementById("formMsg");

    if (name === "" || email === "" || message === "") {
        msg.textContent = "Please fill all fields!";
        msg.style.color = "red";
    } else {
        msg.textContent = "Message sent successfully!";
        msg.style.color = "green";
        this.reset();
    }
});
