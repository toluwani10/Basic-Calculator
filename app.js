const display = document.getElementById("display");

function appendToDiaplay(input){
    display.value += input 
}
function calculate(){
    display.value = eval(display.value)
    
}