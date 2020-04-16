// draling asbcis 

//setup the cansa nad the grapghics  contect
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.width = 700;
cnv.height = 600

//lets drew domse stuf
//rectage 

//wall
ctx.fillStyle = 'lightblue'
ctx.fillRect(0, 0, 200, 400)

//door
ctx.fillStyle = 'lightgrey';
ctx.fillRect(210, 0, 130, 10);

// white box
ctx.fillStyle = 'rgb(245, 234, 235)';
ctx.fillRect(370, 5, 100, 50);

//Closet
ctx.fillStyle = 'lightgrey';
ctx.fillRect(600, 0, 90, 10);

//Dresser
ctx.fillStyle = 'rgb(245, 234, 235)';
ctx.fillRect(600, 100, 100, 200);

// Sleep box Frame
ctx.fillStyle = 'brown';
ctx.fillRect(330, 380, 380, 250)

//Sleep Box (sheets)
ctx.fillStyle = 'blue';
ctx.fillRect(350, 400, 340, 185);

//Pillows
ctx.fillStyle = 'lightblue';
ctx.fillRect(630, 400, 60, 185);

//Penguin pillow
ctx.fillStyle = 'rgb(50, 70, 240';
ctx.beginPath();
ctx.arc(570, 490, 50, 0, 2*Math.PI);
ctx.fill();

//Counch
ctx.fillStyle = 'red';
ctx.fillRect(5, 520, 250, 100)

//Teletub.. I mean television
ctx.fillStyle = 'black';
ctx.fillRect(20, 400, 160, 20)
