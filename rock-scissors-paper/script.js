(function () {
    let playersChoice;
    document.getElementById("presspaper").addEventListener("click", function () {
        playersChoice = "paper";
    })
    document.getElementById("pressscissor").addEventListener("click", function () {
        playersChoice = "scissor";
    })
    document.getElementById("pressstone").addEventListener("click", function () {
        playersChoice = "stone";
    })
    document.getElementById("btncomputer").addEventListener("click", function () {
        console.log(playersChoice); //assume that the pc picks stone
        if (playersChoice == "paper") {
            console.log("computer lost")
        }
        if (playersChoice == "scissor") {
            console.log("computer won")
        }
        if (playersChoice == "stone") {
            console.log("it was a draw")
        }
    })
})();