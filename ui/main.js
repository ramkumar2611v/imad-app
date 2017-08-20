console.log('Loaded!');

var element = document.getElementById("main-text");
element.onclick=function()
{
  alert("You've Clicked Text.");
  element.innerHTML="RAM KUMAR";
};