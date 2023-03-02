let display = document.querySelector("#input")
let buttons = document.querySelectorAll("button")
let equal = document.getElementById("equal")
let reset = document.getElementById("clr")
for(let ele of buttons){
    ele.onclick = function(){
        let input = ele.innerText
        display.value += input
    }
}
 
equal.onclick = function () {
    if (display.value === "") {
        display.value = ""
    }
    else {
        let answer = eval(display.value)
        display.value = answer
    }

}
// equal.addEventListener("click", function(){
//     if(display.value ===""){
//         display.value =""
//     }
//     else{
//         let answer = eval(display.value)
//         display.value = answer
//         console.log(answer)
//     }
// })
reset.onclick = function(){
    display.value = ""
}




