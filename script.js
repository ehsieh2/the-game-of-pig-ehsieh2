const holdBtn = document.getElementById("hold");
const rollBtn = document.getElementById("roll");
const p1ScoreID = document.getElementById("p1-score");
const p2ScoreID = document.getElementById("p2-score");
const p1HoldID = document.getElementById("p1-hold");
const p2HoldID = document.getElementById("p2-hold");

holdBtn.addEventListener("click", hold);
rollBtn.addEventListener("click", roll);

let holdValue = 0;
let score = 0;
let score2 = 0;
var count = 0;

function changeTurn() {
  console.log(count);
    if (count % 2 === 0) {
      document.getElementById("result").innerText = "Player-1 turn!";
    } else {
      document.getElementById("result").innerText = "Player-2 turn!";
    }
}

function hold() {
  if (count % 2 === 0) {
    score += holdValue;
    p1ScoreID.style.width = score + "%";
    p1ScoreID.setAttribute("aria-valuenow", score);
    p1ScoreID.innerText = score;

    holdValue = 0;

    p1HoldID.style.width = holdValue + "%";
    p1HoldID.setAttribute("aria-valuenow", holdValue);
    p1HoldID.innerText = holdValue;
  } else {
    score2 += holdValue;
    p2ScoreID.style.width = score2 + "%";
    p2ScoreID.setAttribute("aria-valuenow", score2);
    p2ScoreID.innerText = score2;

    holdValue = 0;

    p2HoldID.style.width = holdValue + "%";
    p2HoldID.setAttribute("aria-valuenow", holdValue);
    p2HoldID.innerText = holdValue;
  }
 
  count++; //move to next turn
  changeTurn();
}

function roll() {
  const faceValue = Math.floor(Math.random() * 6) + 1;
  const output = "&#x268" + (faceValue  - 1) + "; ";
  const die = document.getElementById("die");
  die.innerHTML = output;

  holdValue += faceValue;
  if (faceValue === 1) {
    holdValue = 0;    
  }
  
  if (count % 2 === 0) {
    if (holdValue + score >= 100) {
      //END GAME DISABLE BUTTONS
      document.getElementById("roll").disabled = true;
      document.getElementById("hold").disabled = true;
      p1HoldID.style.width = 0 + "%";
      p1HoldID.setAttribute("aria-valuenow", 100);
      p1HoldID.innerText = 0;

      p1ScoreID.style.width = 100 + "%";
      p1ScoreID.setAttribute("class", "progress-bar bg-success");
      p1ScoreID.innerText="100 🎉";
    } else {
      p1HoldID.style.width = holdValue + "%";
      p1HoldID.setAttribute("aria-valuenow", holdValue);
      p1HoldID.innerText = holdValue;
    }
  } else {
    if (holdValue + score2 >= 100) {
      //END GAME DISABLE BUTTONS
      document.getElementById("roll").disabled = true;
      document.getElementById("hold").disabled = true;

      p2HoldID.style.width = 0 + "%";
      p2HoldID.setAttribute("aria-valuenow", 100);
      p2HoldID.innerText = 0;

      p2ScoreID.style.width = 100 + "%";
      p2ScoreID.setAttribute("class", "progress-bar bg-success");
      p2ScoreID.innerText="100 🎉";
    } else {
      p2HoldID.style.width = holdValue + "%";
      p2HoldID.setAttribute("aria-valuenow", holdValue);
      p2HoldID.innerText = holdValue;
    }
  }

  if (faceValue === 1) {
    count++;
    changeTurn();
  }
}
