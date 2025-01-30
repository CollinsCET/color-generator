// color number system
const HexaDecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9,`A`,`B`,`C`,`D`,`E`,`F`]

// Action buttons
let generateColorButton = document.getElementById("generate-button-container")
let clearColorButton = document.getElementById("clear-button-container")

// color Box 
let firstColorBox = document.getElementById("first-color-container")
let secondColorBox = document.getElementById("second-color-container")
let thirdColorBox = document.getElementById("third-color-container")
let fourthColorBox = document.getElementById("fourth-color-container")

// Hex color text
let firstColorname = document.getElementById("first-color-name")
let secondColorname = document.getElementById("second-color-name")
let thirdColorname = document.getElementById("third-color-name")
let fourthColorname = document.getElementById("fourth-color-name")

// Store Initial Background Colors and Text
const defaultStyles = {
    firstColor: window.getComputedStyle(firstColorBox).backgroundColor,
    secondColor: window.getComputedStyle(secondColorBox).backgroundColor,
    thirdColor: window.getComputedStyle(thirdColorBox).backgroundColor,
    fourthColor: window.getComputedStyle(fourthColorBox).backgroundColor,
    firstText: firstColorname.textContent,
    secondText: secondColorname.textContent,
    thirdText: thirdColorname.textContent,
    fourthText: fourthColorname.textContent
}


// Generating a randon Number
function generateRandomNumber (){
    let randomNumber = Math.floor(Math.random() * HexaDecimalNumberSystem.length)
    return randomNumber
}


// Action button function

// For first color container
generateColorButton.addEventListener("click", function(){
    NewGeneratedNumber = `#`
    for (let x = 0; x < 6; x++) {
        NewGeneratedNumber += HexaDecimalNumberSystem[generateRandomNumber()];
        firstColorBox.style.backgroundColor = NewGeneratedNumber
        firstColorname.textContent = NewGeneratedNumber
    }
})

// For second color container
generateColorButton.addEventListener("click", function(){
    NewGeneratedNumber =`#`
    for( let y = 0; y < 6; y++){
        NewGeneratedNumber += HexaDecimalNumberSystem[generateRandomNumber()]
        secondColorBox.style.backgroundColor = NewGeneratedNumber
        secondColorname.textContent = NewGeneratedNumber
    }
})


// for third color container 
generateColorButton.addEventListener("click", function(){
    let NewGeneratedNumber = `#`
    for(let z = 0; z < 6; z++){
        NewGeneratedNumber += HexaDecimalNumberSystem[generateRandomNumber()]
        thirdColorBox.style.backgroundColor = NewGeneratedNumber
        thirdColorname.textContent = NewGeneratedNumber
    }
})

// For fourth color container
generateColorButton.addEventListener("click", function (){
    let NewGeneratedNumber =`#`
    for(let a = 0; a < 6; a++){
        NewGeneratedNumber += HexaDecimalNumberSystem[generateRandomNumber()]
        fourthColorBox.style.backgroundColor = NewGeneratedNumber
        fourthColorname.textContent = NewGeneratedNumber
        console.log(NewGeneratedNumber)
    }
})

// Reset function to restore initial styles
clearColorButton.addEventListener("click", function() {
    firstColorBox.style.backgroundColor = defaultStyles.firstColor;
    secondColorBox.style.backgroundColor = defaultStyles.secondColor;
    thirdColorBox.style.backgroundColor = defaultStyles.thirdColor;
    fourthColorBox.style.backgroundColor = defaultStyles.fourthColor;

    firstColorname.textContent = defaultStyles.firstText;
    secondColorname.textContent = defaultStyles.secondText;
    thirdColorname.textContent = defaultStyles.thirdText;
    fourthColorname.textContent = defaultStyles.fourthText;
});