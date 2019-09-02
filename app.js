'use strict'

let currentId = 4;
setInterval(function(){
    reset(currentId);
    currentId = currentId + 1;
    if(currentId > 7){
        currentId = 0;
    }
}, 2000)

let imgs = document.querySelector("#container").children;
for(let i=0;i<imgs.length; i++){
    imgs[i].addEventListener("mouseover", ()=>{
        currentId = i;
        reset(i);
    });
}

function reset(currentId){
    let i = currentId;
    for(let j=0; j<i+1 ; j++){
            imgs[j].style.left = 2 * j + "%";
        }

        for(let j=i+1; j<imgs.length;j++){
            imgs[j].style.left = 100 - 2 * (imgs.length - j) + "%";
        }
}

function openHomeDropDown(){
    document.getElementById("home-drop-down").style.display = "block"
}

function closeHomeDropDown(){
    document.getElementById("home-drop-down").style.display = "none"
}

function openIntroDropDown(){
    document.getElementById("intro-drop-down").style.display = "block"
}

function closeIntroDropDown(){
    document.getElementById("intro-drop-down").style.display = "none"
}

function openContactDropDown(){
    document.getElementById("contact-drop-down").style.display = "block"
}

function closeContactDropDown(){
    document.getElementById("contact-drop-down").style.display = "none"
}