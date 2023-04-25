
function showPassword() {
    var passwordField = document.getElementById("user_password");
    var icon = document.querySelector(".input-icon-1");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}

function resetPass(){
    var email = document.getElementById("login_id");
    if (email.value.length != 0){
        alert('Gửi lại mật khẩu thành công!');
    }
}

function register() {
    var name = document.getElementById('login_name');
    var email_tel = document.getElementById('user_infor');
    var pass = document.getElementById('user_password');
    var passconfirm = document.getElementById('user_passwordconfirm');

    if (name.value.length == 0) {
        alert('Vui lòng nhập họ và tên');
    } else if (email_tel.value.length == 0) {
        alert('Vui lòng nhập email hoặc số điện thoại');
    } else if (pass.value.length == 0) {
        alert('Vui lòng nhập mật khẩu');
    } else if (passconfirm.value.length == 0){
        alert('Vui lòng xác nhận lại mật khẩu');
    } else if (pass.value.length != passconfirm.value.length){
        alert('Hai mật khẩu không giống nhau!');
    } else if (name.value.length == 0 && email_tel.value.length == 0 && pass.value.length == 0 && passconfirm.value.length == 0) {
        alert('Vui lòng nhập đầy đủ thông tin');
    } else {
        localStorage.setItem('username', name.value);
        localStorage.setItem('email_phonenumber', email_tel.value);
        localStorage.setItem('password', pass.value);
        alert('Tài khoản của bạn đã được tạo thành công!');
        window.location.href = "../Login.html";
    }
}

function check() {
    var storedEmail_Tel = localStorage.getItem('email_phonenumber');
    var storedPassword = localStorage.getItem('password');
    var loginid = document.getElementById('login_id');
    var password = document.getElementById('user_password');

    if (loginid.value == storedEmail_Tel  && password.value == storedPassword) {
        alert('Đăng nhập thành công');
    } else if (loginid.value.length == 0 && password.value.length == 0) {
        alert('Vui lòng nhập đầy đủ thông tin');
    } else if (loginid.value.length == 0) {
        alert('Vui lòng nhập tài khoản');
    } else if (password.value.length == 0) {
        alert('Vui lòng nhập mật khẩu');
    } else if (loginid.value != storedEmail_Tel || password.value != storedPassword) {
        alert('Đăng nhập thất bại');
    }
}