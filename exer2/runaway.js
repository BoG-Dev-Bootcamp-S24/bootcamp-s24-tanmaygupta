const card = document.getElementById("card");

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const maxWidth = window.innerWidth - (window.innerWidth * 0.05);
const maxHeight = window.innerHeight - (window.innerHeight * 0.05);
const buttonWidth = maxWidth * 0.10;
const buttonHeight = maxHeight * 0.07;

const rangeHeight = maxHeight - buttonHeight
const rangeWidth = maxWidth - buttonWidth;

card.addEventListener("click", () => {
    card.classList.toggle("flip")
});

yesButton.addEventListener("click", () => alert("Yay!! Can't wait to join the team!"));

noButton.addEventListener("mouseover", () => {
    noButton.style.left = (Math.floor(Math.random() * (rangeWidth + 1)) + buttonWidth / 2) + "px";
    noButton.style.top = Math.floor(Math.random() * (rangeHeight + 1)) + "px";
});

noButton.addEventListener("click", () => {
    alert("Well that wasn't supposed to happen 🙃");
});