function popInfo(){
// document.getElementById("demo").innerHTML=Date();
alert("运行正常！");
}
function changeInfo(){
string01 = "123456";
document.getElementById("content01").innerHTML=string01;
}
function changePic(){
string01 = "<img id=\"img01\" src=\"img/img02.jpg\" width=\"100px\" height=\"100px\">";
document.getElementById("img02").outerHTML=string01;
}

function validateForm(){
var x=document.forms["myForm"]["fname"].value;
if (x==null || x=="")
{
document.getElementById("info").innerHTML="姓名必须填写"; alert("密码不正确！");
return false;
}
}

function showInfo(){
alert("Hello");
var data01 = '{ "classname" : [' +
'{ "name":"一班" , "url":"自习教室在101" },' +
'{ "name":"二班" , "url":"自习教室在201" },' +
'{ "name":"三班" , "url":"自习教室在301" } ' +
']}';
obj = JSON.parse(data01);
document.getElementById("demo").innerHTML = obj.classname[1].name + " " + obj.classname[1].url;
//document.getElementById("demo").innerHTML = "ABC";
}