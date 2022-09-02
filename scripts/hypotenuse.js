var userValue = document.querySelectorAll("#input")
var btnCalculate = document.querySelector("#btn-calculate")
var output = document.querySelector("#output")

function clickHandler(){
    var base = Number(userValue[0].value)
    var height = Number(userValue[1].value)
    var sumOfSq = base*base + height*height
    var result = Math.sqrt(sumOfSq)

    output.innerText = "Hypotenuse is " + result
    
    console.log(sumOfSq, result)
    
    
}

btnCalculate.addEventListener("click", clickHandler)