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
    const regex1 = /[^가-힣]/g;
    const regex2 = /[0-9]{6}/g;
    const regex3 = /[0-9]{7}/g;
    const regex4 = /[^A-Za-z0-9]/g;
    const regex5 = /(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/

    if(txtname == "") {
        namedemo.innerHTML = " *이름을 입력해주세요."
        return false;
    }
    else if(regex1.test(txtname)) {
        namedemo.innerHTML = " *이름은 한글로만 입력 가능합니다.."
        return false;
    }
    else {
        namedemo.innerHTML = " "
    }
    if(txtage == "") {
        agedemo.innerHTML = " *생년월일을 입력해주세요."
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
        agedemo.innerHTML = " "
    }
    if(txtid == "") {
        iddemo.innerHTML = " *아이디를 입력해주세요."
        return false;
    }
    else if(regex4.test(txtid)) {
        iddemo.innerHTML = " *아이디는 영문과 숫자만 입력해주세요."
        return false;
    }
    else {
        iddemo.innerHTML = " "
    }
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
        pwdcheckdemo.innerHTML = " "
    }
    if(txtmail == "" || txtmail2 == "") {
        maildemo.innerHTML = " *이메일을 입력해주세요."
        return false;
    }
    else {
        maildemo.innerHTML = " "
    }
}

function onmail() {
    let btnmail = document.getElementById("btnmail").value
    document.getElementById("txtmail2").value = btnmail;
    
}    



    
