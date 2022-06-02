import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector("form"),
    email: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
    btn: document.querySelector("button"),
}

const LOCALSTORAGE_KEY = "feedback-form-state";

let formData;

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

addToText()

function onFormSubmit(e) {
    e.preventDefault();

    if (!formData['email'] || !formData['message']) {
        return alert('Not all fields are filled');
    }
    e.currentTarget.reset();

    localStorage.removeItem(LOCALSTORAGE_KEY);

    for (const key in formData) {
        delete formData[key];
    }
}

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function addToText() {
    formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (formData) {
        for (const key in formData) {
            refs.form[key].value = formData[key];
        }
    } else {
        formData = {};
    }
}