var form = document.querySelector("form")
var btnSubmit = document.querySelector("#btn-submit")
var output = document.querySelector("#output")

const correct_ans = {"question1":"equilateral triangle",  "question2":"36",  "question3": "√3/4 a2",  "question4": "30",  "question5": "4.33cm"}

function clickHandler(){
    var score = 0
    var idx = 0
    const data = new FormData(form)
    for (let value of data.entries()){
        if(value[1] === correct_ans[value[0]]){
            score = score + 1
        }
        
    };
    output.innerText = "Your score is " + score
    
    
}



btnSubmit.addEventListener("click", clickHandler)