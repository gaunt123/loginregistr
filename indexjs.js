var count=0;
function input(el){
    console.log(el.value)
}
var passlist=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var loglist=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function logIn(el){
    var pass=document.getElementById('passin').value;
    var name=document.getElementById('logname').value;
    regIn(passlist,loglist);
    if (name=="" || pass==""){
        alert("Заполните все поля");
    }
    else if (name!="" && pass!=""){
        for (var i=0;i<loglist.length;i++){
            if (passlist[i]==pass && loglist[i]==name){
                alert("Вы вошли в систему");
            }
            else if (passlist[i]!=pass || loglist[i]!=name){
                alert("Неправильный логин или пароль")
                break;
            }
        }
        console.log(passlist);
        console.log(loglist);
    }

}
function regIn(el){
    var pass=document.getElementById('passin1').value;
    var repass=document.getElementById('passrep').value;
    var name=document.getElementById('logname1').value;
    if (name=="" || pass=="" || repass==""){
        alert("Заполните все поля");
    }
    else if (name!="" && pass!="" && repass!=""){
        for (var i=0; i < loglist.length; i++) {
            if (loglist[i]==name){
                alert("Такой логин уже существует");
                break;
            }
            else if (pass!=repass){
                alert("Пароли должны совпадать")
                break;
            }
            else if (loglist[i]==0 && passlist[i]==0) {
                loglist[i] = name;
                passlist[i] = pass;
                alert("Успешный вход!")
                window.location = 'index.html'
                break;
            }
        }
        return loglist;
        return passlist;
        console.log(passlist);
        console.log(loglist);
    }
}
