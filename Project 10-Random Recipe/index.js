//Attempting to get data
tester = () =>{
    axios('www.themealdb.com/api/json/v1/1/random.php?')
    .then(response => {
        console.log(response.meal)
    })
}

document.querySelector("button").addEventListener("click", tester)