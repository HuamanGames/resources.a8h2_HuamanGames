/*Actual Code*/
initializefalse();
document.querySelector(".enterCommand").style.display="none";
document.querySelector(".instructions").style.display="none";
document.querySelector("#pimng").style.display="none";
document.querySelector(".HuamanGames").style.display="none";
document.querySelector(".identity").style.display="none";
document.querySelector(".signup").style.display="none";
document.body.style.background="url(https://static.pexels.com/photos/210186/pexels-photo-210186.jpeg)";
var GameType = 0;
var StatementChoice=-1;
var canvas = document.querySelector('canvas');
var usernames = [];
var passwords = [];
canvas.width = "0px";
canvas.height = "0px";

UserBoxEditTrue();//Run login

document.querySelector('.BackButton').onclick = function() {
    document.querySelector(".identity").style.display="block";
    document.querySelector(".signup").style.display="none";
    UserBoxEditTrue();
};
document.querySelector('.submitsignup').onclick = function() {
    signupdata();
};
