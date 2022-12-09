import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const messageText = document.querySelector("textarea");
const label = document.querySelectorAll("label");
const LOCALSTORAGE_KEY = "feedback-form-state";
const localEmail = 'email';
const localMessage ='message'






updateForm();
form.addEventListener("input", saveForm);
form.addEventListener("submit", clearForm);

function clearForm(event) {
    event.preventDefault();
    form.reset();
    localStorage.clear();
}
function saveForm(event) {
     const object = {
        email: `${input.value}`,
        message: `${messageText.value}`,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
    localStorage.setItem(localEmail, input.value);
    localStorage.setItem(localMessage, messageText.value)
    updateForm();
}



 function updateForm() {
     input.value = localStorage.getItem(localEmail) || '';
     messageText.value = localStorage.getItem(localMessage) || '';   
} 


