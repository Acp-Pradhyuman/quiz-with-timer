const correctAnswers=["A", "C", "C", "A", "D", "B", "C", "B", "B", "A"];
const form=document.querySelector("form.quiz-form");
const result=document.querySelector("div.result");
const button=document.querySelector("button");
const popup=document.querySelector(".popup-wrapper");
const close=document.querySelector(".popup-close");
const quiz = document.querySelector(".quiz");
const startButton = document.querySelector("#startButton");
const quizButton=document.querySelector("body > div.intro.py-3.bg-white.text-center > div:nth-child(3) > button")
let secs = 0;
let score=0;
const endTime = new Date("July 29, 2024  13:20:00");
const startTime = new Date ("July 29,2024 13:19:00");

const diff=endTime.getTime()-startTime.getTime();
console.log(diff);



const month_name = function(date){
    monthlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return monthlist[date.getMonth()];
    };


 //current server time logic
let currentTime = setInterval(()=>{
    const today = new Date();
    let hours = today.getHours()
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let hourss = startTime.getHours();
    let minutess = startTime.getMinutes();
    let secondss = startTime.getSeconds();
    if(hours<10){
        hours = "0" + hours;
    };
    if(minutes<10){
        minutes = "0" + minutes;

    };
    if(seconds<10){
        seconds = "0" + seconds;

    };
    if(hourss<10){
        hourss = "0" + hourss;
    };
    if(minutess<10){
        minutess = "0" + minutess;

    };
    if(secondss<10){
        secondss = "0" + secondss;

    };
    startButton.textContent = `${startTime.getDate()}/${month_name(startTime)}/${startTime.getFullYear()}  : Current Server Time is
    ${hours}:${minutes}:${seconds} & the Quiz Starts at ${hourss}:${minutess}:${secondss}` ;
},1000);


//score
const checker = function(e){
    popup.style.display="none";
    e.preventDefault();
    let score=0;
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    //check answers
    userAnswers.forEach((answer,index)=>{
        if(answer == correctAnswers[index]){
            score+=10;
        }});

        scroll(0,0);
//result.querySelector("span").textContent=`${score}%`;
result.classList.remove("d-none");

let output=0;
const timer=setInterval(() => {
  result.querySelector("span").textContent=`${output}%`;
  if(score===output){
      clearInterval(timer);
  }
  else{
      output++;
  }
},10);

quiz.classList.add("d-none");

};

//countdown timer logic
var x = setInterval(function() {
var now = new Date().getTime();
if(startTime.getTime() <= now ) {
clearInterval(currentTime);
var difference = endTime.getTime() - now ;
console.log(difference);

var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((difference % (1000 * 60)) / 1000);

if(seconds < 10 ){
    seconds = "0" + seconds;
}
if(minutes < 10 ){
    minutes = "0" + minutes;
}
if(hours < 10 ){
    hours = "0" + hours;
}


startButton.textContent = "Time Left : " + hours + " hours "
  + minutes + " minutes " + seconds + " seconds ";

  if (difference < 0) {
    clearInterval(x);
    startButton.textContent = `This session ended at ${endTime.getDate()}/${month_name(endTime)}/${endTime.getFullYear()}`;
    quiz.classList.add("d-none");
    /*
    result.classList.remove("d-none");
    result.querySelector("span").textContent=`${score}%`;
    */


  }}


}, 1000);

/*
//start quiz button event listener
var noww = new Date().getTime();
if(noww>=startTime.getTime()&&noww<=endTime.getTime()){
    quizButton.addEventListener("click",e=>{
        quiz.classList.remove("d-none");
    })}
    */




////
close.addEventListener("click",(e)=>{
   checker(e);
});


popup.addEventListener("click",(e)=>{
    checker(e);
});

button.addEventListener("click" , e => {
    checker(e);
});

//submit form
form.addEventListener("submit",e=>{
    e.preventDefault();
    let score=0;
    quiz.classList.add("d-none");
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    //check answers
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score+=10;
        }
    });
console.log(score);


//show results on page
scroll(0,0);
//result.querySelector("span").textContent=`${score}%`;
result.classList.remove("d-none");
//score animation
let output=0;
const timer=setInterval(() => {
  result.querySelector("span").textContent=`${output}%`;
  if(score===output){
      clearInterval(timer);
  }
  else{
      output++;
  }
},10);

});

//timer pop-up
setTimeout(()=>{
    popup.style.display="block";
    quiz.classList.add("d-none");
},diff);





//window object (global object)
//console.log("hello");
//window.console.log("hello");

//console.log(document.querySelector("form"));
//console.log(window.document.querySelector("form"));

//alert("hello");
//window.alert("hello");

/*setTimeout(()=>{
      alert("hello");
  },3000); */

  let i=0;
  const t = setInterval(
      () => {
      console.log("hello");
      i++;
      if(i===10){
          clearInterval(t);
      }
  },1000);
