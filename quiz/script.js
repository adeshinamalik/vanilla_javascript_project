const quizData = [
    {
        question: "how many years are in a century",
        a: "20",
        b: "50",
        c: "100",
        d: "10",
        correct: "c"
    },
    {
        question: "What is the most used programming language in 2019?",
        a: "java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Whos is the president of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b"
    },
    {
        question: "What does HTML stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorsport Lamboginis",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "a"
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const buttonEl = document.querySelector('.button');
let result = document.querySelector('body');


// for input
const ans_1 = document.getElementById('a');
const ans_2 = document.getElementById('b');
const ans_3 = document.getElementById('c');
const ans_4 = document.getElementById('d');
let ansEl = document.querySelectorAll('input');


let currentQuiz = 0;
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    ans_1.value = currentQuizData.a;
    ans_2.value = currentQuizData.b;
    ans_3.value = currentQuizData.c;
    ans_4.value = currentQuizData.d;

}
loadQuiz();
let score = 0;
let anwser;
buttonEl.addEventListener('click', function () {

    currentQuiz += 1;
    ansEl.forEach(element => {
        if (element.checked) {
            anwser = element.id;
            loadQuiz();
        }
    })
    if (quizData[currentQuiz - 1].correct == anwser) {
        score++;
    }
    if (currentQuiz > 3) {
        result.innerHTML = `<div id="mymy">Your score is ${score}/5</div>`;
    }
    console.log('answer: ', anwser);
    console.log('correct: ', quizData[currentQuiz - 1].correct);
    console.log(score);
});


