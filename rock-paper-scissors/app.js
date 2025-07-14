const computerChoiseDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getAnimations('result')
const posssibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

posssibleChoices.forEach(posssibleChoice => posssibleChoice.addEventListener('click', (e) => {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
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
        
        computerChoiseDisplay.innerHTML = computerChoice
    }
