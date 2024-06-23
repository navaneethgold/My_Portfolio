const left=document.querySelector("#left");
const page=document.querySelectorAll("#page")
const right = document.querySelector("#right");
const car1=document.querySelector("#car1");
const car2=document.querySelector("#car2");
const car3=document.querySelector("#car3");
var audio=document.querySelector("#race");
var car=document.querySelector("#car");
const choose=document.querySelector(".choose");
const play=document.querySelector(".play");
const going=document.querySelector("#going");
const poster=document.querySelector(".poster");
let count=0;
let carnumber=0;
for(let i=0;i<page.length;i++){
    if(i==count){
        page[count].style.display="flex"
    }else{
        page[i].style.display="none"
    }
}
going.addEventListener("click",()=>{
    poster.style.display="none";
    choose.style.display="block";
    audio.play();
})
car1.addEventListener("click",()=>{
    carnumber=1;
    choose.style.display="none";
    play.style.display="block"
    car.src="top.png";
    audio.pause();
    audio.currentTime=0;
})
car2.addEventListener("click",()=>{
    carnumber=2;
    choose.style.display="none";
    play.style.display="block"
    car.src="top2.png";
    audio.pause();
    audio.currentTime=0;
})
car3.addEventListener("click",()=>{
    carnumber=1;
    choose.style.display="none";
    play.style.display="block"
    car.src="car.png";
    car.style.width="30%"
    audio.pause();
    audio.currentTime=0;
})
right.addEventListener("click",()=>{
    count++;
    if(count==1){
        left.style.display="flex";
    }
    if(count==2){
        right.style.display="none";
    }
    for(let i=0;i<page.length;i++){
        if(i==count){
            page[count].style.display="flex"
        }else{
            page[i].style.display="none"
        }
    }
})

left.addEventListener("click",()=>{
    count--;
    if(count==0){
        left.style.display="none";
    }
    if(count<2){
        right.style.display="flex";
    }
    // if(count==2){
    //     right.style.display="none";
    // }
    for(let i=0;i<page.length;i++){
        if(i==count){
            page[count].style.display="flex"
        }else{
            page[i].style.display="none"
        }
    }
})















































































const sg=document.querySelector(".sg");
const road=document.querySelector("#road");
const road2=document.querySelector("#road2");
const road3=document.querySelector("#road3");
const rock=document.querySelector("#rock1");
const me=document.querySelector("#me");
const skill=document.querySelector(".skill");
const certifications=document.querySelector(".certifications");
const projects=document.querySelector(".projects");
const sg2=document.querySelector(".sg2")
const sg3=document.querySelector(".sg3")
var engine=document.querySelector("#start-engine")
var idle=document.querySelector("#idle");
var acc=document.querySelector("#accelerate");
var crashed=document.querySelector("#crashed");
const score=document.querySelector("#score");
sg2.addEventListener("click",()=>{
    dblclicked(0);
    idle.pause();
    engine.pause();
    // idle.currentTime=0;
    // acc.pause();
    // console.log("nenu em cheyali ra")
    sg2.style.backgroundColor="white"
    sg2.style.color="black"
    sg3.style.display="block"
    sg3.style.backgroundColor="black"
    sg3.style.color="white"
})
sg3.addEventListener("click",()=>{
    engine.play();
    
    // if(me.style.display=="none" && completed2!=1 && completed3!=1 && completed4!=1){
    //     skill.style.top="-250px"
    //     projects.style.top="-290px"
    //     certifications.style.top="-270px"
    //     console.log("sairam1")
    // }
    // if(skill.style.display=="none" && completed3!=1 && completed4!=1){
    //     projects.style.top="-290px"
    //     certifications.style.top="-270px"
    //     console.log("sairam2")
    // }
    // if(certifications.style.display=="none" && completed4!=1){
    //     projects.style.top="-290px"
    //     console.log("sairam3")
    // }
    dblclicked(1);
    // console.log("nenu em cheyali ra")
    sg2.style.backgroundColor="black"
    sg2.style.color="white"
    sg3.style.backgroundColor="white"
    sg3.style.color="black"

})
sg.addEventListener("click",()=>{
    engine.play();
    car.style.top="500px";
    car.style.left= "265px";
    road.style.top="20px"
    road2.style.top="220px"
    road3.style.top="420px"
    rock.style.top="-200px"
    rock.style.left="450px"
    me.style.top="-230px"
    me.style.left="50px"
    certifications.style.top="-270px"
    certifications.style.left="250px"
    projects.style.top="-290px"
    projects.style.left="350px"
    skill.style.top="-250px"
    skill.style.left="350px"
    // sg.innerText="Pause the game(dbl click)"
    console.log("hiiiii")
    sg2.style.display="block"
    sg.style.display="none"
    setTimeout(() => {
        animations();
    }, 1000);
})
engine.addEventListener("ended",()=>{
    idle.play();
})
let completed1=0
let completed2=0
let completed3=0
let completed4=0
let varai=0;
let dbl=1;
let paused=0;
let keyheld=false;
let interval;
let interval2;
let t=50;
let from=0;
let interval3;
let move=0;
let count2=car.style.top;
let interval4;
// let count;
let interval5;
let to=1;
let to2=1;
let to3=1;
let to4=1;
let interval6;
let interval7;
function isup(){
    // dblclicked();
    if(dbl==1){
    document.addEventListener("keyup",function(event){
        if(event.code=="ArrowUp"){
            clearInterval(interval);
            keyheld=false;
        }
        
    })}
}
function moveup(){
    // dblclicked();
    if(dbl==1){
    // console.log("na moham ra re")
    if(keyheld && parseInt(car.style.top)>0){
        // acc.play();
        car.style.top=(parseInt(car.style.top)-3)+"px";
        count=car.style.top;
    }else{
        clearInterval(interval);
    }
    isup();}
    
}
function moveleft(){
    // dblclicked();
    if(dbl==1){
    if(parseInt(car.style.left)>-30){
        car.style.left=(parseInt(car.style.left)-20)+"px";
    }}
}
function moveright(){
    // dblclicked();
    if(dbl==1){
    if(parseInt(car.style.left)<620){
        car.style.left=(parseInt(car.style.left)+20)+"px";
    }}
}

function movedown(){
    // dblclicked();
    if(dbl==1){
    if(parseInt(car.style.top)<500){
        car.style.top=(parseInt(car.style.top)+50)+"px";
        count=car.style.top;
    }}
}

function speed(){
    collision();
    // dblclicked();
    if(dbl==1){
    if(parseInt(road.style.top)<700){
        road.style.top=(parseInt(road.style.top)+30)+"px"
    }else if(parseInt(road.style.top)>700){
        road.style.top=-145+"px"
    }
    if(parseInt(road2.style.top)<700){
        road2.style.top=(parseInt(road2.style.top)+30)+"px"
    }else if(parseInt(road2.style.top)>700){
        road2.style.top=-145+"px"
    }
    if(parseInt(road3.style.top)<700){
        road3.style.top=(parseInt(road3.style.top)+30)+"px"
    }else if(parseInt(road3.style.top)>700){
        road3.style.top=-145+"px"
    }}
}


function hurdles(){
    // dblclicked();
    collision();
    if(dbl==1){
    if(parseInt(rock.style.top)<600){
        rock.style.top=(parseInt(rock.style.top)+10)+"px";
        count=parseInt(rock.style.top);
        // console.log(count);
    }else{
        rock.style.display="none";
        // rock.style.left=(()+"px";
        // count=0;
        if(from==0){
            rock.style.left=((Math.random()*(550+1))+10)+"px";
            // console.log((Math.random()*(550+1))+10);
            // console.log("only once?")
            from++;
        }
        setTimeout(() => {
            rock.style.display="block";
            rock.style.top=-200+"px"
            count=parseInt(rock.style.top);
            from=0;
            // console.log(count);
        }, 3000);
    }}
    else{
        rock.style.top=(count)+"px"
        // console.log(count+" "+"mg");
    }
}

function collision(){
    if(parseInt(rock.style.left)-110<(parseInt(car.style.left)) && (parseInt(car.style.left))<parseInt(rock.style.left)+130  && Math.abs(parseInt(rock.style.top)-parseInt(car.style.top))>0 && Math.abs(parseInt(rock.style.top)-parseInt(car.style.top))<100){
        car.style.display="none";
        if(move!=1){
        crashed.play();}
        sg2.click();
        setTimeout(() => {
            if(move==0){
                crashed.pause();
                const user=confirm("you damaged the car, Game over!!, restart the game??")
            
            if(user){
                window.location.reload();
            }
            else{
                crashed.pause();}
            move++;
        }

            

        }, 5000);
    }
    if(Math.abs((parseInt(me.style.left))-(parseInt(car.style.left)))<200  && Math.abs(parseInt(me.style.top)-parseInt(car.style.top))<200 && to==1){
        to=0;
        sg2.click();
        me.style.display="none";
        window.open("me.html","_blank")
    }
    if(Math.abs((parseInt(skill.style.left))-(parseInt(car.style.left)))<200  && Math.abs(parseInt(skill.style.top)-parseInt(car.style.top))<200 && to2==1){
        to2=0;
        sg2.click();
        skill.style.display="none";
        window.open("snc.html","_blank")
    }
    if(Math.abs((parseInt(certifications.style.left))-(parseInt(car.style.left)))<200  && Math.abs(parseInt(certifications.style.top)-parseInt(car.style.top))<200 && to3==1){
        to3=0;
        sg2.click();
        certifications.style.display="none";
        window.open("https://navaneethgold.github.io/save-the-ball/","_blank")
    }
    if(Math.abs((parseInt(projects.style.left))-(parseInt(car.style.left)))<200  && Math.abs(parseInt(projects.style.top)-parseInt(car.style.top))<200 && to4==1){
        to4=0;
        sg2.click();
        projects.style.display="none";
        window.open("https://navaneethgold.github.io/amazon-clone/","_blank")
    }

    
     
    // && Math.abs(parseInt(me.style.top)-parseInt(car.style.top))<200
}
function moving(a){
    // dblclicked();
    if(dbl==1){
    if(a==1 && parseInt(me.style.top)<700){
        me.style.top=(parseInt(me.style.top)+10)+"px"
        // console.log(parseInt(me.style.top))
    }else if(parseInt(me.style.top)>=700){
        completed1=1
        me.style.display="none";
        skill.style.display="flex";
        // console.log("em ra madda gudustunnava ra lanjja munda")
        // setTimeout(() => {
            a=2;
        // }, 5000);
    }
    if(a==2 && parseInt(skill.style.top)<700){
        skill.style.top=(parseInt(skill.style.top)+10)+"px"
        // console.log("why am i moving 2")
    }else if(parseInt(skill.style.top)>=700){
        completed2=1
        skill.style.display="none";
        // setTimeout(() => {
            a=3;
        // }, 5000);
        certifications.style.display="flex";
    }
    if(a==3 && parseInt(certifications.style.top)<700){
        certifications.style.top=(parseInt(certifications.style.top)+10)+"px"
        // console.log("why am i moving 3")
    }else if(parseInt(certifications.style.top)>=700){
        completed3=1
        certifications.style.display="none";
        // setTimeout(() => {
            a=4;
            // t=20;
        // }, 5000);
        projects.style.display="flex";
        
    }
    if(a==4 && parseInt(projects.style.top)<710){
        projects.style.top=(parseInt(projects.style.top)+10)+"px"
        // console.log("why am i moving 4")
    }else if(parseInt(projects.style.top)>=710){
        clearInterval(interval3);
        interval7=setInterval(hurdles,20);
        completed4=1
        projects.style.display="none";
        sg2.click();
        if(varai==0){
            alert("The porfolio has ended to continue the game click resume");
            varai++;
        }
        clearInterval(interval4);
        // increase();
    }}
}
// function increase(){
//     clearInterval(interval3);
//     interval7=setInterval(hurdles,30);
// }
function dblclicked(a){
        dbl=a;
        keyheld=0;
        // if(a==1){
            // car.style.top=parseInt(count2)+"px";
            // console.log("hi");
            // animations();
        // }
        // clearInterval(interval);
        // clearInterval(interval2);
        // clearInterval(interval3);
        // clearInterval(interval4);
        // clearInterval(interval5);
        // clearInterval(interval6);    
        // clearInterval(interval7);
}
function animations(){
    // setTimeout(() => {
    //     t=20;
    // }, 40000);
    t=60;
    console.log("hiegnikr");
    // if(dbl==1){
    interval2=setInterval(speed,t);
    interval3=setInterval(hurdles,60);
    // speed();
    // console.log("i am back");
    me.style.display="flex";
    a=1
    
    setTimeout(() => {
        // if(dbl==1){
        interval4=setInterval(moving,60,a)
    }, 5000);
    interval5 = setInterval(function() {
        score.innerText = parseInt(score.innerText) + 1;
    }, 3000);
    
    // setTimeout(() => {
    //     skill.style.display="flex";
    //     interval5=setInterval(moving,100,2)
    // }, 10000);
    // setTimeout(() => {
    //     certifications.style.display="flex";
    //     interval6=setInterval(moving,100,3);
    // }, 20000);
    // setTimeout(() => {
    //     projects.style.display="flex";
    //     interval7=setInterval(moving,100,4)
    // }, 25000);
    }

document.addEventListener("keydown",function(event){
    if(event.code=="ArrowUp" ){
        keyheld=true;
        interval=setInterval(moveup,200);
    }
    if(event.code=="ArrowLeft"){
        moveleft();
    }
    if(event.code=="ArrowRight"){
        moveright();
    }
    if(event.code=="ArrowDown"){
        movedown();
    }
    
})





