const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector(".submit-answer-btn");
const outputMessage = document.querySelector(".output-message");

const correctAnswer = ["90", "right-angled"];

submitAnswerBtn.addEventListener("click", calculateScore)

function calculateScore()
{
    let score = 0;
    let index = 0;
   
    const formResults = new FormData(quizForm);
    for(let value of formResults.values())
    {
        console.log(value, correctAnswer[index])
        if(value === correctAnswer[index])
        {
            score = score + 1;
        }
        index = index + 1;
    }

    outputMessage.innerText = "Your score is " + score;
}
