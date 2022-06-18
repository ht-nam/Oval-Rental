import {modalConFig, sideNavConfig} from "./indexScript.js";

window.onload = start;
function start() {
    sideNavConfig();
    modalConFig();
    formConfig();
}

function formConfig() {
    const vipBtn = document.getElementById("vip-btn");
    const doubleBtn = document.getElementById("double-btn");
    const singleBtn = document.getElementById("single-btn");
    const affordableBtn = document.getElementById("affordable-btn");

    vipBtn.onclick = function () {
        const d = document.getElementById("radio-vip");
        d.checked = true;
    }
    doubleBtn.onclick = function () {
        const d = document.getElementById("radio-double");
        d.checked = true;
    }
    singleBtn.onclick = function () {
        const d = document.getElementById("radio-single");
        d.checked = true;
    }
    affordableBtn.onclick = function () {
        const d = document.getElementById("radio-affordable");
        d.checked = true;
    }
}

