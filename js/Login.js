function writeDiv(id, val) {
    var ni = document.getElementById(id);
    var newdiv = document.createElement('td'); 
    newdiv.innerHTML = val;
    newdiv.setAttribute('class', 'form-group');
    ni.appendChild(newdiv); 
}

function SendACommand(command) {
    window.status = ";;KHCMD:" + command;
    window.status = ";;KHEND;;"; 
}

function Login()
{
    SendACommand('AC=acLogin,k,' + $("#username")[0].value + '.' + $("#password")[0].value) ;   
}
function WriteName(name,Password,DatabaseName)
{
    $("#username")[0].value = name;
    $("#password")[0].value = Password;
    $("#databasename")[0].value = DatabaseName;
}