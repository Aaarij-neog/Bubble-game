function makebubble(){
    let clutter = "";
for(let i = 1; i <= 126; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector(".pbtm").innerHTML = clutter;
}


let timer = 60;
function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

let hitrn = 0;
function hittimer(){
  hitrn  =  Math.floor(Math.random()*10);
    document.querySelector("#hittime").textContent = hitrn;
}


let score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".pbtm")
.addEventListener("click", function(dets){
    /* console.log(Number(dets.target.textContent));*/ 
    var clickednum = (Number(dets.target.textContent));
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        hittimer();
    }
})





makebubble();
runtimer();
hittimer();
