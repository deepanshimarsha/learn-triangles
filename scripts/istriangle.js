var angleList = document.querySelectorAll("#input")
var btnCheck = document.querySelector("#btn-check")
var output = document.querySelector("#output")

function clickHandler(){
    var angle1 = Number(angleList[0].value)
    var angle2 = Number(angleList[1].value)
    var angle3 = Number(angleList[2].value)
    console.log(angle1, angle2, angle3)

    var sum = angle1 + angle2 + angle3
    console.log(sum)
    if (sum === 180){
        output.innerText = "The angle form a Triangle"
    }
    else{
        output.innerText = "The angle doesn't form a triangle"
    }
}



btnCheck.addEventListener("click", clickHandler)