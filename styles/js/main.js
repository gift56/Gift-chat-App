window.addEventListener("load", () => load.classList.add("completed"));

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;
myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    checkValidation();
});

let checkValidity = () => {
    let [validEmail, validPassword] = [false, false]
    if (email.value === '') {
        explain.classList.add('show');
        check.classList.remove('show');
        email.classList.add('error');
        email.classList.remove('success');
        errormsgs.innerHTML = 'Please enter a valid email!';
    }
    else if (!pattern.test(email.value)) {
        explain.classList.add('show');
        check.classList.remove('show');
        email.classList.add('error');
        email.classList.remove('success');
        errormsgs.innerHTML = 'Invalid Email!';
    }
    else {
        check.classList.add('show');
        explain.classList.remove('show');
        email.classList.add('success');
        email.classList.remove('error');
        errormsgs.innerHTML = '';
        errormsgs2.innerHTML = "Looking good!";
        validEmail = true
    }
    if (password.value == '') {
        explain2.classList.add('show');
        check2.classList.remove('show');
        password.classList.add('error');
        password.classList.remove('success');
        errormsgs22.innerHTML = 'Password input cannot be empty';
    }
    else {
        check2.classList.add('show');
        explain2.classList.remove('show');
        password.classList.add('success');
        password.classList.remove('error');
        errormsgs22.innerHTML = '';
        errormsg22.innerHTML = 'Looking good';
        validPassword = true
    }
    return validEmail && validPassword
}
function checkValidation() {
    let homePages = '/indexs/homepage/home.html';

    checkValidity() ? window.location.assign(homePages) : " "
}

