const hamburger: HTMLElement = document.querySelector('.hamburger');

const navLinks: HTMLElement = document.querySelector('.nav')!;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
});

const formName: HTMLInputElement = document.querySelector('.name');
const formEmail: HTMLInputElement = document.querySelector('.email');
const formMessage: HTMLTextAreaElement = document.querySelector('.message');
const formSubmit: HTMLButtonElement = document.querySelector('.button');
const form: HTMLFormElement = document.querySelector('.form');

const handleSubmit: any = (e: HTMLFormElement) => {
  e.preventDefault();
  formName.value && formEmail.value && formMessage.value
    ? console.log(`
    Name: ${formName.value}
    
    Email: ${formEmail.value}
    
    Message: ${formMessage.value}
    `)
    : null;
};

form.addEventListener('submit', handleSubmit);
