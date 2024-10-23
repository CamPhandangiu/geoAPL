document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (validateForm()) {
        let username = document.getElementById('username').value;
        alert("Xin Chào " + username + ", tài khoản của bạn đã được đăng kí :>");
    }
});
function validateForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmpassword').value;
    let email = document.getElementById('email').value;

    if (/\s/.test(username)) {
        alert("Username không được phép có khoảng cách !!");
        return false;
    }

    if (password.length < 4 || password.length > 10) {
        alert("Mật Khẩu phải từ 4 đến 10 kí tự !!");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Xát nhận mật khẩu không trùng khớp !!");
        return false;
    }

    return true;
}