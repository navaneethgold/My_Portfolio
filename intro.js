const left=document.querySelector("#left");
const page=document.querySelectorAll("#page")
const right = document.querySelector("#right");
let count=0;
for(let i=0;i<page.length;i++){
    if(i==count){
        page[count].style.display="flex"
    }else{
        page[i].style.display="none"
    }
}
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
