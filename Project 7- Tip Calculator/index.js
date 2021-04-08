const tips = () =>{
    let totalValue = document.querySelector("#total")

    document.querySelector("#fifteen").onclick = fifteenTip = ()=> totalValue.textContent = `$${(parseInt(document.querySelector("#tip").value) * 1.15).toFixed(2)}`

    document.querySelector("#twenty").onclick = twentyTip = ()=> totalValue.textContent = `$${(parseInt(document.querySelector("#tip").value) * 1.20).toFixed(2)}`

    document.querySelector("#twentyFive").onclick = twentyFiveTip = () => totalValue.textContent = `$${(parseInt(document.querySelector("#tip").value) * 1.25).toFixed(2)}`

    document.querySelector("#noTip").onclick =noTip = ()=> totalValue.textContent = `$${parseInt(document.querySelector("#tip").value).toFixed(2)}`

}

tips()