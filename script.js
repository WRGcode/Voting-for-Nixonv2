"use strict";

//setup//

let all = document.getElementsByTagName("html")
all = all[0]
console.log(all)

let voted = document.getElementsByTagName("spam")
voted = voted[0]
console.log(voted)

let clickPlace = document.getElementsByTagName("h3")
clickPlace = clickPlace[0]
console.log(clickPlace)

let fadingPlace = document.getElementsByTagName("h2")
fadingPlace = fadingPlace[0]
console.log(fadingPlace)

let keepAway = document.getElementsByTagName("footer")
keepAway = keepAway[0]
console.log(keepAway)

//general//onstart, menu, movement

window.addEventListener("load", function () {
    alert("wellcome to the not rigged votesite of redguy and blueguy")
});


function menu() {
    candidate1.style.background = "rgb(0, 0, 204)";
    candidate1.style.border = "solid rgb(0, 89, 255) 2px";
    candidate2.style.background = "rgb(134, 0, 0)";
    candidate2.style.border = "solid rgb(207, 0, 0) 2px";
}

// function moveaway(){
//     keepAway.
// }

function movement() {
    candidate2.style.background = "rgb(0, 0, 204)";
    candidate2.style.border = "solid rgb(0, 89, 255) 2px";
    candidate1.style.background = "rgb(134, 0, 0)";
    candidate1.style.border = "solid rgb(207, 0, 0) 2px";

}


//red side// click, leave, remove
let button = document.createElement("button")
button.textContent = "Vote";
button.addEventListener("click", function () {
    voted.textContent += " Voted";

})
clickPlace.appendChild(button);


function test() {
    alert("You should go back an click")
    votemore.removeEventListener("mouseleave", test)
}
let votemore = button;
votemore.addEventListener("mouseleave", test)

// let votedmore = button;



//blue side//hover, cursor
let button2 = document.createElement("button")
button2.textContent = "Vote";
button2.addEventListener("mouseover", function () {
    this.style.background = "rgb(218, 165, 32, 0)";
    this.style.border = "rgb(218, 165, 32, 0)";
    this.style.color = "rgb(218, 165, 32, 0)";
    secert.textContent = "click the invisible button";
})
fadingPlace.appendChild(button2);

let secertclick = button2;
secertclick.addEventListener("click", function () {
    all.textContent = ""
    all.style.cursor = "none"

    //for(let i = 0; i = i; i++){}

})

//footer//clientX and clientY, A loop that will create several elements at once

// x = event.clientX
// y = event.clientY
// keepAway.addEventListener("click",function(){
//     x = Math.floor(Math.random() * 500)
//     y = Math.floor(Math.random() * 500)
// })



//external running//

let run = document.documentElement;

run.addEventListener(`contextmenu`, menu)

run.addEventListener("click", keepAway)

run.addEventListener("mousemove", movement)

// run.addEventListener("mouseover", moveaway)



