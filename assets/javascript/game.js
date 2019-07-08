$(document).ready(function () {

    var targetScore = $("#target-score");
    var playerScore = $("#player-score");
    var wins = $("#wins");
    var losses = $("#losses");

    var currentScore = 0;

    var targetValue;

    function getTarget() {
        return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    }

    function newTarget() {
        targetValue = getTarget();
    }

    newTarget();

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




    $("#crystal-1").on(click, function () {
        currentScore = currentScore + crystal1;
    })


    console.log(targetValue);

    // console.log(crystalValues);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);



    newTarget();
    console.log(targetValue);





})