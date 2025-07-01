// const board = document.getElementById("board");
// const restartBtn = document.getElementById("restartBtn");
// const arrowContainer = document.getElementById("arrowContainer");

// const ROWS = 6;
// const COLS = 6;

// let target = null;
// let squares = [];

// function createBoard() {
//   board.innerHTML = "";
//   squares = [];

//   for (let i = 0; i < ROWS * COLS; i++) {
//     const sq = document.createElement("div");
//     sq.classList.add("square");
//     sq.dataset.index = i;
//   if (idx === target) {
//     squares[idx].classList.add("correct");
//     showArrow("");
//     alert("Parabéns! Você ganhou!");
//   } else {
//     squares[idx].classList.add("wrong");
//     showArrowDirection(idx, target);
//   }
// }

// function showArrowDirection(fromIdx, toIdx) {
//   const fromRow = Math.floor(fromIdx / COLS);
//   const fromCol = fromIdx % COLS;
//   const toRow = Math.floor(toIdx / COLS);
//   const toCol = toIdx % COLS;
const board = document.getElementById("board");
// const restartBtn = document.getElementById("restartBtn");
// const arrowContainer = document.getElementById("arrowContainer");

// const ROWS = 6;
// const COLS = 6;

// let target = null;
// let squares = [];

// function createBoard() {
//   board.innerHTML = "";
//   squares = [];

//   for (let i = 0; i < ROWS * COLS; i++) {
//     const sq = document.createElement("div");
//     sq.classList.add("square");
//     sq.dataset.index = i;
//     sq.addEventListener("click", onSquareClick);
//     board.appendChild(sq);
//     squares.push(sq);
//   }
// }

// function pickTarget() {
//   target = Math.floor(Math.random() * ROWS * COLS);
// }

// function onSquareClick(e) {
//   const idx = parseInt(e.target.dataset.index);
//   if (squares[idx].classList.contains("correct") || squares[idx].classList.contains("wrong")) {
//     return;
//   }

//   if (idx === target) {
//     squares[idx].classList.add("correct");
//     showArrow("");
//     alert("Parabéns! Você ganhou!");
//   } else {
//     squares[idx].classList.add("wrong");
//     showArrowDirection(idx, target);
//   }
// }

// function showArrowDirection(fromIdx, toIdx) {
//   const fromRow = Math.floor(fromIdx / COLS);
//   const fromCol = fromIdx % COLS;
//   const toRow = Math.floor(toIdx / COLS);
//   const toCol = toIdx % COLS;

//   const deltaRow = toRow - fromRow;
//   const deltaCol = toCol - fromCol;

//   let arrow = "❓";

//   if (deltaRow === 0 && deltaCol > 0) arrow = "→";
//   else if (deltaRow === 0 && deltaCol < 0) arrow = "←";
//   else if (deltaCol === 0 && deltaRow > 0) arrow = "↓";
//   else if (deltaCol === 0 && deltaRow < 0) arrow = "↑";
//   else if (deltaRow < 0 && deltaCol > 0) arrow = "↗";
//   else if (deltaRow > 0 && deltaCol > 0) arrow = "↘";
//   else if (deltaRow > 0 && deltaCol < 0) arrow = "↙";
//   else if (deltaRow < 0 && deltaCol < 0) arrow = "↖";

//   showArrow(arrow);
// }

// function showArrow(arrowSymbol) {
//   arrowContainer.textContent = arrowSymbol;
// }

// function restartGame() {
//   showArrow("");
//   createBoard();
//   pickTarget();
// }

// restartBtn.addEventListener("click", restartGame);

// restartGame();

//   const deltaRow = toRow - fromRow;
//   const deltaCol = toCol - fromCol;

//   let arrow = "❓";

//   if (deltaRow === 0 && deltaCol > 0) arrow = "→";
//   else if (deltaRow === 0 && deltaCol < 0) arrow = "←";
//   else if (deltaCol === 0 && deltaRow > 0) arrow = "↓";
//   else if (deltaCol === 0 && deltaRow < 0) arrow = "↑";
//   else if (deltaRow < 0 && deltaCol > 0) arrow = "↗";
//   else if (deltaRow > 0 && deltaCol > 0) arrow = "↘";
//   else if (deltaRow > 0 && deltaCol < 0) arrow = "↙";
//   else if (deltaRow < 0 && deltaCol < 0) arrow = "↖";

//   showArrow(arrow);
// }

// function showArrow(arrowSymbol) {
//   arrowContainer.textContent = arrowSymbol;
// }

// function restartGame() {
//   showArrow("");
//   createBoard();
//   pickTarget();
// }

// restartBtn.addEventListener("click", restartGame);

// restartGame();









const board = document.getElementById("board");
const arrowContainer = document.getElementById("arrowContainer");
const restartBtn = document.getElementById("restartBtn");

const ROWS = 6;
const COLS = 6;
let target = 0;

function createBoard() {
  board.innerHTML = "";
  for (let i = 0; i < ROWS * COLS; i++) {
    const div = document.createElement("div");
    div.className = "square";
    div.dataset.index = i;
    div.onclick = handleClick;
    board.appendChild(div);
  }
}

function handleClick(e) {
  const index = +e.target.dataset.index;
  const square = e.target;

  if (square.classList.contains("correct") || square.classList.contains("wrong")) return;

  if (index === target) {
    square.classList.add("correct");
    arrowContainer.textContent = "";
    alert("Parabéns! Você ganhou!");
  } else {
    square.classList.add("wrong");
    showArrow(index, target);
  }
}

function showArrow(from, to) {
  const [fr, fc] = [Math.floor(from / COLS), from % COLS];
  const [tr, tc] = [Math.floor(to / COLS), to % COLS];
  const dr = tr - fr, dc = tc - fc;

  const directions = {
    "0,1": "→",  "0,-1": "←",
    "1,0": "↓",  "-1,0": "↑",
    "-1,1": "↗", "1,1": "↘",
    "1,-1": "↙","-1,-1": "↖"
  };

  const key = `${Math.sign(dr)},${Math.sign(dc)}`;
  arrowContainer.textContent = directions[key] || "";
}

function restartGame() {
  createBoard();
  arrowContainer.textContent = "";
  target = Math.floor(Math.random() * ROWS * COLS);
}

restartBtn.onclick = restartGame;
restartGame();
