//Attempting to get data
tester = () =>{
    axios('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => {
        // GRABBING DATA
        randomMeal = response.data.meals[0]
        document.querySelector(".recipes").innerHTML = randomMeal.strMeal.toUpperCase()
        
        // RANDOM IMAGE
        document.querySelector(".changingImage").src = randomMeal.strMealThumb;

        //RANDOM VIDEO
        document.querySelector('iframe').src = `https://www.youtube.com/embed/${randomMeal.strYoutube.slice(-11)}`

        //Instructions
        const instructions = document.createElement("div")
        const information = document.querySelector(".extra")
        information.innerHTML = randomMeal.strInstructions

        //Ingredients
        const ingredients = document.createElement("div")
        const unorderedList = document.querySelector("ul")
        ingredients.classList.add = "ingredientContainer"
        const allIngredients = []

        for (let i = 1; i < 20; i++){
            if (randomMeal[`strIngredient${i}`]){
                let singleItem = `<br>${randomMeal[`strIngredient${i}`]} - ${randomMeal[`strMeasure${i}`]}`
                allIngredients.push(singleItem)
            } else {
                break
            }
        }
        unorderedList.innerHTML = allIngredients
    })
}

document.querySelector("button").addEventListener("click", tester)
document.addEventListener("DOMContentLoaded", tester)
