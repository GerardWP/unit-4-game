$(document).ready(function () {

    var targetScore = $("#target-score");
    var playerScore = $("#player-score");
    var winText = $("#wins");
    var lossText = $("#losses");

    var wins = 0;
    var losses = 0;

    winText.text(wins);
    lossText.text(losses);

    function resetState() {
        newTarget();
        getCrystalValues();
        currentScore = 0;
    }


    function getTarget() {
        return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    }

    function newTarget() {
        targetValue = getTarget();
    }

    newTarget();

    targetScore.text(targetValue);

    // playerScore.text(currentScore);

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

    var currentScore = 0;


    // $('#crystal-1').on('click', function () {
    //     currentScore += crystal1;
    //     console.log(currentScore);
    //     playerScore.text(currentScore);
    // })

    // $('#crystal-2').on('click', function () {
    //     currentScore += crystal2;
    //     console.log(currentScore);
    //     playerScore.text(currentScore);
    // })

    // $('#crystal-3').on('click', function () {
    //     currentScore += crystal3;
    //     console.log(currentScore);
    //     playerScore.text(currentScore);
    // })

    // $('#crystal-4').on('click', function () {
    //     currentScore += crystal4;
    //     console.log(currentScore);
    //     playerScore.text(currentScore);
    // })




    $('img').on('click', function () {

        if (currentScore !== targetScore) {
            if ($(this).attr("id") == "crystal-1") {
                currentScore += crystal1;
                playerScore.text(currentScore);
            } else if ($(this).attr("id") == "crystal-2") {
                currentScore += crystal2;
                playerScore.text(currentScore);
            } else if ($(this).attr("id") == "crystal-3") {
                currentScore += crystal3;
                playerScore.text(currentScore);
            } else if ($(this).attr("id") == "crystal-4") {
                currentScore += crystal4;
                playerScore.text(currentScore);
            }
        } else if (currentScore > targetScore) {
            resetState();
            losses++;
        } else {
            resetState();
            wins++;
        }
        console.log(currentScore);
    })



    // if (currentScore === targetScore) {
    //     resetState();
    //     wins++;
    // } else if (currentScore > targetScore) {
    //     resetState();
    //     losses++;
    // }

    playerScore.text(currentScore);

    // console.log(targetValue);

    // console.log(crystalValues);



    // newTarget();
    // console.log(targetValue);





})