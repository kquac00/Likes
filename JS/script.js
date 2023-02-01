function clickLikes(element){
    var currentclicks = document.querySelector("#clicks").innerText;
    var result = Number(currentclicks) + 1;
    document.querySelector("#clicks").innerText=result;
}

function clickLikes1(element){
    var currentclicks1 = document.querySelector("#clicks1").innerText;
    var result1 = Number(currentclicks1) + 1;
    document.querySelector("#clicks1").innerText=result1;
}

function clickLikes2(element){
    var currentclicks2 = document.querySelector("#clicks2").innerText;
    var result2 = Number(currentclicks2) + 1;
    document.querySelector("#clicks2").innerText=result2;
}