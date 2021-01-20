const readLineSync = require('readline-sync');
console.clear();
//Quiz Introduction Module
console.log("Hey Techie! Welcome to the Javascript quiz\nLet's check your knowledge on Javascript");
console.log();

let name=readLineSync.question("Just enter a username and get started\n");

while(name===null || String(name).trim()===""){
  name=readLineSync.question("Please enter a username to get started\n")
}

readLineSync.question("\n\nAll the best "+name+"! \nPress any key to start.......");
console.clear();
executeQuiz(questionBank());









//Function to Execute Questions
function executeQuiz(questions){
var result=0;
Object.keys(questions).forEach((ques)=>{
  //Printing the question with options
  console.log(questions[ques].q);
  let id=1;
  questions[ques].op.forEach((op1)=>{console.log(id+'.'+op1);id++;});

//Retreiving the answer 
let answer=readLineSync.question();
console.log("You selected option : "+answer);
  
//Function to retreive value from given options  
function getAnswer(){
 answer=readLineSync.question();
}

//Checking the answer if arbitrary value
while(answer!=1 && answer!=2 && answer!=3 && answer!=4){
  console.log("Please choose any options from the above\nGive option number as 1 or 2 or 3 or 4");
  getAnswer();
}

//Displaying th result
  if(answer==questions[ques].ans){
  console.log("That's Right!");
  result++;
}else{
  console.log("That's Wrong answer!!! Correct option is :"+questions[ques].ans);
  }
readLineSync.question("Press any Key to answer next question");
console.clear();
});

console.log("Hurray! You successfully completed the quiz")
console.log("You answered "+result+" questions correctly out of "+Object.keys(questions).length);
console.log("\n\n\nWanna Work at big Tech Companies");
console.log("Checkout SDE Bootcamp at workat.tech");
}






//Questions, options and answers objects
function questionBank(){
const questions={
  q1:{
    q:'What is the output of the given expression\n(null == undefined && null === undefined)',
    op:['true','false','NAN','undefined'],
    ans:2
    },
  q2:{
    q:"what is the output of given expression\nif('false'){\n\tconsole.log(true);\n}else{\n\tconsole.log(false);\n}",
    op:['true','false','NAN','undefined'],
    ans:1
    },
  q3:{
    q:"what is the output of given expression\nconsole.log(typeof null)",
    op:['null','object','NAN','undefined'],
    ans:2
    },

  q4:{
    q:"what is the output of given expression\nconsole.log(console.log())",
    op:['Gives Error','Prints null','NAN','undefined'],
    ans:4
    },
  q5:{
    q:"what is the output of given expression\nconsole.log(Object.keys(10));",
    op:['[]','10','object','Gives Error'],
    ans:1
    }
};
return questions;
}