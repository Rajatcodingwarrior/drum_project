let length=document.querySelectorAll(".drum").length;
let drums = document.querySelectorAll(".drum");

//remember to put main events inside main function(like C)
main();
function main(){

for(let i=0;i<length;i++){

    let letter = drums[i].innerHTML;

    drums[i].addEventListener("click",playdrum(letter));
    drums[i].addEventListener("keydown",(e)=>{
        console.log(e.key);
        playdrum(e.key);
    });
}
}
function playdrum(letter){

    switch(letter){
        case "w":
            let beat1 = new Audio("sounds/tom-1.mp3");
            
           
            document.querySelector(".w").classList.add("clicked");
            setTimeout(()=>{
                document.querySelector(".w").classList.remove("clicked");
            },300);
            beat1.play();
            break;

        case "a":
            let beat2 = new Audio("sounds/tom-2.mp3");
                        
            document.querySelector(".a").classList.add("clicked");
            setTimeout(()=>{
                document.querySelector(".a").classList.remove("clicked");
            },300);
            beat2.play();
            break;

        case "s":
            let beat3 = new Audio("sounds/tom-3.mp3");
            
            
            document.querySelector(".s").classList.add("clicked");
            setTimeout(()=>{
                document.querySelector(".s").classList.remove("clicked");
            },300);
            beat3.play();
            break;

        case "d":
            let beat4 = new Audio("sounds/tom-4.mp3");
            
            
            document.querySelector(".d").classList.add("clicked");
            setTimeout(()=>{
                document.querySelector(".d").classList.remove("clicked");
            },300);
            beat4.play();
            break;

        case "j":
            let beat5 = new Audio("sounds/snare.mp3");
            
            
            document.querySelector(".j").classList.add("clicked");
            setTimeout(()=>{
                document.querySelector(".j").classList.remove("clicked");
            },300);
            beat5.play();
            break;

        case "k":
            let beat6 = new Audio("sounds/crash.mp3");
            document.querySelector(".k").classList.add("clicked");
            setTimeout(()=>{
                document.querySelector(".k").classList.remove("clicked");
            },300);
        
            beat6.play();
            break;

        case "l":
            let beat7 = new Audio("sounds/kick-bass.mp3");
            document.querySelector(".l").classList.add("clicked");
            setTimeout(()=>{
                document.querySelector(".l").classList.remove("clicked");
            },300);
            
            beat7.play();
            break;

    }

}
































/*function playdrum(letter){

    switch(letter){
        case "w":
            let beat1 = new Audio("sounds/tom-1.mp3");
            
            beat1.play();
            document.querySelector(".w").classList.add("clicked");
            setTimeout(()=>{
                document.querySelector(".w").classList.remove("clicked");
            },500);
            break;

        case "a":
            let beat2 = new Audio("sounds/tom-2.mp3");
            
            beat2.play();
            break;

        case "s":
            let beat3 = new Audio("sounds/tom-3.mp3");
            
            beat3.play();
            break;

        case "d":
            let beat4 = new Audio("sounds/tom-4.mp3");
            
            beat4.play();
            break;

        case "j":
            let beat5 = new Audio("sounds/snare.mp3");
            
            beat5.play();
            break;

        case "k":
            let beat6 = new Audio("sounds/crash.mp3");
        
            beat6.play();
            break;

        case "l":
            let beat7 = new Audio("sounds/kick-bass.mp3");
            
            beat7.play();
            break;

    }

}
*/










//querySelector('.drum') only works on first
//querySelector
//read innerHTML
//switch case
//new audio
//change css on click eg shadow