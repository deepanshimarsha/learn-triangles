var userValue = document.querySelectorAll("#input")
var btnCalculate = document.querySelector("#btn-calculate")
var output = document.querySelector("#output")

function clickHandler(){
    var a = Number(userValue[0].value)
    var b = Number(userValue[1].value)
    var c = Number(userValue[2].value)
    
    if(a + b > c && b + c > a && a + c > b){
        const semiPerimeter = (a + b + c) / 2
        const result = Math.sqrt((semiPerimeter - a)*(semiPerimeter - b)*(semiPerimeter - c)).toFixed(4);
        output.innerText = "Area of triangle using heron's formula is " + result + " units"
    }
    else{
        output.innerText = "Enter valid side lengths"
    }
    
    
    
    
}

btnCalculate.addEventListener("click", clickHandler)