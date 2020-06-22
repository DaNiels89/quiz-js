const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    nextButton.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {

}

function selectQuestion() {

}