window.onload = start;

function start() {
    modalConFig();
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

function closeModal() {
    document.querySelector(".modal-login").classList.add("modal-slide-out");
    document.querySelector(".modal-register").classList.add("modal-slide-out");
     
    setTimeout(function () {
        document.querySelector(".modal-login").classList.remove("modal-slide-out");
        document.querySelector(".modal-register").classList.remove("modal-slide-out");
        modal.style.display = "none";

        //Show login instead of register modal after close register modal
        document.querySelector(".modal-login").style.display = "block";
        document.querySelector(".modal-register").style.display = "none";
    }, 400
    )
}

export function modalConFig() {
    const modal = document.getElementById("modal");
    const loginBtn = document.getElementById("lgBtn");
    const rgChangeBtn = document.getElementById("rgChange");
    const lgChagneBtn = document.getElementById("lgChange");
    const modalCloses = document.querySelectorAll(".fa-xmark");
    const modalForgets = document.querySelectorAll(".ForgetPassword");

    loginBtn.onclick = function () {
        modal.style.display = "flex";
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
        modalClose.onclick = closeModal;
    }

    for (const modalForget of modalForgets) {
        modalForget.onclick = function () {
            alert("Please contact the administrator for more information")
        }
    }

    modal.onclick = closeModal;

    // Fix nổi bọt (click child node catch parent event)
    document.querySelector(".modal-login").onclick = function (event) {
        event.stopPropagation();
    }

    document.querySelector(".modal-register").onclick = function (event) {
        event.stopPropagation();
    }
}