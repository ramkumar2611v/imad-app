console.log('Loaded!');

var element = document.getElementById("main-text");
element.onclick=function()
{
  alert("You've Clicked Text.");
  element.innerHTML="RAM KUMAR";
};
var img= document.getElementById('img');
var marginleft=0;
function moveright()
{
    marginleft=marginleft+10;
    img.style.marginleft=marginleft+'px';
}
img.onclick=function()
{
var interval=setInterval(moveright,10);
};