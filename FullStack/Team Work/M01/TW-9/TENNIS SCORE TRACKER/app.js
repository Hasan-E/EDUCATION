//!   INPUT
const scoreToWin = document.querySelector("input");
//!   BUTTONS
const p1Btn = document.getElementById("player1");
const reset = document.getElementById("reset");
const p2Btn = document.getElementById("player2");
//!   SCORE OUTPUTS
const p1Score = document.getElementById("p1Score");
const p2Score = document.getElementById("p2Score");
//!   VARIABLES
let score1 = 0;
let score2 = 0;
//!   BUTTONS FUNCTIONS
//************* P1 BUTTON *************/
p1Btn.onclick = () => {
  const winScore = parseFloat(scoreToWin.value);
  if (score1 < winScore && score2 < winScore) {
    ++score1;
    p1Score.textContent = `${score1}   `;
  }
  if (score1 == winScore) {
    p1Score.classList = "text-success";
    p2Score.classList = "text-danger";
  }
};
//************ P2 BUTTON  ***************/
p2Btn.onclick = () => {
  const winScore = parseFloat(scoreToWin.value);
  if (score2 < winScore && score1 < winScore) {
    ++score2;
    p2Score.textContent = `   ${score2}`;
  }
  if (score2 == winScore) {
    p2Score.classList = "text-success";
    p1Score.classList = "text-danger";
  }
};
//***********  REST BUTTON *************/
reset.onclick = () => {
  score1 = 0;
  score2 = 0;
  p1Score.textContent = `${score1}   `;
  p2Score.textContent = `${score2}   `;
  p1Score.classList = "";
  p2Score.classList = "";
  scoreToWin.value = "5";
};
