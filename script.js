var i = 0; 
var txt = 'Koh Yat Soon'; 
var speed = 70; 
function typeWriter() { 
  if (i < txt.length) 
{ document.getElementById("namety").innerHTML += txt.charAt(i); i++; setTimeout(typeWriter, speed); }
 }

function Mailbutton() {
    var link = "mailto:kohyatsoon@gmail.com";
    window.location.href = link;
}

let button = document.querySelector(".emailbutton");

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
  btn.addEventListener("click",function(e){

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement('span');
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove()
    },1000);
  })
})

 