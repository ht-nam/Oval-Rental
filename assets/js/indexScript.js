window.onload = start;

function start() {
    const loginBtn = document.getElementById("lgBtn");
    const rgChangeBtn = document.getElementById("rgChange");
    const lgChagneBtn = document.getElementById("lgChange");
    const modalCloses = document.querySelectorAll(".fa-xmark");
    const modalForgets = document.querySelectorAll(".ForgetPassword");

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

function openNav() {
    document.getElementById("mySidenav").style.width = "55%";
    document.getElementById("mySidenav").style.zIndex = "3";

    document.getElementById("transparent-modal").classList.add("tpr-modal");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("transparent-modal").classList.remove("tpr-modal");
}