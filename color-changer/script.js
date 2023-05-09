let changeColor = () => {
    let x = "ABCDEF0123456789";
    let cons = "#"
    for(let i = 0; i < 6; i++) {
        cons = cons + x[Math.floor(Math.random() * 16)]
    }
    return cons;
}
function changeBacgroundColor () {
    let v = document.querySelector(".change")
    v.style.backgroundColor = changeColor()
    let h1 = document.querySelector(".changecolor")
    h1.style.color = changeColor();
    
}
