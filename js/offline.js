function writeDiv(id, val) {
    var ni = document.getElementById(id);
    var newdiv = document.createElement('div'); 
    newdiv.innerHTML = val;
    newdiv.setAttribute('class', 'form-group');
    ni.appendChild(newdiv); 
}

function SendACommand(command) {
    window.status = ";;KHCMD:" + command;
    window.status = ";;KHEND;;"; 
}