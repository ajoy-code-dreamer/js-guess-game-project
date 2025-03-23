// ========== guess game ==========
let player_name = document.querySelector(".player_name");
let player_1_inp = document.querySelector(".player_1_inp");
let player_1_btn = document.querySelector(".player_1_btn");
let player_2_inp = document.querySelector(".player_2_inp");
let player_2_btn = document.querySelector(".player_2_btn");
let player_3_inp = document.querySelector(".player_3_inp");
let player_3_btn = document.querySelector(".player_3_btn");
let error_text = document.querySelector(".error_text");
let chance = document.querySelector(".chance");
let chance_span = document.querySelector("span");
let winnerImg = document.querySelector(".winnerImg");
let chance_count = 5;
let player2Result;

player_1_btn.addEventListener("click", function () {
  if (isNaN(player_1_inp.value) || player_1_inp.value == "") {
    player_1_inp.value = "";
    error_text.innerHTML = "Please enter a number";
  } else {
    if (player_1_inp.value > 10 || player_1_inp.value < 1) {
      error_text.innerHTML = "Please enter a number between 1 and 10";
    } else {
      error_text.innerHTML = "";
      player_name.innerHTML = "Player-2";
      player_1_inp.style.display = "none";
      player_1_btn.style.display = "none";
      player_2_inp.style.display = "inline-block";
      player_2_btn.style.display = "inline-block";
      chance.style.display = "block";
      chance_span.innerHTML = chance_count;
    }
  }
});

player_2_btn.addEventListener("click", function () {
  if (isNaN(player_2_inp.value) || player_2_inp.value == "") {
    error_text.innerHTML = "Please enter a number";
  } else {
    if (player_2_inp.value > 10 || player_2_inp.value < 1) {
      error_text.innerHTML = "Please enter a number between 1 and 10";
    } else {
      if (chance_count > 0) {
        chance_count--;
        chance_span.innerHTML = chance_count;
        if (player_2_inp.value == player_1_inp.value) {
          player2Result = "win";
          error_text.innerHTML = "";
          player_name.innerHTML = "Player-3";
          player_1_inp.style.display = "none";
          player_1_btn.style.display = "none";
          player_2_inp.style.display = "none";
          player_2_btn.style.display = "none";
          player_3_inp.style.display = "inline-block";
          player_3_btn.style.display = "inline-block";
          chance.style.display = "block";
          chance_count  = 5;
          chance_span.innerHTML = chance_count;
        }
      } else {
        player2Result = "lose";
        error_text.innerHTML = "";
          player_name.innerHTML = "Player-3";
          player_1_inp.style.display = "none";
          player_1_btn.style.display = "none";
          player_2_inp.style.display = "none";
          player_2_btn.style.display = "none";
          player_3_inp.style.display = "inline-block";
          player_3_btn.style.display = "inline-block";
          chance.style.display = "block";
          chance_count  = 5;
          chance_span.innerHTML = chance_count;

      }
    }
  }
});

player_3_btn.addEventListener("click", function () {
  chance_span.innerHTML = chance_count
  if (isNaN(player_3_inp.value) || player_3_inp.value == "") {
    error_text.innerHTML = "Please enter a number";
  } else {
    if (player_3_inp.value > 10 || player_3_inp.value < 1) {
      error_text.innerHTML = "Please enter a number between 1 and 10";
    } else {
      if (chance_count > 0) {
        chance_count--;
        if (
          player_3_inp.value == player_1_inp.value &&
          player2Result == "win"
        ) {
          player_name.innerHTML = "game over";
          error_text.innerHTML = "Player-2 Player-3 wins";
          player_3_inp.style.display = "none";
          player_3_btn.style.display = "none";
          chance.style.display = "none";
          error_text.style.color = "blue";
          winnerImg.style.display = "block";
        }
      } else {
        if (
          player2Result == "lose" &&
          player_3_inp.value == player_1_inp.value
        ) {
          error_text.innerHTML = "player-3 wins";
          error_text.style.color = "blue";
          winnerImg.style.display = "block";
          player_name.innerHTML = "game over";
        } else {
          error_text.innerHTML = "player-1 wins";
          error_text.style.color = "blue";
          winnerImg.style.display = "block";
          player_name.innerHTML = "the game creator is the winner";
        }
      }
    }
  }
});

// ========== guess game ==========
