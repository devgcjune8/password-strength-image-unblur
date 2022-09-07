const BACKGROUND = document.querySelector('.background');
const PASSWORD_INPUT = document.querySelector('#password-box');

PASSWORD_INPUT.addEventListener('input', (event) => {
    const PASSWORD_VALUE = event.target.value;
    const PASSWORD_LENGTH = PASSWORD_VALUE.length;
    const BLUR_VALUE = 30 - PASSWORD_LENGTH * 2;
    BACKGROUND.style.filter = `blur(${BLUR_VALUE}px)`
})