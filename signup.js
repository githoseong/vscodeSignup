'use strict'
function complete() {
    let txtname = document.getElementById("txtname").value;
    let txtage = document.getElementById("txtage").value;
    let txtageback = document.getElementById("txtageback").value;
    let txtid = document.getElementById("txtid").value;
    let txtpwd = document.getElementById("txtpwd").value;
    let pwdcheck = document.getElementById("pwdcheck").value;
    let txtmail = document.getElementById("txtmail").value;
    let txtmail2 = document.getElementById("txtmail2").value;
    let txttel  = document.getElementById("txttel").value;
    const regex1 = /[^가-힣]/g;
    const regex2 = /[0-9]{6}/g;
    const regex3 = /[0-9]{7}/g;
    const regex4 = /[^A-Za-z0-9]/g;
    const regex5 = /(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
    const regex6 = /\D/g;
    // const regex6 = /\d{10,11}/g;

    if(txtname == "") {
        namedemo.innerHTML = " *이름을 입력해주세요."
        document.getElementById("txtname").focus();
        return false;
    }
    else if(regex1.test(txtname)) {
        namedemo.innerHTML = " *이름은 한글로만 입력 가능합니다.."
        document.getElementById("txtname").focus();
        return false;
    }
    else {
        namedemo.innerHTML = " "
        // document.getElementById("txtname").style.borderColor="green";
    }
    if(txtage == "") {
        agedemo.innerHTML = " *주민등록번호를 입력해주세요."
        document.getElementById("txtage").focus();
        return false;
    }
    else if(!regex2.test(txtage)) {
        agedemo.innerHTML = " *주민등록번호 앞자리는 6자리 숫자로만 입력해주세요."
        document.getElementById("txtage").focus();
        return false;
    }
    else if(!regex3.test(txtageback)) {
        agedemo.innerHTML = " *주민등록번호 뒷자리는 7자리 숫자로만 입력해주세요."
        document.getElementById("txtageback").focus();
        return false;
    }
    else {
        // 주민번호 체크디짓(check Digit) 체크 - 주민번호 마지막자리
        const check = [2,3,4,5,6,7,8,9,2,3,4,5];
        let jumin = txtage + txtageback;
        let hap = 0;

        for(let i=0; i<check.length; i++) {
          hap += check[i] * jumin.charAt(i);
        }

        let na = hap % 11;
        let checkDigit;

        checkDigit = 11 - na;

        if(checkDigit > 9) {
            checkDigit = checkDigit % 10;
        }

        if(checkDigit != jumin.substring(jumin.length -1)) {
            agedemo.innerHTML = " *올바르지 않은 주민등록번호입니다."
        }
        else {
            agedemo.innerHTML = " "
        }
    }    

    if(txtid == "") {
        iddemo.innerHTML = " *아이디를 입력해주세요."
        document.getElementById("txtid").focus();
        return false;
    }
    else if(regex4.test(txtid)) {
        iddemo.innerHTML = " *아이디는 영문과 숫자만 입력해주세요."
        document.getElementById("txtid").focus();
        return false;
    }
    else {
        iddemo.innerHTML = " "
    }
    if(txtpwd == "") {
        pwddemo.innerHTML = " *비밀번호를 입력해주세요."
        document.getElementById("txtpwd").focus();
        return false;
    }
    else if(txtpwd.length < 8 ) {
        pwddemo.innerHTML = " *비밀번호는 8자리 이상 입력해주세요. "
        document.getElementById("txtpwd").focus();
        return false
    }
    else if(!regex5.test(txtpwd)) {
        pwddemo.innerHTML = " *비밀번호는 영문, 숫자, 특수문자를 포함해주세요."
        document.getElementById("txtpwd").focus();
        return false;
    }
    else {
        pwddemo.innerHTML = " "
    }
    if(pwdcheck == "") {
        pwdcheckdemo.innerHTML = " *비밀번호를 다시 한번 입력해주세요."
        document.getElementById("pwdcheck").focus();
        return false;
    }
    else if(pwdcheck != txtpwd ) {
        pwdcheckdemo.innerHTML = " *입력한 비밀번호와 다릅니다."
        document.getElementById("pwdcheck").focus();
        return false;
    }
    else {
        pwdcheckdemo.innerHTML = " "
    }
    if(txtmail == "" || txtmail2 == "") {
        maildemo.innerHTML = " *이메일을 입력해주세요."
        document.getElementById("txtmail").focus();
        return false;
    }
    else {
        maildemo.innerHTML = " "
    }
    if(regex6.test(txttel)) {
        teldemo.innerHTML = " *전화번호는 공백없이 숫자로만 입력해주세요."
        document.getElementById("txttel").focus();
        return false;
    }
    else {
        teldemo.innerHTML = " "
    }
    if(myform.chk.checked == false) {
        alert("회원 약관에 동의해주세요.")   
    }
}

function onmail() {
    let btnmail = document.getElementById("btnmail").value
    document.getElementById("txtmail2").value = btnmail;
    
}    

function juCheck() {
    let txtage = document.getElementById("txtage").value;
    if(txtage.length == 6) {
        document.getElementById("txtageback").focus();
    }
}

function newwin() {
    let url = "signup_child.html";
    let winname = "newWindow";
    let winx = 400;
    let winy = 300;
    let x = (window.screen.width/2) - (winx/2);
    let y = (window.screen.height/2) - (winy/2);
    window.open(url,winname,winx,winy,x,y);
}

function blurname() {
    let txtname = document.getElementById("txtname").value;
    const regex1 = /[^가-힣]/g;

    if(txtname == "") {
        namedemo.innerHTML = " *이름을 입력해주세요."
        return false;
    }
    else if(regex1.test(txtname)) {
        namedemo.innerHTML = " *이름은 한글로만 입력 가능합니다.."
        return false;
    }
    else {
        namedemo.innerHTML = "<font color='green'> *성명을 입력하셨습니다.</font> "
    }
}

function blurage() {
    let txtage = document.getElementById("txtage").value;
    let txtageback = document.getElementById("txtageback").value;
    const regex2 = /[0-9]{6}/g;
    const regex3 = /[0-9]{7}/g;

    if(txtage == "") {
        agedemo.innerHTML = " *주민등록번호를 입력해주세요."
        return false;
    }
    else if(!regex2.test(txtage)) {
        agedemo.innerHTML = " *주민등록번호 앞자리는 6자리 숫자로만 입력해주세요."
        return false;
    }
    else if(!regex3.test(txtageback)) {
        agedemo.innerHTML = " *주민등록번호 뒷자리는 7자리 숫자로만 입력해주세요."
        return false;
    }
    else {
    agedemo.innerHTML = "<font color='green'> *주민등록번호를 입력하셨습니다.</font> "
    }
}

function blurid() {
    let txtid = document.getElementById("txtid").value;
    const regex4 = /[^A-Za-z0-9]/g;

    if(txtid == "") {
        iddemo.innerHTML = " *아이디를 입력해주세요."
        return false;
    }
    else if(regex4.test(txtid)) {
        iddemo.innerHTML = " *아이디는 영문과 숫자만 입력해주세요."
        return false;
    }
    else {
        iddemo.innerHTML = "<font color='green'> *아이디를 입력하셨습니다.</font> "
    }
}

function blurpwd() {
    let txtpwd = document.getElementById("txtpwd").value;
    let pwdcheck = document.getElementById("pwdcheck").value;
    const regex5 = /(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/

    if(txtpwd == "") {
        pwddemo.innerHTML = " *비밀번호를 입력해주세요."
        return false;
    }
    else if(txtpwd.length < 8 ) {
        pwddemo.innerHTML = " *비밀번호는 8자리 이상 입력해주세요. "
        return false
    }
    else if(!regex5.test(txtpwd)) {
        pwddemo.innerHTML = " *비밀번호는 영문, 숫자, 특수문자를 포함해주세요."
        return false;
    }
    else {
        pwddemo.innerHTML = " "
    }
    if(pwdcheck == "") {
        pwdcheckdemo.innerHTML = " *비밀번호를 다시 한번 입력해주세요."
        return false;
    }
    else if(pwdcheck != txtpwd ) {
        pwdcheckdemo.innerHTML = " *입력한 비밀번호와 다릅니다."
        return false;
    }
    else {
        pwdcheckdemo.innerHTML = "<font color='green'> *비밀번호를 입력하셨습니다.</font> "
    }
}

function blurmail() {
    let txtmail = document.getElementById("txtmail").value;
    let txtmail2 = document.getElementById("txtmail2").value;

    if(txtmail == "" || txtmail2 == "") {
        maildemo.innerHTML = " *이메일을 입력해주세요."
        return false;
    }
    else {
        maildemo.innerHTML = "<font color='green'> *이메일을 입력하셨습니다.</font>  "
    }
}
function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    // document.getElementById("mySidebar").style.height = "100%";
    document.getElementById("mySidebar").style.display = "block";
}   

function w3_close() {
document.getElementById("mySidebar").style.display = "none";
}

