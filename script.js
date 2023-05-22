function grade(score){
    console.log(`input score is ${score}`)
    score = Math.round(score)
 
   if(score < 0 || score > 100){
     console.log("Invalid score")
     return
   }
   else if(score >= 80 ){
    console.log("You got A")
  }
  else if(score >= 70 ){
    console.log("You got B")
  }
  else if(score >= 60 ){
    console.log("You got C")
  }
  else if(score > 50 ){
    console.log("You got D")
  }  
  else if(score <= 50 ){
     console.log("You got F")
   }      
 }

 const arrowGrade = (score) => {
    grade(score);
 }

 arrowGrade(770)
 arrowGrade(51)
 arrowGrade(-5)
 arrowGrade(77)
 arrowGrade(89)
 arrowGrade(50.5)
 arrowGrade(69.9)
