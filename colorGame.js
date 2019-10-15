//these are the six colors we are going to use as a cover of orignal colors
var numSquares = 6; 
var colors = colorPicker(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickRandom();
var colorDisplay = document.getElementById("colorDisplay");
var textDisplay = document.getElementById("message");
var h1= document.querySelector("h1");
var reset= document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click" , function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numSquares = 3;
    colors = colorPicker(numSquares);
    pickedColor = pickRandom();
    colorDisplay.textContent = pickedColor;

    for(var i=0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        }else {
            squares[i].style.display= "none";
        }
    }
});

hardbtn.addEventListener("click" , function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numSquares = 6;
    colors = colorPicker(numSquares);
    pickedColor = pickRandom();
    colorDisplay.textContent = pickedColor;

    for(var i=0; i < squares.length; i++) {
            squares[i].style.background = colors[i];

            squares[i].style.display= "block";
        
    }
});

reset.addEventListener("click", function(){
    
    //generate all new colors
     colors = colorPicker(numSquares);
    //pick a new random color
     pickedColor = pickRandom();
    //change colorDisplay to match picked color 
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";

    textDisplay.textContent ="";

    //change color of squares
    for(var i =0; i < squares.length; i++) {
        squares[i].style.background = colors [i];
    }

    h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;
function pickRandom() {
    var random= Math.floor(Math.random() * colors.length);
    return colors[random];
}
function colorPicker(num) {
    var arr= [];
    for (var i=0; i < num; i++) {
        var color= generateRandomColor();
        arr.push(color);
    }

    return arr;
}

for(var i=0; i< squares.length; i++) {
    //assigning a color to our squares
    squares[i].style.background = colors[i];

    //checking which color was clicked on
    squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
            textDisplay.textContent = "correct";
            reset.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
		} else {
            this.style.background ="#232323"
            textDisplay.textContent = "Try again";

		}
    });
    
    function changeColors (color){
        for(var i=0; i< squares.length; i++) {
            squares[i].style.background = color;
        }
    }
}

function generateRandomColor() {
    //create random red
    var r= Math.floor(Math.random() * 256);
    //create random green
    var g= Math.floor(Math.random() * 256);
    //create random blue
    var b= Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}