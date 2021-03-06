const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

let shuffeledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    nextButton.classList.remove('hide')
    shuffeledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')

    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffeledQuestions[currentQuestionIndex])
}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    }

]