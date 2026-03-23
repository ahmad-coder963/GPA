//start settings show and change
/**var searcher_setting=localStorage.getItem("search_setting");
if(searcher_setting=="true"){
document.getElementById("box1").setAttribute("checked",""); 
    }
**/  //location.reload(forceGet)

Number.prototype.formatMoney = function (c, d, t) {
	var n = this,
			c = isNaN(c = Math.abs(c)) ? 2 : c,
			d = d == undefined ? "." : d,
			t = t == undefined ? "," : t,
			s = n < 0 ? "-" : "",
			i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
			j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function Local() {
    return {
        set: function (key, obj) {
            localStorage.setItem(key, JSON.stringify(obj));
            return obj;
        },
        get: function (key) {
            var obj = {};
            if (localStorage.getItem(key) !== 'undefined') {
                obj = JSON.parse(localStorage.getItem(key));
            }
            return obj;
        },
        clear: function () {
            localStorage.clear();
            return this;
        },
        remove: function (key) {
            localStorage.removeItem(key);
            return this;
        }
    };
}
var local = Local();


var inc = 0;
var fontsize = 1;

function Incval() {
    fontsize++;
    var x = $('h1,h2,h3,h4,h5,h6,a,strong,i');
    x.css("fontSize", "+=1vmin");
}

$(document).ready(function () {
    $("body.kh-theme, body.kh-auth").addClass("kh-ready");
});

// Theme toggle (light/dark)
$(document).ready(function () {
    var $btn = $("#themeToggle");
    if ($btn.length === 0) return;

    var isArabic = document.documentElement.lang === "ar";
    var labels = {
        light: isArabic ? "فاتح" : "Light",
        dark: isArabic ? "داكن" : "Dark"
    };

    function applyTheme(isLight) {
        $("body.kh-theme").toggleClass("kh-light", isLight);
        $btn.attr("aria-pressed", isLight ? "true" : "false");
        $btn.html(
            (isLight
                ? '<i class="fa fa-moon-o"></i><span class="kh-theme-toggle__label">' + labels.dark + '</span>'
                : '<i class="fa fa-sun-o"></i><span class="kh-theme-toggle__label">' + labels.light + '</span>')
        );
        localStorage.setItem("kh-theme", isLight ? "light" : "dark");
    }

    var stored = localStorage.getItem("kh-theme");
    applyTheme(stored === "light");

    $btn.on("click", function () {
        var isLight = $("body.kh-theme").hasClass("kh-light");
        applyTheme(!isLight);
    });
});
function Dncval() {
    fontsize--;
    var x = $('h1,h2,h3,h4,h5,h6,a,strong,i');
    x.css("fontSize", "-=1px");
}

function getclo(color) {
    if (color == "White") {
        return "default";
    }
    if (color == "Dark Green") {
        return "primary";
    }
    if (color == "Ligth Green") {
        return "success";
    }
    if (color == "Cyan") {
        return "info";
    }
    if (color == "Orange") {
        return "warning";
    }
    if (color == "Red") {
        return "danger";
    }
}
function getcolorvalue(color)
{
    if (color == "default") {
        return "transparent ";
    }           
    if (color == "primary") {
        return "#009688";
    }
    if (color == "success") {
        return "#11da8f";
    }
    if (color == "info") {
        return "#03a9f4";
    }
    if (color == "warning") {
        return "#ff5722";
    }
    if (color == "danger") {
        return "#f44336";
    }  
}

function CreateAction(id, caption, name, delid, color,img, top, left, lang) {
    try {
        if (lang=="En") {
            var masterdiv = document.createElement('div');
            masterdiv.setAttribute("class","btn-group drg");
            masterdiv.setAttribute("style", "text-transform:none;margin: 5px;position: absolute;");    

            var tempo = "ac=" + (name == '' ? 'Empty' : name) + "/" + delid;

            masterdiv.setAttribute("data",tempo);
            color = getclo(color);

            var newbut = document.createElement('button');
            if (delid != undefined)
                newbut.setAttribute("data", "ac=" + (name == '' ? 'Empty' : name) + "/" + delid);
            newbut.setAttribute("type", "button");
            newbut.setAttribute("class", "btn btn-" + color + " btn-lg");  

            newbut.setAttribute("style", "border-bottom-right-radius: 4px;border-top-right-radius: 4px;");    
            newbut.innerHTML = "<span style='font-weight:bold;' > " + caption + "</span>" + 
                "";
            if (top != undefined && left != undefined) {
                if (top != "" && left != "") {
                    local.set(tempo, { top: top, left: left });
                } 
            } 
            var imgbut = document.createElement('button');
            imgbut.setAttribute("type", "button");
            imgbut.setAttribute("class", "btn"); 
            imgbut.setAttribute("style", "border-bottom-left-radius: 4px;border-top-left-radius: 4px;padding-right: 0px;padding-top: 0px;padding-bottom: 0px;padding-left: "+                    "0px;border-style: solid;border-color: " + getcolorvalue(color) + ";border-width: 1px;margin-right: 0px;width: 46px;");          
            imgbut.innerHTML ="<img src='./Icon/48/" + img + ".ico' style=\"width: 87%;\" class=\"img-rounded\"  onerror=\"this.src='./Icon/default.ico'\" />" ;
            masterdiv.appendChild(imgbut);
            masterdiv.appendChild(newbut);

            var ni = document.getElementById(id);
            ni.appendChild(masterdiv);
            }
        else  {
            var masterdiv = document.createElement('div');
            masterdiv.setAttribute("class","btn-group drg");
            masterdiv.setAttribute("style", "text-transform:none;margin: 5px;position: absolute;");    

            var tempo = "ac=" + (name == '' ? 'Empty' : name) + "/" + delid;

            masterdiv.setAttribute("data",tempo);
            color = getclo(color);

            var newbut = document.createElement('button');
            if (delid != undefined)
                newbut.setAttribute("data", "ac=" + (name == '' ? 'Empty' : name) + "/" + delid);
            newbut.setAttribute("type", "button");
            newbut.setAttribute("class", "btn btn-" + color + " btn-lg");  

            newbut.setAttribute("style", "border-bottom-left-radius: 4px;border-top-left-radius: 4px;");    
            newbut.innerHTML = "<span style='font-weight:bold;' > " + caption + "</span>" + 
                "";
            if (top != undefined && left != undefined) {
                if (top != "" && left != "") {
                    local.set(tempo, { top: top, left: left });
                } 
            } 
            var imgbut = document.createElement('button');
            imgbut.setAttribute("type", "button");
            imgbut.setAttribute("class", "btn"); 
            imgbut.setAttribute("style", "border-bottom-right-radius: 4px;border-top-right-radius: 4px;padding-right: 0px;padding-top: 0px;padding-bottom: 0px;padding-left: 0px;border-style: solid;border-color: " + getcolorvalue(color) + ";border-width: 1px;margin-right: 0px;width: 46px;");          
            imgbut.innerHTML ="<img src='./Icon/48/" + img + ".ico' style=\"width: 87%;\" class=\"img-rounded\"  onerror=\"this.src='./Icon/default.ico'\" />" ;        
            
            masterdiv.appendChild(imgbut);
            masterdiv.appendChild(newbut);

            var ni = document.getElementById(id);
            ni.appendChild(masterdiv);   
        }
    }
    catch (err) {
        alert(err.message);
    }
}


function CreateAccount(id, caption, name, delid) {
    try {
        if (delid != undefined)
            var tempo = "onclick='SendACommand('ac=AC=acAccountSearch," + delid + "')' ";
        //var hrefd="href=\"pages/ar_tables.html\"";
		var res = name.split(",");
        var m = "<a " + tempo + " class=\" \" style='margin: 0px;'>" +
			  "<h1 style='font-size:24px;'>" + caption + "</h1>" +
				"<span class='pull-right label label-info'>" + (parseInt(res[0])).formatMoney(2, '.', ',') +" "+res[1] + "</span>" +
				 "</a>" +//style=\" font-family: 'Roboto'; \"
				"<hr/>";
        var ni = document.getElementById(id);
        ni.innerHTML = ni.innerHTML + " " + m; //
    }
    catch (err) {
        alert(err.message);
    }
}

function getfavAcc(list) {
    try {
        var ni = document.getElementById(list[0].id);
        ni.innerHTML = '';
        for (var i = 0; i < list.length; i++) {
            CreateAccount(list[i].id, list[i].caption, list[i].name, list[i].delid);
        }
    }
    catch (err) {
        alert(err.message);
    }
}

function getfav(list) {
    try {
        var ni = document.getElementById("favoriteslist");
        if (ni.childNodes.length > 2)
            for (var i = 3; i < ni.childNodes.length - 1;) {
                ni.children[i].remove();
            }
        for (var i = 0; i < list.length; i++) {
        CreateAction(list[i].id, list[i].caption, list[i].name, list[i].delid, list[i].color,list[i].img, list[i].top, list[i].left, list[i].lang);
        }
        $(".drg").draggable({
            cancel: ".title",
            containment: "parent",
            snap: true,
            stack: ".products",
            opacity: 0.75
        });//$('.drg').draggable({cancel:false});
        $('.drg').draggable({
            start: function (event, ui) {
                $(this).addClass('noclick');
            },
            stop: function (event, ui) {
                $(this).removeClass('noclick');
                var offset = $(this).offset();
                //local.set( $(this)[0].attributes[1].value, offset);
                //$($drag[i]).css(local.get(temp));
                var top = $(this).position().top;
                var left = $(this).position().left;
                SendACommand("AC=acSaveOffset," + offset.top + "/" + offset.left + "," + $(this)[0].attributes["data"].value)
                console.log(top + "," + left);
                console.log(offset.top);
                console.log(offset.left);
            }
        });

        var $drag = $('.drg');
        for (var i = 0; i < $drag.length; i++) {
            var temp = $drag[i].attributes["data"].value;
            if (local.get(temp)) {
                //$($drag[i]).css(local.get(temp));//$drag.attributes[1].value
                $($drag[i]).offset(local.get(temp));
            }
        }


        $('.drg').on('click', function () {
            var temp = $(this)[0].attributes["data"].value;
            SendACommand(temp);
        });

    }
    catch (err) {
        alert(err.message);
    }
}
function getResizwidth(width, height) {
    var ni = $("#favoriteslist");
    ni.css("width", width + "px");
    ni.css("height", height + "px");
    
}

function writeall(id, val, name) {
    if (id == "Ramusage") {
        var ni = document.getElementById(id);
        var newdiv = document.createElement('a');
        var divIdName = 'my' + inc + 'Div';
        newdiv.innerHTML = val;
        newdiv.setAttribute('id', divIdName);
        newdiv.setAttribute('class', "dropdown-toggle");
        newdiv.setAttribute('role', "button");
        ni.appendChild(newdiv);
        inc++;
		return;
    }
    if($('#'+name).length>0) {
        $('#'+name).remove();
    }
    var ni = document.getElementById(id);
    var newdiv = document.createElement('div');
    var realid = name;
    newdiv.innerHTML = val;
    newdiv.setAttribute('id', realid);
    if (document.getElementById('remin1'))
        ni.removeChild(ni.lastChild);
    ni.appendChild(newdiv); 
}

function usern(val) {
    var ni = document.getElementById('username');
    var newdiv = document.createElement('span');
    var divIdName = 'my' + inc + 'Div';
    newdiv.innerHTML = "  " + val + "  ";
    newdiv.setAttribute('id', divIdName);
    ni.appendChild(newdiv);
    inc++;
}
$(window).load(function () {
    // run code 
});

function goforit() {
    if (document.all || document.getElementById) {
        setInterval("getthedate()", 1000)
        getthedate();
    }

}

function fc() {
    // var remind_setting=localStorage.getItem("remind_setting");
    // if((remind_setting !=null && remind_setting !="false")|| remind_setting =="true")
    // {
    if (document.getElementById('remin2')) {
        var ni = document.getElementById('remin2');
        var newdiv = document.createElement('div');
        if (document.documentElement.lang == 'ar') {
            newdiv.innerHTML = "<h4><a style=cursor:pointer id=rea " +
          "onclick=SendACommand('AC=acDesktopRemindersSettings') > " +
          "<strong> اعداد رسائل التذكير</strong> <i class='fa fa-table'/></a></h4>";
        }
        else {
            newdiv.innerHTML = "<h4><a style=cursor:pointer id=ree " +
        "onclick=SendACommand('AC=acDesktopRemindersSettings') >" +
        "<strong> Set Desktop Reminders  </strong><i class='fa fa-table'/> </a></h4>";
        }
    }
    ni.appendChild(newdiv);
    //  }
    // else{document.getElementById('messages').removeChild(document.getElementById('messages').lastChild  )}
}

//$("#profile").ready()
//{
//    if (document.getElementById('profile')) {
//        var ni = document.getElementById('profile');
//        var newdiv = document.createElement('div');
//        var divIdName = 'my' + inc + 'Div';
//        newdiv.setAttribute('id', divIdName);
//        inc++;
//        if (document.documentElement.lang == 'ar') {
//            newdiv.innerHTML = "<h4><a style=cursor:pointer id=baa " +
//          "onclick=SendACommand('AC=acBackup')  >" +
//          "<strong> نسخة احتياطية جديدة  </strong><i class='fa fa-database'/></a></h4>";
//        }
//        else {
//            newdiv.innerHTML = "<h4><a style=cursor:pointer id=bae " +
//        "onclick=SendACommand('AC=acBackup') >" +
//        "<strong> New Backup  </strong><i class='fa fa-database'/></a></h4>";
//        }
//        ni.appendChild(newdiv);
//    }
//}


function toggleOn() {
    $('#box1').bootstrapToggle('on');
    localStorage.setItem("search_setting", true);
}

function toggleOn2() {
    $('#time1').bootstrapToggle('on');
    localStorage.setItem("clock_setting", true);
}
function toggleOn3() {
    $('#rem1').bootstrapToggle('on');
    localStorage.setItem("remind_setting", true);
}
function update2(e) {
    var remind_setting = localStorage.getItem("remind_setting");
    if (remind_setting == "false") {
        localStorage.setItem("remind_setting", true);
        remind_setting = true;
        window.status = ";;KHCMD:AC=acRem, ,true";
    }
    else {
        remind_setting = false;
        localStorage.setItem("remind_setting", false);
        window.status = ";;KHCMD:AC=acRem, ,false";
    }
    SendACommand('acRefreshReminder');
}
localStorage.setItem("a", 0);
localStorage.setItem("b", 0);
function update1(e) {
if (e.nodeName == "LABEL")
        if (parseInt(localStorage.getItem("a")) > 0) {
            localStorage.setItem("a", 0);
            var clocker_setting = localStorage.getItem("clock_setting");
            if (clocker_setting == "false" || clocker_setting == null) {
                localStorage.setItem("clock_setting", true);
                clocker_setting = true;
                window.status = ";;KHCMD:AC=acClockSettings, ,true";
            }
            else {
                clocker_setting = false;
                localStorage.setItem("clock_setting", false);
                window.status = ";;KHCMD:AC=acClockSettings, ,false";
            }
        }
        else { var x = parseInt(localStorage.getItem("a")); x++;; localStorage.setItem("a", x); }
}
function update(e) {
    if (parseInt(localStorage.getItem("b")) > 0) {
        localStorage.setItem("b", 0);
        var searcher_setting = localStorage.getItem("search_setting");
        if (searcher_setting == "false") {
            localStorage.setItem("search_setting", true);
            searcher_setting = true;
            window.status = ";;KHCMD:AC=acSearchSettings, ,true";
        }
        else {
            searcher_setting = false;
            localStorage.setItem("search_setting", false);
            window.status = ";;KHCMD:AC=acSearchSettings, ,false";
        }
    }
    else { var x = parseInt(localStorage.getItem("b")); x++;; localStorage.setItem("b", x); }
}
//end settings show and change
$("form").submit(function (e) {
    e.preventDefault();
});
$('#SearchBox').keydown(function (event) {
    var keypressed = event.keyCode || event.which;
    if (keypressed == 13) {
        Searcher(this);
    }
});

$("#searchclear").click(function () {
    $("#SearchBox").val('');
});
$("#searchclear_a").click(function () {
    $("#SearchBox").val('');
});
function Searcher(e) {
    try {
        var userPass = document.getElementById('SearchBox');
        window.status = ";;KHCMD:" + x + "," + userPass.value;
        window.status = ";;KHEND;;";
        if (localStorage.getItem("search_setting") == "true") { userPass.value = ''; }
    }
    catch (e1) {
    }
}
var x = 'AC=acAccountSearch,h1';
function chane(e) {
    try {
        $("#SearchBtn #span").text(" " + e.innerText);
        if (e.id == "h1") {
            x = 'AC=acAccountSearch,' + e.id;
        }
        if (e.id == "h2") {
            x = 'AC=acCategoriesSearch,' + e.id;
        }
        if (e.id == "h3") {
            x = 'AC=acEntrySearch,' + e.id;
        }
        if (e.id == "h4") {
            x = 'AC= ,' + e.id;
        }
    }
    catch (e1) { }
}
function chana(e) {
    $("#SearchBtn span").text("بحث في " + e.innerText);
    if (e.id == "h1") {
        x = 'AC=acAccountSearch,' + e.id;
    }
    if (e.id == "h2") {
        x = 'AC=acCategoriesSearch,' + e.id;
    }
    if (e.id == "h3") {
        x = 'AC=acEntrySearch,' + e.id;
    }
    if (e.id == "h4") {
        x = 'AC= ,' + e.id;
    }
}
function tog(e) {
    $("#t1").removeClass("active");
    $("#t2").removeClass("active");
    $("#t3").removeClass("active");
    $("#t4").removeClass("active");
    $(e).addClass("active");
    $("#t11").addClass("modal");
    $("#t21").addClass("modal");
    $("#t31").addClass("modal");
    $("#t41").addClass("modal");
    $("#" + e.id + "1").removeClass("modal");
}
function togg(e) {
    $("#tt1").removeClass("active");
    $("#tt2").removeClass("active");
    $("#tt3").removeClass("active");
    $("#tt4").removeClass("active");
    $(e).addClass("active");
    $("#tt11").addClass("modal");
    $("#tt21").addClass("modal");
    $("#tt31").addClass("modal");
    $("#tt41").addClass("modal");
    $("#" + e.id + "1").removeClass("modal");
}
function myfs(item) {
//    $("#wrapper").toggleClass("toggled");
    $("#Define").addClass("modal");
    $("#Work_Flow").addClass("modal");
    $("#Start").removeClass("modal");
    //  $("#Start").addClass("temp"); 
    $(".broc").css("color","");
    item.setAttribute("style","color: #244b36");
}
function myfd(item) {
//    $("#wrapper").toggleClass("toggled");
    $("#Start").addClass("modal");
    $("#Work_Flow").addClass("modal");
    $("#Define").removeClass("modal");
    //       $("#Define").addClass("temp"); 
    $(".broc").css("color","");
    item.setAttribute("style","color: #244b36");
}
function myfw(item) {
//    $("#wrapper").toggleClass("toggled");
    $("#Start").addClass("modal");
    $("#Define").addClass("modal");
    $("#Work_Flow").removeClass("modal");
    //     $("#Work_Flow").addClass("temp");   
    $(".broc").css("color","");
    item.setAttribute("style","color: #244b36");
}
function SendACommand(command) {
    window.status = ";;KHCMD:" + command;
    window.status = ";;KHEND;;";
    console.log("test");
}

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
function ChangeSpanClass(obj, isOver) {
    try {
        var theSpan = document.getElementById(obj);
        if (isOver) {
            theSpan.className = "SelectedTextStyle";
        }
        else {
            theSpan.className = "TextStyle";
        }
    }
    catch (e) { }

}

function ChangeThisImageWhenMouseUp(imgName, imgFile, up) {
    try {
        if (up) {
            document.images[imgName].src = "./gen_images/" + imgFile + "_up.gif";
        }
        else {
            document.images[imgName].src = "./gen_images/" + imgFile + ".gif";
        }
    }
    catch (e) {
    }

}

function ChangeImageWhenMouseUp(img, up) {
    if (document.images.length > 0)
        if (document.images[img] != null) {
            if (up) {
                document.images[img].src = "./gen_images/" + img + "_up.gif";
            }
            else {
                document.images[img].src = "./gen_images/" + img + ".gif";
            }
        }
}

function ChangeImageWhenMouseUp_PNG(img, up) {
    if (document.images.length > 0)
        if (document.images[img] != null) {
            if (up) {
                document.images[img].src = "./gen_images/" + img + "_up.png";
            }
            else {
                document.images[img].src = "./gen_images/" + img + ".png";
            }
        }
}

function ChangeToImageWhenMouseUp(img, upimg, up) {
    if (document.images.length > 0)
        if (document.images[img] != null) {
            if (up) {
                document.images[img].src = "./gen_images/" + upimg + ".gif";
            }
            else {
                document.images[img].src = "./gen_images/" + img + ".gif";
            }
        }
}
var notcount = 0;
function notification(){
    notcount++;
    if(notcount>0){
    $('#notif').remove();
    $('#notif1').remove();  
    $('<i class="fa fa-bell" style="color: #f0a82c;" id="notif1">').appendTo('#mainnot');
    $('<span width=31px; height=31px; style="background-color: red; border-radius: 5px; padding: 0px 5px 0px 5px;" id="notif">'+notcount+'</span>').appendTo('#notmsg');
    }
}
function resetnotification(place){
    
    if(place=='main')
    $('#notif1').remove();
    else{
        $('#notif1').remove();
        $('#notif').remove();
    notcount = 0;
    }
}
