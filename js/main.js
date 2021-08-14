document.getElementById('login-submit').addEventListener('click', function () {
    // Get user Email js
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user Pass js
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;

    if (userEmail == 'admin@gmail.com' && userPass == 123456) {
        window.location.href = 'banking.html';
    }
    else {
        window.alert('Wrong Username or Password');
    }
});