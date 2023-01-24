const number = [0,1,2,3,4,5,6,7,8,9]
const charts = ["a","b","c","d","e",'f']


//normal fuction temp value
//let color = "#"


let temp = true

let colorChangeTime = 500 //milisecond

let add
const printColor = document.getElementById("print-color")
const addBg = document.getElementById("add-bg-color")


//normal function
/*
function createColor(){
    for(let i = 1; i<=6; i++){
        let temp2 = Math.floor(Math.random()*2)
        console.log(temp2)
        if(temp2 == 1){
            color += number[Math.floor(Math.random()*(number.length-1))]
        }
        else{
            color += charts[Math.floor(Math.random()*(charts.length-1))]
        }
    }
}
*/

//return fuction
function createColor2(){
    let color = "#"
    for(let i = 1; i<=6; i++){
        let temp2 = Math.floor(Math.random()*2)
        if(temp2 === 1){
            color += number[Math.floor(Math.random()*(number.length-1))]
        }
        else{
            color += charts[Math.floor(Math.random()*(charts.length-1))]
        }
    }
    return color
}

function my(a){
    let inpVal = document.getElementById("time")
    if(inpVal.value !== null){
        colorChangeTime = inpVal.value
    }
    if(temp){
        add=setInterval(function(){
            //createColor()
            let color = createColor2()
            printColor.innerHTML = color;
            addBg.style.backgroundColor = color
            a.style.color=color
            //color = "#"
        }, colorChangeTime);
        temp = !temp
    }
    else{
        clearInterval(add)
        temp = !temp
        printColor.innerHTML = "";
        addBg.style.backgroundColor = null
        a.style.color=null
    }
}