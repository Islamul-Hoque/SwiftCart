// Reusable get id Function
function getId(id) {
    return document.getElementById(id);
}

const navLinks = document.querySelectorAll('.navbar-center ul li a, .navbar-start ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
