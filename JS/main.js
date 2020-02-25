let char = "";
let input = "";
function getChar() {
    char = "";
    let char_list1 = "+©¶»%^*?&";
    let rand = Math.floor(Math.random() * char_list1.length);
    input = char_list1.charAt(rand);
    let char_list2 = "!@#$⇿∅∇∈⊠";
    for (let i = 1; i <= 99; i++) {
        char += i + ": ";
        if (i % 9 === 0) {
            char += input;
        } else {
            char += char_list2.charAt(Math.floor(Math.random() * char_list2.length));
        } 
        char += "<br>"
    }
}

let view = 0;

function update() {

    switch (view) {

        case 0:
            document.getElementById("header").innerHTML = "I can read your mind";
            document.getElementById("next").style.display = "none";
            document.getElementById("start-reset").innerHTML = "Go";
            document.getElementById("text").style.display = "none"
            break;

        case 1:
            document.getElementById("header").innerHTML = "Pick a number from 01-99";
            document.getElementById("next").style.display = "block";
            document.getElementById("next").innerHTML = "Next"
            document.getElementById("text").style.display = "block";
            document.getElementById("text").innerHTML = "When you have your number click next";
            document.getElementById("start-reset").innerHTML = "Reset"
            break;

        case 2:
            document.getElementById("header").innerHTML = "Add both digits together to get a new number";
            document.getElementById("next").style.display = "block";
            document.getElementById("next").innerHTML = "Next";
            document.getElementById("text").innerHTML = "Ex. 13 is 1 + 3 = 4. Click next to proceed";
            document.getElementById("start-reset").innerHTML = "Reset"
            break;

        case 3:
            document.getElementById("header").innerHTML = "Subtract your new number from the original number";
            document.getElementById("next").style.display = "block";
            document.getElementById("next").innerHTML = "Next";
            document.getElementById("text").innerHTML = "Ex. 13 - 4 = 9. Click next to proceed";
            document.getElementById("start-reset").innerHTML = "Reset"
            break;

        case 4:
            getChar();
            document.getElementById("header").innerHTML = char;
            document.getElementById("next").innerHTML = "Reveal";
            document.getElementById("text").innerHTML = "Find your new number. Note the symbol beside the number";
            document.getElementById("start-reset").innerHTML = "Reset"
            break;

        case 5:
            document.getElementById("header").innerHTML = input;
            document.getElementById("next").style.display = "none";
            document.getElementById("text").innerHTML = "Your symbol is " + input;

    }

}

function nextView() {
    view++;
    update();
}

function previousView() {
    view--;
    update();
}

function startReset() {
    if (view != 0) {
        view = 0;
    } else {
        nextView()
    }
    update();
}

update();