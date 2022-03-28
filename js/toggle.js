const menutoggle = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".navbar");
menutoggle.onclick = () => {
    menutoggle.classList.toggle("toggle");
    navbar.classList.toggle("active");
}