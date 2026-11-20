const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.innerHTML = "☾";
    } else {
        themeToggle.innerHTML = "☀";
    }

});




const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.innerHTML = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

});




const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.innerHTML = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});




const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");




    if (name === "" || email === "" || message === "") {

        formMessage.style.color = "red";

        formMessage.innerHTML = "Please fill in all the fields.";

        return;

    }



    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.style.color = "red";

        formMessage.innerHTML = "Please enter a valid email address.";

        return;

    }



    formMessage.style.color = "#00d4ff";

    formMessage.innerHTML =
        "Thank you! Your message has been submitted.";

    contactForm.reset();

});