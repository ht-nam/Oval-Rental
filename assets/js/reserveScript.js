window.onload = start;
function start() {
    // form param
    const vipBtn = document.getElementById("vip-btn");
    const doubleBtn = document.getElementById("double-btn");
    const singleBtn = document.getElementById("single-btn");
    const affordableBtn = document.getElementById("affordable-btn");
    
    // login modal param
    const loginBtn = document.getElementById("lgBtn");
    const rgChangeBtn = document.getElementById("rgChange");
    const lgChagneBtn = document.getElementById("lgChange");
    const modalCloses = document.querySelectorAll(".fa-xmark");
    const modalForgets = document.querySelectorAll(".ForgetPassword");


    // form func
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

    // login func
    loginBtn.onclick = function () {
        document.getElementById("modal").style.display = "flex";
    }
    rgChangeBtn.onclick = function () {
        document.querySelector(".modal-login").style.display = "none";
        document.querySelector(".modal-register").style.display = "block";
    }
    lgChagneBtn.onclick = function () {
        document.querySelector(".modal-register").style.display = "none";
        document.querySelector(".modal-login").style.display = "block";
    }

    for (const modalClose of modalCloses) {
        modalClose.onclick = function () {
            document.getElementById("modal").style.display = "none";
        }
    }

    for (const modalForget of modalForgets) {
        modalForget.onclick = function () {
            alert("Please contact the administrator for more information")
        }
    }
}

