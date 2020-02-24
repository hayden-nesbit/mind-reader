var state = 0;


function getRandomNum(max) {
    max = 99;
    return Math.floor(Math.random() * Math.floor(max));
  }

function characters() {
    for (i = 1; i <= 99; i++) {

    }
}


var final = [];
for (i = 1; i <= 99; i++) {
    num.push(i);
}

//var symbol = ("@#!$%&*?+");
//for (i = 1; i <= 99; i++) {
   // symbol.push(i);



document.getElementById("header").innerHTML = "I can read your mind";
document.getElementById("start-reset").innerHTML = "Go";


function update() {

        state += 1;

        switch (state) {
            case 1:
                document.getElementById("header").innerHTML = "Pick a number from 01-99";
                document.getElementById("next").innerHTML = "Next"
                document.getElementById("text").innerHTML = "When you have your number click next";
                document.getElementById("start-reset").innerHTML = "Reset"
                break;
    
            case 2:
                document.getElementById("header").innerHTML = "Add both digits together to get a new number";
                document.getElementById("next").innerHTML = "Next";
                document.getElementById("text").innerHTML = "Ex. 13 is 1 + 3 = 4. Click next to proceed";
                document.getElementById("start-reset").innerHTML = "Reset"
                break;
    
            case 3:
                document.getElementById("header").innerHTML = "Subtract your new number from the original number";
                document.getElementById("next").innerHTML = "Next";
                document.getElementById("text").innerHTML = "Ex. 13 - 4 = 9. Click next to proceed";
                document.getElementById("start-reset").innerHTML = "Reset"
                break;
    
            case 4:
                document.getElementById("header").innerHTML = num;
                document.getElementById("next").innerHTML = "Reveal";
                document.getElementById("text").innerHTML = "Find your new number. Note the symbol beside the number";
                document.getElementById("start-reset").innerHTML = "Reset"
                break;
    
            case 5:
                document.getElementById("header").innerHTML = "&";
                document.getElementById("text").innerHTML = "Your symbol is &";
        
        
        }

    }


