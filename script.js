const holdBtn = document.getElementById("hold");
const rollBtn = document.getElementById("roll");

holdBtn.addEventListener("click", hold);
rollBtn.addEventListener("click", roll);
//rollBtn.addEventListener("click", changeTurn);
//holdBtn.addEventListener("click", changeTurn);

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

      console.log("in player 2 area should change");
    }
  //document.getElementById('result').innnerText = "Player-" + (count%2 + 1).toString + "turn!";
  //console.log("Player-" + (count%2 + 1).toString + "turn!");
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
  //TODO: end game when player reaches 100, score + hold value == 100
  //TODO: change label when player's turn changes
  const faceValue = Math.floor(Math.random() * 6) + 1;
  const output = "&#x268" + (faceValue  - 1) + "; ";
  const die = document.getElementById("die");
  die.innerHTML = output;

  holdValue += faceValue;
  if (faceValue === 1) {
    holdValue = 0;    
  }
  
  if (count % 2 === 0) {
    // if (holdValue + score >= 100) {
    //   //END GAME DISABLE BUTTONS
    //   document.getElementById("roll").disabled = true;
    //   document.getElementById("hold").disabled = true;
    //   document.getElementById("p1-hold").setAttribute("aria-valuenow", '100 \uD83C\uDF89');
    // }
    document.getElementById("p1-hold").style.width = holdValue + "%";
    document.getElementById("p1-hold").setAttribute("aria-valuenow", holdValue);
    document.getElementById("p1-hold").innerText = holdValue;
  } else {
    document.getElementById("p2-hold").style.width = holdValue + "%";
    document.getElementById("p2-hold").setAttribute("aria-valuenow", holdValue);
    document.getElementById("p2-hold").innerText = holdValue;
  }

  if (faceValue === 1) {
    count++;
    changeTurn();
  }
}
