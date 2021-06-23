var canvas = document.getElementById('canvas');
var section = document.querySelector('section');
canvas.width = section.offsetWidth;
canvas.height = section.offsetHeight;

var ctx = canvas.getContext('2d');

let maxRadius = 40;

let mouser = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

window.addEventListener('mousemove', function(event) {
    mouser.x = event.clientX;
    mouser.y = event.clientY;
});

let colorArray = [
    'rgba(30,144,255,.5)',
    'rgba(	0,255,255,.4)',
    'rgba(240,128,128,.5)',
    'rgba(152,251,152,.8)',
    'rgba(186,85,211,.6)'
];

function Ball(x,y,dx,dy,radius,color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.minRadius = radius;
    this.draw = function() {
        //新起路径
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
    // ctx.fillStyle = `rgba(255,255,255,${this.color})`;
    ctx.fillStyle = `${this.color}`;
    ctx.fill();
    ctx.closePath();
    }

    this.update = function() {
        if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }else if(this.y - this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //鼠标交互
        // if(mouser.x - this.x < 50 && mouser.x - this.x > -50 && mouser.y - this.y < 50 && mouser.y - this.y > -50) {
        //     if(this.radius<maxRadius)
        //         this.radius+=1;
        // }else if(this.radius>this.minRadius){
        //     this.radius-=1;
        // }

        this.draw();
    }
}

let ballArray = [];

for(let i = 0;i<60;i++) {
    let radius = Math.random() * 25 + 1;
    let x = Math.random() * (canvas.width-2*radius)+radius;
    let y = Math.random() * (canvas.height-2*radius)+radius;
    let dx = (Math.random() - 0.5) ;
    let dy = (Math.random() - 0.5) ;
    let color = colorArray[parseInt(Math.random() * 5)];
    // let color = Math.random();
    
    ballArray.push(new Ball(x,y,dx,dy,radius,color));
}

//动画
function animate(){
    requestAnimationFrame(animate);
    //清除绘制
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let b of ballArray) {
        b.update();
    }
    
    
}
animate();