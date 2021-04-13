const totalValue = document.querySelector("#total")

needAValue = () => {
    if (document.querySelector("#tip").value === ""){
        return totalValue.textContent = "NO VALUE GIVEN";
    }
}

usersInput = total => totalValue.textContent = `$${(parseInt(document.querySelector("#tip").value) * total).toFixed(2)}`

document.querySelector("#fifteen").addEventListener("click", fifteenPercent = () => needAValue() || usersInput(1.15))

document.querySelector("#twenty").addEventListener("click", twentyPercent = () => needAValue() || usersInput(1.20))

document.querySelector("#twentyFive").addEventListener("click", twentyFivePercent = () => needAValue() || usersInput(1.25))

document.querySelector("#noTip").addEventListener("click", zeroPercent = () => needAValue() || usersInput(1))