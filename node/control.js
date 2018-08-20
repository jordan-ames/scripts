var getDieRoll = function(dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;
};

var roll = getDieRoll(4);

for(var i = 0; i < 10; i += 1) {
    console.log("You rolled a " +roll);
    roll = getDieRoll(10);
}

if(roll >= 19) {
    console.log("Great Roll!");
}
else if(roll < 19 && roll > 3) {
    console.log("Decent Roll");
}
else {
    console.log("Bad Roll");
}
console.log("You rolled a " +roll);