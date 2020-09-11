(function () {
    let playersChoice;
    let paper = 1;
    let scissor = 2;
    let stone = 3;
    let count = 0;
    let scorePlayer = 0;
    let scoreComputer = 0;
    let lastoutcome = 0;
    function update () {
        document.getElementById("playerscore").value = playerwins;
        document.getElementById("computerscore").value = computerwins;
    }
    document.getElementById("presspaper").addEventListener("click", function () {
        playersChoice = 1;
        computer();
    })
    document.getElementById("pressscissor").addEventListener("click", function () {
        playersChoice = 2;
        computer();
    })
    document.getElementById("pressstone").addEventListener("click", function () {
        playersChoice = 3;
        computer();
    })
    function computer  () {
        console.log(playersChoice);
        let randomChoice = Math.floor(Math.random() * 3) + 1;
        if (playersChoice == randomChoice) {
            console.log("draw")
        }
        if (playersChoice === 1 && randomChoice === 2) {
            console.log("computer won");
           playerwins = playerwins++;
           update ()
        } else if (playersChoice === 2 && randomChoice === 3) {
            console.log("computer won");
        } else if (playersChoice === 3 && randomChoice === 1) {
            console.log("computer won");
        }
        if (playersChoice === 2 && randomChoice === 1) {
            console.log("player won");
        } else if (playersChoice === 3 && randomChoice === 2) {
            console.log("player won");
        } else if (playersChoice === 1 && randomChoice ===3) {
            console.log("player won");
        }
    }

})();