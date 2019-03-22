var numberOfSquares = 6;
var colours = [];
var pickedColour;


var squares = document.querySelectorAll(".square");
var goalColour = document.querySelector("#goal")
var header = document.getElementById("header");
var resetButton = document.getElementById("resetB")
var messageDisplay = document.querySelector("#message");
var modeButtons = document.querySelectorAll(".mode");
goalColour.textContent = pickedColour;

init();

function init(){
    //modeButton event listner
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numberOfSquares = 3
            }
            else{
                numberOfSquares = 6;
        }
            remake();
    });
}
    for(var i = 0; i < squares.length; i++){
        //add initial colours to squares
        //add click listener
        squares[i].addEventListener("click", function(){
         //grab colour of picked colour
         var clickedColour = this.style.backgroundColor;
         //compare to winning colour
         if(clickedColour === pickedColour){
             messageDisplay.textContent = "Correct!";
             header.style.backgroundColor = clickedColour;
             resetButton.textContent = "Play Again?"
             changeColours(clickedColour);
         }
         else{
             this.style.backgroundColor = "#232323";
             messageDisplay.textContent = "Try Again";
          }
       })
    }
    remake();
}
    
function remake(){
    colours = generateRandomColours(numberOfSquares);
    //pick a new random colour
    pickedColour = pickColour()
    //change text in header
    goalColour.textContent = pickedColour;
    //change the colours of the squares
    for(var i = 0; i < squares.length; i++){
        if(colours[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        }
        else{
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colours[i];
    }
    header.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colours";
}

resetButton.addEventListener("click", function(){
   remake();
});

function changeColours(colour){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour(){
    //pick a number
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function generateRandomColours(num){
    //make an array
    var arr = []
    //add num random colours to array
    for(var i = 0; i < num; i++){
        //get random colours, push into array
        arr.push(randomColour())
    }
    //return array at end
    return arr
}

function randomColour(){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}