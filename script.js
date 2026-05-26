const quiz=[
{
q:"HTML stands for?",
options:[
"Hyper Text Markup Language",
"Home Tool Markup Language",
"Hyper Tool"
],
answer:0
},
{
q:"CSS used for?",
options:[
"Styling",
"Coding",
"Database"
],
answer:0
},
{
q:"JavaScript is?",
options:[
"Programming Language",
"Browser",
"Editor"
],
answer:0
}
];

let current=0;
let score=0;

function loadQuestion(){

document.getElementById("question")
.innerText=quiz[current].q;

let answers="";

quiz[current].options.forEach((opt,index)=>{
answers+=`
<button class="option"
onclick="check(${index})">
${opt}
</button>`;
});

document.getElementById("answers").innerHTML=answers;
}

function check(index){

if(index===quiz[current].answer){
score++;
}

nextQuestion();
}

function nextQuestion(){

current++;

if(current<quiz.length){
loadQuestion();
}
else{
document.querySelector(".quiz-box")
.innerHTML=`
<h1>Quiz Finished</h1>
<h2>Score: ${score}/${quiz.length}</h2>
`;
}
}

loadQuestion();