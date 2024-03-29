$(document).ready(function () {

    var targetScore = $("#target-score");
    var playerScore = $("#player-score");
    var winText = $("#wins");
    var lossText = $("#losses");

    var wins = 0;
    var losses = 0;
    var currentScore = 0;

    winText.text(wins);
    lossText.text(losses);

    // function to reset variable after win or loss

    function resetState() {
        crystalValues = [];
        currentScore = 0;
        newTarget();
        getCrystalValues();
        crystal1 = crystalValues[0];
        crystal2 = crystalValues[1];
        crystal3 = crystalValues[2];
        crystal4 = crystalValues[3];
        winText.text(wins);
        lossText.text(losses);
        playerScore.text(currentScore);

    }

    //  function to play sound when you click a crystal, no matter how fast you repeatedly click 

    function play() {
        var crystalSound = $("#sound")[0];


        if (crystalSound.paused) {
            crystalSound.play();
        } else {
            crystalSound.currentTime = 0;
        }
    }

    //  function to get random integer bw 19 & 120

    function getTarget() {
        return Math.floor(Math.random() * (120 - 19)) + 19;
    }

    function newTarget() {
        targetValue = getTarget();
    }

    newTarget();

    targetScore.text(targetValue);

    // randomValueFromArray splices a random number from x array, making sure no two crystals have the same value
    //  the for loop does this 4 times. Each time the getCrystalValues function is called, the x array is reset.

    var crystalValues = [];

    function getCrystalValues() {

        var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        function randomValueFromArray(arr) {
            var index = Math.floor(Math.random() * arr.length);
            return arr.splice(index, 1)[0];
        }

        for (var i = 0; i < 4; ++i) {
            crystalValues.push(randomValueFromArray(x));
        }
        return crystalValues
    }

    getCrystalValues();


    var crystal1 = crystalValues[0],
        crystal2 = crystalValues[1],
        crystal3 = crystalValues[2],
        crystal4 = crystalValues[3];

    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

    $('img').click(function () {

        if (currentScore < targetValue) {
            if ($(this).attr("id") == "crystal-1") {
                currentScore += crystal1;
                playerScore.text(currentScore);
                play();
            } else if ($(this).attr("id") == "crystal-2") {
                currentScore += crystal2;
                playerScore.text(currentScore);
                play();
            } else if ($(this).attr("id") == "crystal-3") {
                currentScore += crystal3;
                playerScore.text(currentScore);
                play();
            } else if ($(this).attr("id") == "crystal-4") {
                currentScore += crystal4;
                playerScore.text(currentScore);
                play();
            }
        }

        if (currentScore === targetValue) {
            wins++;
            resetState();
            targetScore.text("You Won! ☺");
            setTimeout(function () {
                targetScore.text(targetValue);
            }, 2000);
        }

        if (currentScore > targetValue) {
            losses++;
            resetState();
            targetScore.text("You Lost ☹");
            setTimeout(function () {
                targetScore.text(targetValue);
            }, 2000);
        }

    })

});