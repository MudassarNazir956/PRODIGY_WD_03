let boxes = document.querySelectorAll(".box");
let turn_BG = document.querySelector(".bg");
let results = document.querySelector("#results");
let play_again = document.querySelector("#play-again");

let turn = "X";
let isGameOver = false;

boxes.forEach(e => {
    e.innerHTML = ""
    e.addEventListener("click", () => {
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn;
            cheakWin();
            cheakDraw();
            changeTurn();
        }
    })
})

function changeTurn() {
    if (turn === "X") {
        turn = "O";
        turn_BG.style.left = "85px";
    }
    else {
        turn = "X";
        turn_BG.style.left = "0";
    }
}

function cheakWin() {
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for (let i = 0; i < winConditions.length; i++) {
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if (v0 != "" && v0 === v1 && v0 === v2) {
            isGameOver = true;
            results.innerHTML = `Congratulations "${turn}" is Winner`;
            play_again.style.display = "inline"

            for (j = 0; j < 3; j++) {
                boxes[winConditions[i][j]].style.backgroundColor = "#32a852"
                boxes[winConditions[i][j]].style.color = "#000"
            }
        }
    }
}

function cheakDraw() {
    if (!isGameOver) {
        let isDraw = true;
        boxes.forEach(e => {
            if (e.innerHTML === "") isDraw = false;
        })

        if (isDraw) {
            isGameOver = true;
            results.innerHTML = "Your Game is Drawn";
            play_again.style.display = "inline"
        }
    }

}



play_again.addEventListener("click", () => {
    isGameOver = false;
    turn = "X";
    turn_BG.style.left = "0";
    results.innerHTML = "";
    play_again.style.display = "none";

    boxes.forEach(e => {
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff"
    })
})