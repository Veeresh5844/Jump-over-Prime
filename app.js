let newgame=document.querySelector("#new-game");
let restart=document.querySelector(".restart");
let btnBlue=document.querySelector(".btn-blue");
let btnGreen=document.querySelector(".btn-green");
let text=document.querySelector(".text");
let msgContainer=document.querySelector(".msg-container");

let num=0;
let update=0;
btnGreen.addEventListener("click",()=>{

    num+=1;
    update=text.innerText=num.toString();
text.style.fontSize="50px";
text.style.color="green"
console.log("hello world");
if(prime(update)){
    console.log("prime");
    enable();
    msgContainer.classList.remove("hide")
}

});

let update2=0;
// let num=0;
btnBlue.addEventListener("click",()=>{
    num+=2;
update=text.innerText=num.toString();
text.style.fontSize="50px";
text.style.color="blue"
if(prime(update)){
    console.log("prime");
    enable();
    msgContainer.classList.remove("hide")
}
});


function enable(){
    num=0;
    text.innerText="";
    
    }

newgame.addEventListener("click",()=>{
    enable();
    msgContainer.classList.add("hide")
})

restart.addEventListener("click",()=>{
    enable();
    msgContainer.classList.add("hide")
})




function prime(n){
    if(n<=2){
        return false;
    }
for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i===0){
        return false;  
    } 
}
    return true;
}













