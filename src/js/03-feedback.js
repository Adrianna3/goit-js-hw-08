const { throttle } = require("lodash");

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = 'feedback-form-state';
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

// updateEmail();
// updateMessage();

form.addEventListener('input', throttle(setItemValue, 500))

function setItemValue() {
    const valueInput = {
        email: email.value,
        message: message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(valueInput));
}
 
function updateInput() {
  let inputValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (inputValue === null) {
    return;
  }
  email.value = inputValue.email;
  message.value = inputValue.message;
};

updateInput();

form.addEventListener('submit', saveMessage);
 
function saveMessage(evt) {
    evt.preventDefault();
    console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');  
  this.reset();
}