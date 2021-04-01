const game = () => {
    let pScore = 0;
    let cScore = 0;
    let round = 1;

    let name = prompt("Lets play Rock, Paper Scissors! What is your name?");
    document.querySelector(".playersName").textContent = name.charAt(0).toUpperCase() + name.slice(1);
    if (name == ""){
        name = document.querySelector(".playersName").textContent = "Player 1";
    }  
    
    updatedScore = () =>{
        document.querySelector('.playersScore p').textContent = pScore;
        document.querySelector('.computersScore p').textContent = cScore;
        document.querySelector('.rounds').textContent = round;
    }

    gameStarted = () => {
        const categories = document.querySelectorAll('button');
        let computerOptions = ['ROCK', 'PAPER', 'SCISSORS'];

        categories.forEach(category => {
            category.addEventListener("click", function() {
                let computer = computerOptions[Math.floor(Math.random() * computerOptions.length)];
                playerVsComputer(this.textContent, computer);
            });
        });
    };

    playerVsComputer = (player, computer) => {
        let pickings =  document.querySelector('.pickings');
        let winner = document.querySelector('.endResult');
        let finalPick = pickings.textContent = `${name} chose ${player} & Computer chose ${computer}`;

        let playersWon = () =>{ winner.textContent = `${name} won!`, finalPick, round++, pScore++, updatedScore()};
        let computersWon = () =>{winner.textContent = `Computer won!`, finalPick, round++, cScore++, updatedScore()};
        let ties = () =>{winner.textContent = `TIE!`, finalPick, round++, updatedScore()};

        if(player === computer){ 
            return ties()
        } if (player === 'ROCK'){
            if (computer === 'SCISSORS'){
                return playersWon()
            } else {
                return computersWon()
            }
        }if (player === 'PAPER'){
            if (computer === 'ROCK'){
                return playersWon()
            } else {
                return computersWon()
            }
        }if (player === 'SCISSORS'){
            if (computer === 'PAPER'){
                return playersWon()
            } else {
                return computersWon()
            }
        }
    }
    gameStarted()
}
game()
