const user = document.getElementById('user');
const password = document.getElementById('password');
const showDialog = document.getElementById('show-dialog');

// check containerNumber
function containerNumber(str){
    const numberChars = /[0123456789]/;
    return numberChars.test(str);
}
// check containerLetter
function containerLetter(str){
    const letterChars = /[a-zA-Z]/;
    return letterChars.test(str);
}
// check specialChars
function specialChars(str){
    let specialChars =/[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}



// subit form register
function submitRegister(){
    let flag = false;
    if(
        (password.value.length>=8) && containerNumber(password.value)
        && containerLetter(password.value) && specialChars(password.value)
        && user.value.length>=6
    )
    {
        flag = true;
    }

    // check flag
    if (flag) {
        // save localStorage
        localStorage.setItem("sdtEmail",user.value);
        localStorage.setItem("password", password.value);
        alert('Đăng kí thành công');
        window.location.hash="";
    }else{
        alert('Đăng kí không thành công, Mật khẩu từ 8 kí tự trở lên (bao gồm chữ số, chữ cái, kí tự đặc biệt) sđt hoặc email phải từ 6 kí tự trở lên');
    }

}


const loginUser = document.getElementById('login-user');
const loginPass = document.getElementById('login-pass');
const formLogin = document.querySelector('.login-form > form');
//console.log(formLogin);

// subit form login
function submitLogin(){
    let lUser = localStorage.getItem("sdtEmail");
    let lPass = localStorage.getItem("password");
    if((loginUser.value==lUser) && (loginPass.value == lPass)){
        console.log("Đăng nhập thành công");
        //window.location.assign("../index.html")
        formLogin.action = 'index.html';
        // return false;
    }else{
        alert("Đăng nhập thất bại! kiểm tra lại thông tin");
    }
    return false;
}


