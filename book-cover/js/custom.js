
//add animation/initialize woo
$(document).ready(function(){
	'use strict'
  new WOW().init();
});
function check_form()
{
	return document.getElementById("book_title").value&&
	document.getElementById("book-subtitle").value&&
	document.getElementById("author-name").value&&
	document.getElementById("publisher").value&&
	document.getElementById("publishing-year").value&&
	document.getElementById("tco").value&&
	document.getElementById("co").value;
}

function change()
{
var x=document.getElementById("book_title").value;
var y=document.getElementById("book-subtitle").value;

var z=document.getElementById("author-name").value;
var m=document.getElementById("publisher").value;
var n=document.getElementById("publishing-year").value;

if(check_form())
{
if(x.length>25) return window.alert("book title is more than the limit");
if(y.length>40) return window.alert("book-subtitle is very big");
if(z.length>60) return window.alert("author-name is very big");
if(m.length>60) return window.alert("publisher is very big");
if(n.length>60) return window.alert("publishing-year is very big");

document.getElementById("title").innerHTML= x;
document.getElementById("subtitle").innerHTML= y;
document.getElementById("author").innerHTML= "By: @"+z;
document.getElementById("publish").innerHTML="published by: "+m;
document.getElementById("year").innerHTML="published @: "+n;
document.getElementById('cover').style.background = document.getElementById("co").value;
document.getElementById('cover').style.color = document.getElementById("tco").value;

}
else
{
	window.alert("please check input fields is filled");
}
}
