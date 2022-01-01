"use strict";

const CLASS_DARK_MODE = "dark-mode";

window.onload = (event) => {

    const cookies = document.cookie.split(';');
    const cookieIndex = cookies.findIndex( cookies => cookies.includes("theme"));

    if (cookieIndex !== -1) {
       const theme = cookies[cookieIndex].split("=")[1];
       if (theme !== "dark") {
           switchTheme();
       }
    }
    setThemeCookie();
};


const switchTheme = () => {
    body.classList.toggle(CLASS_DARK_MODE);
    sunElement.classList.toggle("active");
    moonElement.classList.toggle("active");
    setThemeCookie();
}

const setThemeCookie = () => {
    document.cookie = "theme=; expires = Thu, 01 Jan 2019 00:00:00 GMT" // deleting cookie
    const isDarkMode = body.classList.contains(CLASS_DARK_MODE);
    if (isDarkMode) {
        document.cookie = "theme=dark;path=/";
    } else {
        document.cookie = "theme=light;path=/";
    }
}

const body = document.querySelector("body");
const sunElement = document.getElementById("sun");
const moonElement = document.getElementById("moon");


sunElement.addEventListener("click", switchTheme);
moonElement.addEventListener("click", switchTheme);

