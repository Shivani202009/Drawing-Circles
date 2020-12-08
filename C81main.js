var canvas=document.getElementById("Mycanvas")
ctx=canvas.getContext("2d")
var colour="blue"
var width= 3

ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=width;
ctx.arc(200,200,50,0,2*Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown",md)
function md(e){
mouseX=e.clientX-canvas.offsetLeft
mouseY=e.clientY-canvas.offsetTop
colour=document.getElementById("colour").value
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=width;
ctx.arc(mouseX,mouseY,50,0,2*Math.PI);
ctx.stroke()
}
