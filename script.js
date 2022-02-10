const holdBtn = document.getElementById("hold");
const rollBtn = document.getElementById("roll");
const p1ScoreID = document.getElementById("p1-score");
const p2ScoreID = document.getElementById("p2-hold");

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
    document.getElementById("p1-score").style.width = score + "%";
    document.getElementById("p1-score").setAttribute("aria-valuenow", score);
    document.getElementById("p1-score").innerText = score;

    holdValue = 0;

    document.getElementById("p1-hold").style.width = holdValue + "%";
    document.getElementById("p1-hold").setAttribute("aria-valuenow", holdValue);
    document.getElementById("p1-hold").innerText = holdValue;
  } else {
    score2 += holdValue;
    document.getElementById("p2-score").style.width = score2 + "%";
    document.getElementById("p2-score").setAttribute("aria-valuenow", score2);
    document.getElementById("p2-score").innerText = score2;

    holdValue = 0;

    document.getElementById("p2-hold").style.width = holdValue + "%";
    document.getElementById("p2-hold").setAttribute("aria-valuenow", holdValue);
    document.getElementById("p2-hold").innerText = holdValue;
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

      p1ScoreID.setAttribute("class", "progress-bar bg-success");
      p1ScoreID.style.width(100 + "%");
      p1ScoreID.innerText="100 \uD83C\uDF89";
      //TODO: set up win screen, green bar and emoji
      //document.getElementById("p1-hold").innerText="100 \uD83C\uDF89";
    }
    document.getElementById("p1-hold").style.width = holdValue + "%";
    document.getElementById("p1-hold").setAttribute("aria-valuenow", holdValue);
    document.getElementById("p1-hold").innerText = holdValue;
  } else {
    if (holdValue + score >= 100) {
      //END GAME DISABLE BUTTONS
      document.getElementById("roll").disabled = true;
      document.getElementById("hold").disabled = true;

      p2ScoreID.setAttribute("class", "progress-bar bg-success");
      p2ScoreID.style.width(100 + "%");
      p2ScoreID.innerText="100 \uD83C\uDF89";
      //TODO: set up win screen, green bar and emoji
      //document.getElementById("p1-hold").innerText="100 \uD83C\uDF89";
    }
    document.getElementById("p2-hold").style.width = holdValue + "%";
    document.getElementById("p2-hold").setAttribute("aria-valuenow", holdValue);
    document.getElementById("p2-hold").innerText = holdValue;
  }

  if (faceValue === 1) {
    count++;
    changeTurn();
  }
}
