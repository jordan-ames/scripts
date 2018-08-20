var getDieRoll = function(dieSize) {
        console.log(dieSize + " sided Die")
        return Math.ceil(dieSize * Math.random())
};

var firstDie = getDieRoll(4);
console.log(firstDie);

var secondDie = getDieRoll(6);
console.log(secondDie);

var thirdDie = getDieRoll(10);
console.log(thirdDie);

var fourthDie = getDieRoll(12);
console.log(fourthDie);

var fifthDie = getDieRoll(20);
console.log(fifthDie);

console.log( )

console.log('Total');console.log(firstDie + secondDie + thirdDie + fourthDie + fifthDie);
