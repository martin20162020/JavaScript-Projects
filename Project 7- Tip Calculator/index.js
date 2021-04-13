const tips = () =>{
    const fifteenTip = document.querySelector("#fifteen");
    const twentyTip = document.querySelector("#twenty");
    const twentyFiveTip = document.querySelector("#twentyFive");
    const noTip = document.querySelector("#noTip");

    const totalValue = document.querySelector("#total");

    fifteenTip.addEventListener("click", fifteenPercent = ()=> {
        if ((document.querySelector("#tip").value === "")) {
            totalValue.textContent = "NO VALUE GIVEN";
        } else{
            totalValue.textContent = `$${(parseInt(document.querySelector("#tip").value) * 1.15).toFixed(2)}`;
        }
    })

    twentyTip.addEventListener("click", twentyPercent = () => {
        if ((document.querySelector("#tip").value === "")) {
            totalValue.textContent = "NO VALUE GIVEN";
        } else{
            totalValue.textContent = `$${(parseInt(document.querySelector("#tip").value) * 1.20).toFixed(2)}`;
        }
    })

    twentyFiveTip.addEventListener("click", twentyFivePercent = () => {
        if ((document.querySelector("#tip").value === "")){
        totalValue.textContent = "NO VALUE GIVEN";
        } else{
        totalValue.textContent = `$${(parseInt(document.querySelector("#tip").value) * 1.25).toFixed(2)}`;
        }
    })

    noTip.addEventListener("click", zeroPercent = () => {
        if ((document.querySelector("#tip").value === "")){
            totalValue.textContent = "NO VALUE GIVEN";
        } else{
            totalValue.textContent = `$${(parseInt(document.querySelector("#tip").value)).toFixed(2)}` ;     
        }
    })
}

tips()