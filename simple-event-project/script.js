let clickevent = document.getElementById("button")
clickevent.addEventListener("click", function(){
    let clickeffect = document.getElementById("clickeffect")
    let divSection = document.getElementById("box1")
    clickeffect.innerHTML += "<span> Hello User! </span>"
    divSection.style.backgroundColor = "yellow"
    // clickeffect.style.color = "blue"
    button.innerText = "Now Double Click Here"
    // button.style.fontSize = "24px"
    clickeffect.innerText = "Thanks for click me 😘"
})
let clickevent1 = document.getElementById("button")
clickevent.addEventListener("dblclick", function(){
    let clickeffect = document.getElementById("clickeffect")
    let divSection = document.getElementById("box1")
    clickeffect.innerHTML += "<span> Hello User! </span>"
    divSection.style.backgroundColor = "#fb9797"
    // clickeffect.style.color = "blue"
    button.innerText = "Click Event"
    // button.style.fontSize = "24px"
    clickeffect.innerText = "You Click me Twice 😃"
})
let hoverevent = document.getElementById("button1")
hoverevent.addEventListener("mouseover", function(){
    let divSection = document.getElementById("box2")
    let hovereffect = document.getElementById("hovereffect")
    hovereffect.innerText = "You Just Hover Me 😁!"
    button1.innerText = "Just Hover Out"
    divSection.style.backgroundColor = "yellow"
})
hoverevent.addEventListener("mouseout", function(){
    let hovereffect = document.getElementById("hovereffect")
    let divSection = document.getElementById("box2")
    hovereffect.innerText = "You Just Hover Out ☹️!"
    button1.innerText = "Hover Me"
    divSection.style.backgroundColor = "white"
})