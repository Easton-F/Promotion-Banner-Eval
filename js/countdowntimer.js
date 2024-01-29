const days = document.querySelector(".promotion-countdown .days");
const hours = document.querySelector(".promotion-countdown .hours");
const minutes = document.querySelector(".promotion-countdown .minutes");
const seconds = document.querySelector(".promotion-countdown .seconds");

const countdownDate = new Date("2024-02-04T00:00:00").getTime();

const setCookie = (name, value, duration) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + duration * 60 * 60 * 1000);
    document.cookie = `${name} = ${value};expires=${expires.toUTCString()};path=/`;
}

if (document.cookie.indexOf("promotionClosed=true") !== -1) {
    promotionContainer.style.display = "none";
}

let t = setInterval(() => {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let daysValue = Math.floor(
        distance / (1000 * 60 * 60 * 24)).toString();
    let hoursValue = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    let minutesValue = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
    let secondsValue = Math.floor(
        (distance % (1000 * 60)) / (1000)).toString();

    days.innerHTML = daysValue;
    hours.innerHTML = hoursValue;
    minutes.innerHTML = minutesValue;
    seconds.innerHTML = secondsValue;

    if (distance < 0) {
        clearInterval(t);
        promotionContainer.style.display = "none";
    }
}, 1000);