import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const messageText = document.querySelector("textarea");
const LOCALSTORAGE_KEY = "feedback-form-state";

input.setAttribute("required",true);
messageText.setAttribute("required", true);

let returnedObject = {};


form.addEventListener("input", saveForm);
form.addEventListener("submit", clearForm);

function clearForm(event) {
    event.preventDefault();
    form.reset();
    localStorage.clear();
}
function saveForm() {
     const object = {
        email: `${input.value}`,
        message: `${messageText.value}`,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
    let returnedObject = {};

}

getObjectFromLocalStorage();
updateForm();

function getObjectFromLocalStorage() {
    const savedObject = localStorage.getItem(LOCALSTORAGE_KEY);
    returnedObject = JSON.parse(savedObject);
    console.log(returnedObject);
    return returnedObject;
};


function updateForm() {
    input.value = returnedObject.email;
    messageText.value = returnedObject.message;
} 




