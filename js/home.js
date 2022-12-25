const menuAccount = document.getElementById('nav-account');
const btnAccount = document.getElementById('my-account');

const menuMessenger = document.getElementById('nav-messenger');
const btnMessenger = document.getElementById('messenger');

const iconMessenger = document.querySelector('.fa-facebook-messenger');


//check login use localStorage
if(localStorage.length<=0){
    window.location.assign("../login.html")
}


/* 
*  handle event Headers
*/
// hien thi menu account
function myAccount(){
    if(menuAccount.style.display == 'block'){
        menuAccount.style.display = 'none';
    }else{
        menuAccount.style.display = 'block';
    }
    //menuAccount.classList.toggle('show-nav-account');
}

// close click outside
document.onclick = function(e){
    if (e.target.id != 'my-account' && e.target.id != 'avt-account') {
        console.log('vao day 1');
        //!$(e.target).parents('#nav-account').length
        // console.log(btnAccount);
        console.log(e.target.id);
        menuAccount.style.display = 'none';
        //menuAccount.classList.remove('show-nav-account');
    }
    if (e.target.id != 'messenger' && e.target.id != 'icon-messenger') {
        console.log('hello 2' );
        menuMessenger.classList.remove('show-nav-messenger');
        iconMessenger.classList.remove('click-color-icon-messsenger');
        btnMessenger.classList.remove('click-background-btn-messenger');
    }
}

// hien thi messenger
function myMessenger(){
    menuMessenger.classList.toggle('show-nav-messenger');
    iconMessenger.classList.toggle('click-color-icon-messsenger');
    btnMessenger.classList.toggle('click-background-btn-messenger');
}

