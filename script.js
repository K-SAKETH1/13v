let buttons = document.querySelectorAll('.rpsButton')
let players = document.getElementById('player')
let computers = document.getElementById('computer')
let scores = document.getElementById('score')
function playerGame (playerChoice){
    let computerchoice = computerGame()
    players .innerText = `Playerchoice: ${playerChoice}`
    computers.innerText=`Computerchoice: ${computerchoice}`
    scores.innerText = score(playerChoice,computerchoice)
}

function click () {
  buttons.forEach(rpsBuuton=>{
  rpsBuuton.onclick = () => playerGame(rpsBuuton.value)
})
}
click()
function computerGame() {
    let choice = ['Rock','Paper','Sciscors']
    let random = Math.floor(Math.random()*3)
    return choice[random]
}
function score(playerChoice,computerchoice){
    let result;
    if (playerChoice==computerchoice) {
        result = 'Draw...!'
    }
    else if (playerChoice=='Rock' && computerchoice=='Sciscors'){
        result = 'You Won...😃'
    }
    else if (playerChoice=='Paper' && computerchoice=='Rock'){
        result = 'You Won...😃'
    }
    else if (playerChoice=='Sciscors' && computerchoice=='Paper'){
        result = 'You Won...😃'
    }
    else{
        result = 'You Lost...😢'
    }
    return result
}
let endgame = document.getElementById('end')
function end () {
    endgame.onclick = () =>{
        players .innerText = ''
        computers.innerText=''
        scores.innerText = ''
    }
}

end()
