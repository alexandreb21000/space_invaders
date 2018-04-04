var c  = document.querySelector('#canvas');
var ctx = c.getContext('2d');

ctx.lineWidth = "3";
ctx.strokeStyle = "gold";
ctx.strokeRect(80, 85, 20, 20);


function draw(direction) {
    var c  = document.querySelector('#canvas');
    var ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height); 
    var img = document.getElementById("carre")
    var pat = ctx.createPattern(img, direction);
    ctx.rect(0, 0, 150, 100);
    ctx.fillStyle = pat;
    ctx.fill();
}