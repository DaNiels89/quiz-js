const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffeledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffeledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffeledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffeledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'From which country is Nislo?',
        answers: [
            { text: 'United States', correct: false },
            { text: 'Malaysia', correct: false },
            { text: 'The Netherlands', correct: true },
            { text: 'Mexico', correct: false }
        ]
    },
    {
        question: "Which sport doesn't Nislo perform?",
        answers: [
            { text: 'Tennis', correct: false },
            { text: 'Lacrosse', correct: true },
            { text: 'Chess', correct: false },
            { text: 'Soccer', correct: false }
        ]
    },
    {
        question: 'How many countries has Nislo visited?',
        answers: [
            { text: '1', correct: false },
            { text: '36', correct: true },
            { text: '101', correct: false },
            { text: '196', correct: false }
        ]
    },
    {
        question: 'For how long has Nislo traveled the world?',
        answers: [
            { text: '1 month', correct: false },
            { text: '6 months', correct: false },
            { text: '12 months', correct: false },
            { text: 'Over 24 months', correct: true }
        ]
    },
    {
        question: 'Should you hire me for all your web projects?',
        answers: [
            { text: 'Yes', correct: true },
            { text: 'No', correct: false },
            { text: 'Definitely', correct: true },
            { text: 'Maybe', correct: false }
        ]
    }
]