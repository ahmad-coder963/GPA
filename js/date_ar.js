var dayarray = new Array("", "", "", "", "", "", "");
var montharray = new Array("","","","","","","","","","","","");
function getthedate()
{
	var mydate=new Date();
	var year=mydate.getYear();
	if (year < 1000)
		year+=1900;
	var day=mydate.getDay();
	var month=mydate.getMonth();
	var daym=mydate.getDate();
	if (daym<10)
		daym="0"+daym;
	var hours=mydate.getHours();
	var minutes=mydate.getMinutes();
	var seconds=mydate.getSeconds();
	var dn=" ";
    var clocker_setting=localStorage.getItem("clock_setting");
    if(clocker_setting=="false" || clocker_setting==null ){
	if (hours>=12)
		dn="م";
    else
        dn="ص";
	if (hours>12)
	{
		hours=hours-12;
	}
	if (hours==0)
		hours=12; 
    }
	if (minutes<=9)
		minutes="0"+minutes;
	if (seconds<=9)
		seconds="0"+seconds; 
	var cdate="<div class=weekday><font color=#ffffff>" + hours+":"+minutes +" "+dn+ "</font>&nbsp;<font color=#ccebfe>"+weekday[dow]+"</font></div>";
/*	var cdate=""+hours+":"+minutes+""*/
	if (document.all)
		document.all.clock.innerHTML=cdate;
	else if (document.getElementById)
		document.getElementById("clock").innerHTML=cdate;
	else
		document.write(cdate);
}
if (!document.all&&!document.getElementById)
	getthedate();
 

var fixd;
function isGregLeapYear(year)
{
	return year%4 == 0 && year%100 != 0 || year%400 == 0;
}

function gregToFixed(year, month, day)
{
	var a = Math.floor((year - 1) / 4);
	var b = Math.floor((year - 1) / 100);
	var c = Math.floor((year - 1) / 400);
	var d = Math.floor((367 * month - 362) / 12);
	if (month <= 2)
		e = 0;
	else if (month > 2 && isGregLeapYear(year))
		e = -1;
	else
		e = -2;

return 1 - 1 + 365 * (year - 1) + a - b + c + d + e + day;
}

function Hijri(year, month, day)
{
	this.year = year;
	this.month = month;
	this.day = day;
	this.toFixed = hijriToFixed;
	this.toString = hijriToString;
}

function hijriToFixed()
{
	return this.day + Math.ceil(29.5 * (this.month - 1)) + (this.year - 1) * 354 +
	Math.floor((3 + 11 * this.year) / 30) + 227015 - 1;
}

function hijriToString()
{
	var months = new Array("محرم","صفر","ربيع أول","ربيع ثانى","جمادى أول","جمادى ثانى","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة");
	return this.day + " " + months[this.month - 1]+ " " + this.year;
}

function fixedToHijri(f)
{
	var i=new Hijri(1100, 1, 1);
	i.year = Math.floor((30 * (f - 227015) + 10646) / 10631);
	var i2=new Hijri(i.year, 1, 1);
	var m = Math.ceil((f - 29 - i2.toFixed()) / 29.5) + 1;
	i.month = Math.min(m, 12);
	i2.year = i.year;
	i2.month = i.month;
	i2.day = 1;
	i.day = f - i2.toFixed() + 1;
	return i;
}

var tod=new Date();
var weekday=new Array("الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت");
/*var monthname=new Array("يناير","فبراير","مارس","إبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر");*/
var monthname=new Array("كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول");

var y = tod.getFullYear();
var m = tod.getMonth();
var d = tod.getDate();
var dow = tod.getDay();
<!--document.write(weekday[dow] + " " + d + " " + monthname[m] + " " + y);-->
/*document.write("<span class=weekday>" + weekday[dow] + " ،</span>" + " " + d + " " + monthname[m] + " " + y);*/
document.write(+ d + " " + monthname[m] + " " + y);
 
m++;
fixd=gregToFixed(y, m, d);
var h=new Hijri(1421, 11, 28);
h = fixedToHijri(fixd);
document.write("<br> " + writeIslamicDate()+ "");
