const closeBtn  = document.querySelector(".promotion-container .close-btn");
const promotionContainer = document.querySelector(".promotion-container");
const dynamicContainer = document.querySelector(".dynamic-container");

const closeBtnClicked = () => {
    promotionContainer.style.display = "none";

    setCookie("promotionClosed", "true", 24);
};

let visibilityToggle = setInterval(() => {
    if (!dynamicContainer || !dynamicContainer.classList) return;

    if (dynamicContainer.classList.contains("countdown-visible")) {
        dynamicContainer.classList.remove("countdown-visible");
    } else {
        dynamicContainer.classList.add("countdown-visible");
    }
}, 10000);