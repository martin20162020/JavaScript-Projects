let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessCount = 1;

document.getElementById("submitguess").onclick = function(){
    let numberGuessed = document.getElementById("guessField").value;
    console.log(randomNumber);
    if (numberGuessed == randomNumber){
        alert (`you got it in ${guessCount} guess(es)`);
        answeredIt();
    } else if (numberGuessed < 1  || numberGuessed  > 100){
        if(guessCount < 3){
            alert(`INVALID! ${numberGuessed} is not between 1 - 100!`);
            document.getElementById("guessField").value = "";
            ++guessCount;
        }
        else{
            alert(`Sorry! You ran out of guesses, the number was: ${randomNumber}`);
            answeredIt()
        }
    } else if(numberGuessed > randomNumber && guessCount < 3){
        alert(`The number is LESS than ${numberGuessed}`);
        document.getElementById("guessField").value = "";
        ++guessCount;
    } else if (numberGuessed < randomNumber && guessCount < 3){
        alert(`The number is GREATER than ${numberGuessed}`);
        document.getElementById("guessField").value = "";
        ++guessCount;
    } 
    else{
        alert(`Sorry! You ran out of guesses, the number was: ${randomNumber}`);
        answeredIt();
    }
}

answeredIt = () =>{
    randomNumber = Math.floor(Math.random() * 100 + 1)
    guessCount = 1
    document.getElementById("guessField").value = ""
    yesOrNo()
}

yesOrNo = () =>{
 let txt;
 if (confirm("Would you like to play again?")){
     alert("Guess a number between 1-100!");
 } else {
     alert("Thanks for playing!");
 }
}