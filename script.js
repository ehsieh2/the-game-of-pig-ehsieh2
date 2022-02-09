const holdBtn = document.getElementById("hold");
const rollBtn = document.getElementById("roll");

holdBtn.addEventListener("click", hold);
rollBtn.addEventListener("click", roll);

let holdValue = 0;
let score = 0;
let score2 = 0;
let count = 1;

function hold() {
  if (count % 2 != 0) {
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
}

function roll() {
  //TODO: end game when player reaches 100, score + hold value == 100
  //TODO: change label when player's turn changes
  const faceValue = Math.floor(Math.random() * 6) + 1;
  const output = "&#x268" + (faceValue  - 1) + "; ";
  const die = document.getElementById("die");
  die.innerHTML = output;

  holdValue += faceValue;
  if (faceValue == 1) {
    holdValue = 0;
  }
  
  if (count % 2 != 0) {
    // if (holdValue + score >= 100) {
    //   //END GAME DISABLE BUTTONS
    //   document.getElementById("p1-hold").setAttribute("aria-valuenow", '100 \uD83C\uDF89');
    // }

    //document.getElementById("result").innnerText("Player-1 turn!");
    document.getElementById("p1-hold").style.width = holdValue + "%";
    document.getElementById("p1-hold").setAttribute("aria-valuenow", holdValue);
    document.getElementById("p1-hold").innerText = holdValue;
  } else {
    //document.getElementById("result") = "Player-2 turn!";
    document.getElementById("p2-hold").style.width = holdValue + "%";
    document.getElementById("p2-hold").setAttribute("aria-valuenow", holdValue);
    document.getElementById("p2-hold").innerText = holdValue;
  }

  //TODO: better way of changing player after 1 val is roled
  if (faceValue == 1) {
    count++;
  }
}
