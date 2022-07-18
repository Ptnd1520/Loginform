const listUser = [
    {
        email: 'test1@gmail.com',
        password: '123456'
    },
    {
        email: 'test2@gmail.com',
        password: '123456'
    },
];
document.getElementById('login').onclick = function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email.length < 10 || email.includes('#')) {
        alert('Email chua hop le');
        return;
    }
    if (password.length < 6) {
        alert('Mat khau sai roi ');
        return;
    }

    let checkEmail = false;
    for (let user of listUser) {
        if (user.email === email) {
            if (user.password === password) {
                alert('dang nhap thanh cong');
            }
            else {
                alert('password sai')
            };
            checkEmail = true
        }

    };
    if (checkEmail === false) {
        alert('Email chưa được đăng ký');
    }
};