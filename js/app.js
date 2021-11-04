var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
});
var formName = document.querySelector('.name');
var formEmail = document.querySelector('.email');
var formMessage = document.querySelector('.message');
var formSubmit = document.querySelector('.button');
var form = document.querySelector('.form');
var handleSubmit = function (e) {
    e.preventDefault();
    formName.value && formEmail.value && formMessage.value
        ? console.log("\n    Name: " + formName.value + "\n    \n    Email: " + formEmail.value + "\n    \n    Message: " + formMessage.value + "\n    ")
        : null;
};
form.addEventListener('submit', handleSubmit);
