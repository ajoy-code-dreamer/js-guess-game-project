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
let chance_count = 5;
chance_span = chance_count



player_1_btn.addEventListener("click", function () {
    if(isNaN(player_1_inp.value) || player_1_inp.value == ""){    
        player_1_inp.value = ""
        error_text.innerHTML = "Please enter a number";
    }
    else{
        if(player_1_inp.value > 10 || player_1_inp.value < 1){
            error_text.innerHTML = "Please enter a number between 1 and 10";
        }
        else{
            error_text.innerHTML = "";
            player_name.innerHTML = "Player-2";
            player_1_inp.style.display = "none";
            player_1_btn.style.display = "none";
            player_2_inp.style.display = "inline-block";
            player_2_btn.style.display = "inline-block";
            console.log(player_1_inp.value);
        }
    }

})


player_2_btn.addEventListener("click", function () {
    if(isNaN(player_2_inp.value) || player_2_inp.value == ""){    
        error_text.innerHTML = "Please enter a number";
    }
    else{
        if(player_2_inp.value > 10 || player_2_inp.value < 1){
            error_text.innerHTML = "Please enter a number between 1 and 10";
        }
        else{
            if(player_2_inp.value == player_1_inp.value){
                error_text.innerHTML = "plyer 2 win"
            }
            else{
                error_text.innerHTML = "player 1 win"
            }
        }
    }

})













// ========== guess game ==========
