const icons=document.querySelectorAll(".profile");
const text=document.querySelectorAll(".p1");
const nav=document.querySelector(".nav");
const pi=document.querySelector(".pi")
const sch=document.querySelector(".schooling")
const jee=document.querySelector(".jee")
const hobb=document.querySelector(".hobbies")
const bt=document.querySelector(".bt")
const contact=document.querySelector(".contact")
const fore=document.querySelector(".forepage");
text[0].addEventListener("click",()=>{
    fore.style.display="none";
    pi.style.display="flex";
    jee.style.display="none"
    hobb.style.display="none"
    bt.style.display="none"
    contact.style.display="none"
    sch.style.display="none"
})
text[1].addEventListener("click",()=>{
    fore.style.display="none";
    pi.style.display="none";
    jee.style.display="none"
    hobb.style.display="none"
    bt.style.display="none"
    contact.style.display="none"
    sch.style.display="flex"
})
text[2].addEventListener("click",()=>{
    fore.style.display="none";
    pi.style.display="none";
    jee.style.display="flex"
    hobb.style.display="none"
    bt.style.display="none"
    contact.style.display="none"
    sch.style.display="none"
})
text[3].addEventListener("click",()=>{
    fore.style.display="none";
    pi.style.display="none";
    jee.style.display="none"
    bt.style.display="flex"
    hobb.style.display="none"
    contact.style.display="none"
    sch.style.display="none"
})
text[4].addEventListener("click",()=>{
    pi.style.display="none";
    fore.style.display="none";
    jee.style.display="none"
    bt.style.display="none"
    contact.style.display="none"
    hobb.style.display="flex"
    sch.style.display="none"
})
text[5].addEventListener("click",()=>{
    pi.style.display="none";
    fore.style.display="none";
    jee.style.display="none"
    hobb.style.display="none"
    contact.style.display="flex"
    bt.style.display="none"
    sch.style.display="none"
})
nav.addEventListener("mouseover",function(){
    nav.classList.toggle("close");
    for(let i=0;i<text.length;i++){
        text[i].classList.toggle("close");
        icons[i].classList.toggle("close");
    }
})
nav.addEventListener("mouseout",function(){
    nav.classList.toggle("close");
    for(let i=0;i<text.length;i++){
        text[i].classList.toggle("close");
        // text[i].style.opacity="1"
        icons[i].classList.toggle("close");
    }
})