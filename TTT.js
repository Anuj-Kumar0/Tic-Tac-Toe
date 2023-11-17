let boxOne = document.querySelector(".one");
let boxTwo = document.querySelector(".two");
let boxThree = document.querySelector(".three");
let boxFour = document.querySelector(".four");
let boxFive = document.querySelector(".five");
let boxSix = document.querySelector(".six");
let boxSeven = document.querySelector(".seven");
let boxEight = document.querySelector(".eight");
let boxNine = document.querySelector(".nine");
let firstPlayerName;
let secondPlayerName;

let start = document.querySelector("#start").addEventListener("click", () => {
  firstPlayerName = prompt("Player 1 Name?");
  secondPlayerName = prompt("Player 2 Name?");
});
let disableClick = () => {
  let boxes = document.querySelectorAll(".boxes");
  boxes.forEach((box) => {
    box.removeEventListener("click", playerTurn);
  });
};

let GameBoard = {
  gameboard: ["X", "O"],
  player1: {
    name: firstPlayerName,
  },
  player2: {
    name: secondPlayerName,
  },
};

let player1choice = [];
let player2choice = [];
let currentPlayer = 1;

const playerTurn = (e) => {
  let targetElement = e.target;

  if (targetElement.textContent === "") {
    if (currentPlayer === 1) {
      targetElement.textContent = GameBoard["gameboard"][0];
      player1choice.push(targetElement.id);
      currentPlayer = 2;
    } else {
      targetElement.textContent = GameBoard["gameboard"][1];
      player2choice.push(targetElement.id);
      currentPlayer = 1;
    }
    console.log("Player 1 choices:", player1choice.join(""));
    console.log("Player 2 choices:", player2choice.join(""));

    if (
      boxOne.textContent === "X" &&
      boxTwo.textContent === "X" &&
      boxThree.textContent === "X"
    ) {
      console.log("PlayerWin 1");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxOne.textContent === "O" &&
      boxTwo.textContent === "O" &&
      boxThree.textContent === "O"
    ) {
      console.log("PlayerWin 2");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxFour.textContent === "X" &&
      boxFive.textContent === "X" &&
      boxSix.textContent === "X"
    ) {
      console.log("PlayerWin 1");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxFour.textContent === "O" &&
      boxFive.textContent === "O" &&
      boxSix.textContent === "O"
    ) {
      console.log("PlayerWin 2");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxSeven.textContent === "X" &&
      boxEight.textContent === "X" &&
      boxNine.textContent === "X"
    ) {
      console.log("PlayerWin 1");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxSeven.textContent === "O" &&
      boxEight.textContent === "O" &&
      boxNine.textContent === "O"
    ) {
      console.log("PlayerWin 2");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxOne.textContent === "X" &&
      boxFour.textContent === "X" &&
      boxSeven.textContent === "X"
    ) {
      console.log("PlayerWin 1");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxOne.textContent === "O" &&
      boxFour.textContent === "O" &&
      boxSeven.textContent === "O"
    ) {
      console.log("PlayerWin 2");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxTwo.textContent === "X" &&
      boxFive.textContent === "X" &&
      boxEight.textContent === "X"
    ) {
      console.log("PlayerWin 1");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxTwo.textContent === "O" &&
      boxFive.textContent === "O" &&
      boxEight.textContent === "O"
    ) {
      console.log("PlayerWin 2");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxThree.textContent === "X" &&
      boxSix.textContent === "X" &&
      boxNine.textContent === "X"
    ) {
      console.log("PlayerWin 1");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxThree.textContent === "O" &&
      boxSix.textContent === "O" &&
      boxNine.textContent === "O"
    ) {
      console.log("PlayerWin 2");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxThree.textContent === "X" &&
      boxFive.textContent === "X" &&
      boxSeven.textContent === "X"
    ) {
      console.log("PlayerWin 1");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxThree.textContent === "O" &&
      boxFive.textContent === "O" &&
      boxSeven.textContent === "O"
    ) {
      console.log("PlayerWin 1");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxOne.textContent === "X" &&
      boxFive.textContent === "X" &&
      boxNine.textContent === "X"
    ) {
      console.log("PlayerWin 1");
      currentPlayer = 3;
      disableClick();
    } else if (
      boxOne.textContent === "O" &&
      boxFive.textContent === "O" &&
      boxNine.textContent === "O"
    ) {
      console.log("PlayerWin 2");
      currentPlayer = 3;
      disableClick();
    }
  }
};

console.log(player1choice);
console.log(player2choice);
let enableClick = (function () {
  let play = document
    .querySelectorAll(".boxes")
    .forEach((box) => box.addEventListener("click", playerTurn));
})();
