const marchMadnessQuiz = () => {

    const quizData = document.getElementById('quiz');
    const usersResults = document.getElementById('results');
    const submitQuiz = document.getElementById('submit');

    const quizQuestions = [
        {question: "1. Who is the only team left in the Big 12?", answers: {A: "Baylor", B: "Texas",  C: "Texas Tech", D: "Oklahoma"},
        correctAnswer: "A"},
        
        {question: "2. Which No.16 upset the No.1 Virginia Cavaliers in 2018?", answers: {A: "Iona", B: "UMBC", C: "Campbell", D: "Hampton"},
        correctAnswer: "B"},
    
        {question: "3.Only one time in tournament history did the four No.1 seeds make the Final Four. Which year was that?", answers: {A:"2018", B:"1999", C:"2008", D:"2013"},
        correctAnswer: "C"},
    
        {question: "4. How many perfect brackets were ruined when Oral Roberts beat Ohio State?", answers: {A: "4.7million", B: "5.1 million", C: "2.4 million", D: "1.4 million"},
        correctAnswer: "B"},
    
        {question: "5. What team came into March madness undefeated?", answers: {A: "Illinois", B: "Gonzaga", C: "Baylor", D: "Texas"},
        correctAnswer: "B"}
    ]

    quizContent = () =>{
        let output = [];
            quizQuestions.forEach((currentQuestion, questionNumber) => {
                let answers = []
    
                for (choice in currentQuestion.answers) {
                    answers.push(
                    `<label>
                        <input type="radio" name="questions${questionNumber}" value="${choice}">
                        ${choice}: ${currentQuestion.answers[choice]}<br>
                     </label>`
                    );
                }

                output.push(
                    `<div class = "questions"> ${currentQuestion.question} </div>
                    <div class="answers" ${answers.join('')}</div>`
                );
            }
        );
        quizData.innerHTML = output.join('');
        }

    quizResults = () =>{
        let answerContainers = quizData.querySelectorAll('.answers');
        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            let answerContainer = answerContainers[questionNumber];
            let userAnswer = (answerContainer.querySelector(`[name=questions${questionNumber}]:checked`) || {}).value; 
    
            if(userAnswer === currentQuestion.correctAnswer){
                answerContainer.style.backgroundColor = 'rgba(4, 39, 4, 0.562)'
                answerContainer.innerHTML += `Correct: ${currentQuestion.correctAnswer}`
                numCorrect++

            }else{
                answerContainer.style.backgroundColor = 'rgba(148, 11, 11, 0.575)'
                answerContainers[questionNumber].innerHTML += `The correct answer was: ${currentQuestion.correctAnswer}`  
            }
        })
        usersResults.innerHTML = `You got ${numCorrect} correct`
        
}
quizContent();

submitQuiz.addEventListener('click', quizResults);
}

marchMadnessQuiz()
