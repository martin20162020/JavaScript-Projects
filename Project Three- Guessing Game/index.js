let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessCount = 1;

document.getElementById("submitguess").onclick = function(){
    let numberGuessed = document.getElementById("guessField").value;
    console.log(randomNumber)
    if (numberGuessed == randomNumber){
        alert(`you got it in ${guessCount} guess(es)`)
    } else if(numberGuessed > randomNumber && guessCount < 3){
        alert(`The number is LESS than ${numberGuessed}`)
        ++guessCount;
    } else if (numberGuessed < randomNumber && guessCount < 3){
        alert(`The number is GREATER than ${numberGuessed}`)
        ++guessCount;
    } else if (numberGuessed < 1  || numberGuessed  > 100){
        alert(`INVALID! ${numberGuessed} is not between 1 - 100!`)
    }
    else{
        alert(`Sorry! You ran out of guesses, the number was: ${randomNumber}`)
    }
}