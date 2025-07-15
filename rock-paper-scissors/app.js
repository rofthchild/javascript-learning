//at first the result would not display. My [const resultDisplay] had inccorect method (document.getAnimations) and needed to be document.getElementById
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const posssibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

posssibleChoices.forEach(posssibleChoice => posssibleChoice.addEventListener('click', (e) => {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

    function generateComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
        console.log(randomNumber)
        if  (randomNumber == 1){
            computerChoice = 'rock'
        }

        if  (randomNumber == 2){
            computerChoice = 'paper'
        }

        if  (randomNumber == 3){
            computerChoice = 'scissors'
        }
        
        computerChoiceDisplay.innerHTML = computerChoice
    }

    function getResult(){
        if (computerChoice === userChoice){
            result = 'Tie'
        }

        if (computerChoice === 'rock' && userChoice === 'scissors'){
            result = 'You LOST!!'
        }

        if (computerChoice === 'paper' && userChoice === 'rock'){
            result = 'You LOST!!'
        }

        if (computerChoice === 'scissors' && userChoice === 'paper'){
            result = 'You LOST!!'
        }

        if (computerChoice === 'rock' && userChoice === 'paper'){
            result = 'You WIN!!'
        }

        if (computerChoice === 'paper' && userChoice === 'scissors'){
            result = 'You WIN!!'
        }
        
        if (computerChoice === 'scissors' && userChoice === 'rock'){
            result = 'You WIN!!'
        }

        resultDisplay.innerHTML = result
    }