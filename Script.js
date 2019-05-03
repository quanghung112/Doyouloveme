let h=window.innerHeight;
let w=window.innerWidth;
function yes() {
    let img=document.getElementById('Ketqua');
    img.src='1.gif'
}
function no() {
    let move=document.getElementById('move');
    move.style.position='relative';
    move.style.top='0px';
    move.style.left='0px';
    move.style.top=parseFloat(move.style.top)+ Math.floor(Math.random() * h)+ 'px';
    move.style.bottom=parseFloat(move.style.top) - Math.floor(Math.random() * h)+ 'px';
    move.style.left=parseFloat(move.style.left) + Math.floor(Math.random() * w)+ 'px';
    move.style.right=parseFloat(move.style.left) - Math.floor(Math.random() * w)+ 'px';
}

