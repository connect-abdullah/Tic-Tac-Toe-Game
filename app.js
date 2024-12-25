/* Steps to Create JS of Game :
1 = Assign variables  to specific properties using DOM
2 = Set Players
3 = Winning Patterns
4 = Write code to Assign Values in Box HTML
5 = Write code to Check Winner using patterns
6 = Display Winner Message
7 = Enable and Disbable boxes after one has won the game to avoid over-writing
8 = Create Funtion to Reset Game and then Call it on click on button.
*/
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// To set 2 players
let turnO = true; //playerX, playerO

// All winning Patterns
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//To Play in Boxes and to assign values.
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked !");

    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner ();
  });
});

// Conditions to match patterns.
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner")
                showWinner(pos1Val)
            }
            if (pos1Val !== pos2Val && pos2Val !== pos3Val) {
                console.log("Tie")
                tie()
            }
        }
    }
}

// To show winner message.
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const tie = () => {
  msg.innerText = `Its a Tie`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

// To Disable and Enable boxes after the game is finished or reset.
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }

}

// To Reset the Game
const resetGame = () => {
    turnO = true ;
    enableBoxes();
    msgContainer.classList.add("hide")
}

resetBtn.addEventListener("click", resetGame)
