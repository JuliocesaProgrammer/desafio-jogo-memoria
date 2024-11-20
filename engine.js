const emojis = [
    "🍔",
    "🍔",
    "🤣",
    "🤣",
    "😒",
    "😒",
    "👌",
    "👌",
    "🎁",
    "🎁",
    "💋",
    "💋",
    "🤳",
    "🤳",
    "🍕",
    "🍕"];
let opencards = [];

let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if(opencards.length < 2){
        this.classList.add("boxopen");
        opencards.push(this);
    }
    if(opencards.length === 2){
        setTimeout(checkmatch, 500);
    }
}

function checkmatch(){
    if(opencards[0].innerHTML === opencards[1].innerHTML){
        opencards[0].classList.add("boxmatch");
    }else{
        opencards[0].classList.remove("boxopen");
        opencards[1].classList.remove("boxopen");
    }
    opencards = [];

    if(document.querySelectorAll(".boxmatch").length === emojis.length){
        alert("Parabéns! Você venceu!");
    }
}