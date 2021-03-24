
increaseByOne = () => {
    let newNumber = document.getElementById("problemOne").textContent
    let newerNumber = parseInt(++newNumber)
    document.getElementById("problemOne").innerHTML = newerNumber
}


decreaseByOne = () => {
    let newNumber = document.getElementById("problemOne").textContent
    let newerNumber = parseInt(--newNumber)
    document.getElementById("problemOne").innerHTML = newerNumber
}


//styling for extra practice
let stylingH1 ={
    "color" : "#1ABC9C",
    "font-size" : "80px",
    "margin-left" : "15rem"
};

let stylingButtons = {
    "color" : "#1ABC9C",
    "border-radius" : "25px",
    "background-color" : "#E8F8F5",
    "border" : "2px solid #48C9B0",
    "padding": ".5rem",
    "font-size": "20px",
    "margin-left" : "4rem",
    "outline" : "none",
}

let stylingObjH1 = document.getElementById("problemOne");
Object.assign(stylingObjH1.style, stylingH1)

let stylingObjButton1 = document.getElementById("button1");
Object.assign(stylingObjButton1.style, stylingButtons)

let stylingObjButton2 = document.getElementById("button2");
Object.assign(stylingObjButton2.style, stylingButtons)