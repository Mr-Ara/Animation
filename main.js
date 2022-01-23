// let canvas = document.querySelector("canvas")

// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

// let gcx = canvas.getContext("2d")

// gcx.translate(100,100)
// gcx.fillStyle = "#444"
// gcx.fillRect(100,0,100,100)

// gcx.font = "20px verdana"
// gcx.fillText("Hi im here!",100,40)

// gcx.beginPath()
// gcx.lineTo(100,324)
// gcx.lineTo(322,411)
// gcx.lineTo(121,222)
// gcx.lineTo(543,123)
// gcx.fillStyle = "rgba(12,35,65,0.4)"
// gcx.fill()


// for (let i = 0; i < 100; i++) {
//     let x = Math.random()*window.innerWidth
//     let y = Math.random()*window.innerHeight

//     gcx.beginPath()
//     gcx.arc(x,y,50,0,2*Math.PI)
//     gcx.stroke()

    
// }




// Animation 

// let ball = document.getElementById("ball")
// let offset = 30

// // setInterval(() => {
// //     ball.style.left = offset + "px"
// //     if (offset < window.innerWidth) {
// //        offset+=1   
// //     }
// //   else{
// //       offset = 30
// //   }
// // }, 10);

// function Animate(){
//     ball.style.left = offset + "px"
//     offset+=1 

//     requestAnimationFrame(Animate)
// }

// Animate();


let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let gcx = canvas.getContext("2d")


function RandomInterval(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
}


class Ball{
    constructor(){
        this.r = 25
        this.x = RandomInterval(0+this.r,innerWidth-this.r)
        this.y = RandomInterval(0+this.r,innerHeight-this.r)
        this.vx = (Math.random() - 0.5) * 10
        this.vy = (Math.random() - 0.5) * 10
        this.color = "#" + Math.floor(Math.random()* 1000)

        this.draw()
    }
    draw(){

        gcx.beginPath()
        gcx.arc(this.x,this.y,this.r,0,2*Math.PI)
        gcx.fillStyle = this.color
        gcx.fill()

    }
    update(){
  
          if (this.x + this.r > window.innerWidth || this.x - this.r < 0) {
            this.vx=-this.vx   
                  }
                  this.x += this.vx

         if (this.y + this.r > window.innerHeight || this.y - this.r < 0) {
            this.vy=-this.vy   
                   }
                   this.y += this.vy
                   

        this.draw()
   
    }
  
}

let balls = []
for (let i = 0; i < 50; i++) {
    balls.push(new Ball)  
}

function Animate(){
    gcx.clearRect(0,0,window.innerWidth,window.innerHeight)
    balls.forEach(ball =>{
        ball.update()
    })
    requestAnimationFrame(Animate)
}
Animate()