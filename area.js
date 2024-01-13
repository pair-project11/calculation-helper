function calculateAreaTriangle() {
  var base = document.getElementById("base").value;
  var height = document.getElementById("height").value;
  var area = 0.5 * base * height;
   document.getElementById("result").innerHTML = "Area: " + area.toFixed(2) ;
       }
  function calculateAreaRectangle(){
    var length= document.getElementById("length").value
    var width= document.getElementById("width").value
    var area= height*length
    document.getElementById("result").innerHTML="Area:"+ area.toFixed(2)
  }     
  function calculateAreaSquare(){
    var side=document.getElementById("side").value
    var area= side*side
    document.getElementById("result").innerHTML = "Area: " + area.toFixed(2) ;
       }
  