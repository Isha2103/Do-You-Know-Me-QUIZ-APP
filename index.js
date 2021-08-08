var readlineSync = require('readline-sync');
var score=0;
var userAnswer= readlineSync.question("What is your name? ");

console.log("Welcome " + userAnswer.toUpperCase()+ "! DO YOU KNOW Isha?");
console.log("Play the quiz and let's see if you know her;)");
console.log("\n");

console.log("Type the correct option: a or b or c");
console.log("\n");
console.log("Follow the instructions carefully!!");
console.log("\n");

function play(question,answer)
{
   var userAsk=readlineSync.question(question);

  if(userAsk.toLowerCase() == answer.toLowerCase() ){
    console.log("You are right!"); 
    score=score+1;
  }
  else{
    console.log("You are wrong!");
  }
    console.log("Current Score is: " + score);
    console.log("-------------------");
    console.log("\n");
}

var questions = [{
question:"1. Isha's favourite colour would be: a. Black b. Red c. Both ",
answer: "c"
},
{
question:"2. Isha's favorite food would be: a. Italian b. Chinese c. South-Indian ",
answer: "b"
},
{
question: "3. Isha's favourite place to visit would be: a. Mountains b. Beach  c. None ",
answer: "a"
},
{
question:"4. Current book Isha would be reading is: a. The Secret b. Factfulness c. Think Like A Monk ",
answer: "c"
},
{
question:"5. Of which, Isha is fond of: a. Eating b. Sleeping c. Singing ",
answer: "a"
},
{
question:"6. Isha's favourite social media platform would be: a. Snapchat b. Twitter c. Instagram ",
answer: "b"
},
{
question:"7. Isha's spare time activity would be: a. Cooking b. Dancing c. Reading Books ",
answer: "a"
},
{
question:"8. Isha's pet animal would be: a. Rabbit b. Cat c. Dog ",
answer: "c"
},
{
question:"9. Isha's would be a: a. Early to Bed b. Night Owl c. Depends on situation ",
answer: "c"
},
{
question:"10. Does Isha like to watch movies?: a. Yes b. No c. Sometimes ",
  answer: "c"
}];

for(var i=0; i<questions.length; i++)
{
var currentQuestion= questions[i];
play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yay! Your Final Score is: " + score);
console.log("If you have scored 8+, then send a screenshot of your score:)");
console.log("\n");
console.log("Thanks for playing the quiz:)");
