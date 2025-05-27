const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".head-nav");

menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("show");
})