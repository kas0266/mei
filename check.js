// 注册表单验证
function checkForm() {
    var username = document.getElementById("username").value.trim();
    var pwd = document.getElementById("pwd").value;
    var repwd = document.getElementById("repwd").value;
    var phone = document.getElementById("phone").value;

    if (username.length < 2) {
        alert("用户名不能少于2位");
        return false;
    }

    if (pwd.length < 6) {
        alert("密码不能少于6位");
        return false;
    }

    if (pwd !== repwd) {
        alert("两次密码不一致");
        return false;
    }

    if (!/^1[3-9]\d{9}$/.test(phone)) {
        alert("手机号格式不正确");
        return false;
    }

    alert("注册验证成功！");
    return true;
}