function checkClicked() {
    for (var i = 0; i < 3; i++)
        document.querySelectorAll(".rps-icon")[i].addEventListener("click", fun);
}

function fun() {
    var arr = ['R', 'P', 'S'];

    var uwin = 1;
    var x = this.className;

    console.log(x[0]);
    ch = x[0];

    if (ch == 'R' || ch == 'P' || ch == 'S') {
        var comp = arr[Math.floor(Math.random() * 3)];

        if (ch == 'R') {
            if (comp == 'P') {
                uwin--;
            }
        } else if (ch == 'P') {
            if (comp == 'S') {
                uwin--;
            }
        } else if (ch == 'S') {
            if (comp == 'R') {
                uwin--;
            }
        }
        console.log("Computer " + comp);
        if (ch != comp) {
            if (uwin == 1) {
                console.log("You win ");
                document.getElementById("game-body").innerHTML = "<div class='js'><div class='left-js'><p>You Picked <img class='rps-icon rps-icon-rock " + ch + " r-clicked' src='images/" + ch + ".svg'></p> </div><div class='right-js'><p>The Computer Picked <img class='R rps-icon rps-icon-rock r-clicked' src='images/" + comp + ".svg'></p></div><div class='win-lose'><h1>You Win</h1><a href='index.html'><button class='btn'>Play Again</button></a></div></div>";

            } else {
                console.log("You Lose ");
                document.getElementById("game-body").innerHTML = "<div class='js'><div class='left-js'><p>You Picked <img class='rps-icon rps-icon-rock " + ch + " r-clicked' src='images/" + ch + ".svg'></p> </div><div class='right-js'><p>The Computer Picked <img class='R rps-icon rps-icon-rock r-clicked' src='images/" + comp + ".svg'></p></div><div class='win-lose'><h1>You Lose</h1><a href='index.html'><button  class='btn'>Play Again</button></a></div></div>";


            }
        } else {
            console.log("draw");
            document.getElementById("game-body").innerHTML = "<div class='js'><div class='left-js'><p>You Picked <img class='rps-icon " + ch + " rps-icon-rock r-clicked' src='images/" + ch + ".svg'></p> </div><div class='right-js'><p>The Computer Picked <img class='R rps-icon rps-icon-rock r-clicked' src='images/" + comp + ".svg'></p></div><div class='win-lose'><h1>Draw</h1><a href='index.html'><button class='btn'>Play Again</button></a></div></div>";

        }
    }
}
checkClicked();