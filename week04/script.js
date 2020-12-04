function transformUpperCase(){
    let a = document.getElementById("namaPengguna");
    a.value = a.value.toUpperCase();
    
}

let elUSername = document.getElementById("namaPengguna");
elUSername.addEventListener("keyup", transformUpperCase);

function checkPasswordlength(){
let password = document.getElementById("kataLaluan").value;
if(password.length < 5) {
alert("Password must be more than 5 characters");
} else {
    alert("Password accepted!")
}
}

let elPassword = document.getElementById("kataLaluan");
elPassword.onblur = checkPasswordlength;