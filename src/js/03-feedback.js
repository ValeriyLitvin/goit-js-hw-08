import throttle from 'lodash.throttle';

const LOCALESTORAGE_KEY = 'feedback-form-state';
const feedbackFormRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector("input[name='email']");
const messageRef = document.querySelector("textarea[name='message']");

let inputData = {
  email: '',
  message: '',
};

formAutoComplete();

feedbackFormRef.addEventListener('input', throttle(writeToLocaleStorage, 500));

function writeToLocaleStorage() {
  inputData.email = emailRef.value;
  inputData.message = messageRef.value;
  const inputLocalData = JSON.stringify(inputData);
  localStorage.setItem(LOCALESTORAGE_KEY, inputLocalData);
}

function formAutoComplete() {
  if (localStorage.getItem(LOCALESTORAGE_KEY)) {
    inputData = JSON.parse(localStorage.getItem(LOCALESTORAGE_KEY));
    emailRef.value = inputData.email;
    messageRef.value = inputData.message;
  }
}

feedbackFormRef.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'FORM') {
    return;
  }
  if (emailRef.value === '' || messageRef.value === '') {
    return alert('Всі поля мають бути заповнені');
  }
  const data = JSON.parse(localStorage.getItem(LOCALESTORAGE_KEY));
  console.log(data);

  evt.target.reset();
  localStorage.removeItem(LOCALESTORAGE_KEY);
}
