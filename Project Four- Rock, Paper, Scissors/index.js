const game = () => {
    let pScore = 0;
    let cScore = 0;
    let round = 1;

    let name = prompt("Lets play Rock, Paper Scissors! What is your name?");
    document.querySelector(".playersName").textContent = name
    if (name == ""){
        document.querySelector(".playersName").textContent = "Player 1"
    }  
    


    updatedScore = () =>{
        document.querySelector('.playersScore p').textContent = pScore
        document.querySelector('.computersScore p').textContent = cScore
        document.querySelector('.rounds').textContent = round
    }

    gameStarted = () => {
        const categories = document.querySelectorAll('button');
        let computerOptions = ['ROCK', 'PAPER', 'SCISSORS'];

        categories.forEach(category => {
            category.addEventListener("click", function() {
                let computer = computerOptions[Math.floor(Math.random() * computerOptions.length)]
                playerVsComputer(this.textContent, computer)
            });
        });
    };

    playerVsComputer = (player, computer) => {
        let winner = document.querySelector('.endResult')
        if(player === computer){
            round++, updatedScore()
            return winner.textContent = "TIE!"
        } if (player === 'ROCK'){
            round++
            if (computer === 'SCISSORS'){
                winner.textContent = `Winner: ${name}!`
                return pScore++, updatedScore()
            } else {
                winner.textContent = "Winner: Computer"
                return cScore++, updatedScore()
            }
        }if (player === 'PAPER'){
            round++
            if (computer === 'ROCK'){
                winner.textContent = `Winner: ${name}!`
                return pScore++, updatedScore()
            } else {
                winner.textContent = "Winner: Computer"
                return cScore++, updatedScore()
            }
        }if (player === 'SCISSORS'){
            round++
            if (computer === 'PAPER'){
                winner.textContent = `Winner: ${name}!`
                return pScore++, updatedScore()
            } else {
                winner.textContent = "Winner: Computer"
                return cScore++, updatedScore()
            }
        }
    }
    gameStarted()
}

game()