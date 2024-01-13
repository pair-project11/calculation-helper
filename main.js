var screen=document.getElementById("displayy")
var screen2=document.getElementById("top")
var ferstnumber ; 
var secendnumber ;
var operator 
document.addEventListener("click", function (event){
  if (event.target.id=== "equals"){
    var results = calculate(ferstnumber,operator,secendnumber)
    screen2.innerHTML= results

    console.log(results.toString(),"te")

  }
    if (event.target.id === "add"|| event.target.id === "subtract" || event.target.id === "multiply" || event.target.id === "divide"  ){
   operator=event.target.id

  }
 else {
  if (ferstnumber=== undefined){
    ferstnumber = Number(event.target.value)
    screen.textContent = ""
    screen.textContent = ferstnumber.toString() + "  "
    
  }
  else {secendnumber=Number(event.target.value)}
   console.log(event.target.id)
   screen.textContent = secendnumber + ""
  }
})

function calculate (n1, operator, n2) {
 var result = ''

       if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    }
     else if (operator === 'subtract') {
     result = parseFloat(n1) - parseFloat(n2)
      }
      else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } 
    else if (operator === 'divides') {
      result = parseFloat(n1) / parseFloat(n2)
    } 
    return result 
  }