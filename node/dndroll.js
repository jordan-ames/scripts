var getDieRoll = function(dieSize) {
        var result = Math.ceil(dieSize * Math.random());
        return result
};

var fourDie = getDieRoll(4);
console.log(fourDie);

var sixDie = getDieRoll(6);
console.log(sixDie);

var eightDie = getDieRoll(8);
console.log(eightDie);

var tenDie = getDieRoll(10);
console.log(tenDie);

var twelveDie = getDieRoll(12);
console.log(twelveDie);

var twentyDie = getDieRoll(20);
console.log(twentyDie);

// this die needs to only present in increments of 20
var hundoDie = getDieRoll(100);
console.log(hundoDie);





console.log( )

console.log('Total');console.log(fourDie + sixDie + eightDie + tenDie + twelveDie + twentyDie + hundoDie);
