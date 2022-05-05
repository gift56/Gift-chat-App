window.addEventListener("load", () => load.classList.add("completed"));

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    checkValidation();
});

let checkValidity = () => {
    let [validEmail, validPassword] = [false, false]
    if (emailA.value === '') {
        explainA.classList.add('show');
        checkA.classList.remove('show');
        emailA.classList.add('error');
        emailA.classList.remove('success');
    }
    else if (!pattern.test(emailA.value)) {
        explainA.classList.add('show');
        checkA.classList.remove('show');
        emailA.classList.add('error');
        emailA.classList.remove('success');
    }
    else {
        checkA.classList.add('show');
        explainA.classList.remove('show');
        emailA.classList.add('success');
        emailA.classList.remove('error');
        validEmail = true
    }
    if (passwordA.value == '') {
        explain2A.classList.add('show');
        check2A.classList.remove('show');
        passwordA.classList.add('error');
        passwordA.classList.remove('success');
    }
    else {
        check2A.classList.add('show');
        explain2A.classList.remove('show');
        passwordA.classList.add('success');
        passwordA.classList.remove('error');
        validPassword = true
    }
    return validEmail && validPassword
}
function checkValidation() {
    let homePage = '/indexs/homepage/home.html';

    checkValidity() ? window.location.assign(homePage) : " "
}

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()

    signUpValidation();
});

let signUpValiditity = () => {
    let [validName, validPassword] = [false, false]

    if (firstName.value === '' || lastName.value === '' || email.value === '') {
        firstName.classList.add('error');
        lastName.classList.add('error');
        validWarning.classList.add('show');
        validWarning.classList.add('show');
        validWarningL.classList.add('show');
        Valide.classList.add('show');
        email.classList.add('error');
        EmailmsgErr.innerHTML = 'Email field cannot be empty';
    }
    else if (!pattern.test(email.value)) {
        Valide.classList.add('show');
        email.classList.add('error');
        EmailmsgErr.innerHTML = 'Invalid Email';
    }
    else {
        firstName.classList.add('success');
        firstName.classList.remove('error');
        validCheck.classList.add('show');
        validWarning.classList.remove('show');
        Validmsg.innerHTML = 'Looking good';
        lastName.classList.add('success');
        lastName.classList.remove('error');
        validCheckL.classList.add('show');
        validWarningL.classList.remove('show');
        ValidmsgL.innerHTML = 'Looking good';
        ValidC.classList.add('show');
        Valide.classList.remove('show');
        email.classList.add('success');
        email.classList.remove('error');
        EmailmsgErr.innerHTML = '';
        Emailmsg.innerHTML = 'Looking good';
        validName = true
    }
    if (Newpassword.value == '' || Confirmpassword.value === '') {
        validerrp.classList.add('show');
        Newpassword.classList.add('error');
        PasswordmsgErr.innerHTML = 'New Password field is empty';
        Confirmpassword.classList.add('error');
        PasswordmsgErr2.innerHTML = 'Confirm Password field is empty';
        validerrp2.classList.add('show');
    }
    else if (Confirmpassword.value != Newpassword.value) {
        Confirmpassword.classList.add('error');
        PasswordmsgErr2.innerHTML = 'Password does not match';
        validerrp2.classList.add('show');
    }
    else {
        validp.classList.add('show');
        validerrp.classList.remove('show');
        Newpassword.classList.add('success');
        Newpassword.classList.remove('error');
        PasswordmsgErr.innerHTML = '';
        Passwordmsg.innerHTML = 'Looking good';
        Confirmpassword.classList.add('success');
        Confirmpassword.classList.remove('error');
        PasswordmsgErr2.innerHTML = '';
        Passwordmsg2.innerHTML = 'Looking good';
        validp2.classList.add('show');
        validerrp2.classList.remove('show');
        validPassword = true
    }
    return validName && validPassword
}

function signUpValidation() {
    let confirmPages = '/indexs/homepage/home.html';

    signUpValiditity() ? window.location.assign(confirmPages) : " "
}