const aartiButton = document.getElementById("aartiButton");
const thaalButton = document.getElementById("thaalButton");

const aartiPopup = document.getElementById("aartiPopup");
const thaalPopup = document.getElementById("thaalPopup");

const closeAartiButton = document.getElementById("closeAartiButton");
const closeThaalButton = document.getElementById("closeThaalButton");


// Open Aarti
aartiButton.addEventListener("click", function () {
    aartiPopup.classList.add("show");
});


// Close Aarti
closeAartiButton.addEventListener("click", function () {
    aartiPopup.classList.remove("show");
});


// Open Thaal
thaalButton.addEventListener("click", function () {
    thaalPopup.classList.add("show");
});


// Close Thaal
closeThaalButton.addEventListener("click", function () {
    thaalPopup.classList.remove("show");
});


// Close Aarti by clicking outside
aartiPopup.addEventListener("click", function (event) {
    if (event.target === aartiPopup) {
        aartiPopup.classList.remove("show");
    }
});


// Close Thaal by clicking outside
thaalPopup.addEventListener("click", function (event) {
    if (event.target === thaalPopup) {
        thaalPopup.classList.remove("show");
    }
});