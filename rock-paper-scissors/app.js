const computerChoiseDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getAnimations('result')
const posssibleChoices = document.querySelectorAll('button')
let userChoice

posssibleChoices.forEach(posssibleChoice => posssibleChoice.addEventListener('click', (e) => {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML = userChoice
}))
