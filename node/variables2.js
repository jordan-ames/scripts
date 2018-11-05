var x = 5,
    y = 3,
    z = 'yes';

var writegreeting = function(name)  {
    var message = "what up " + name;
    console.log(message);
}

writegreeting("man");
writegreeting("man" + x);

console.log(x);
console.log(typeof x);
console.log(y);
console.log(typeof y);
console.log(z);
console.log(typeof z);

console.log(x*3);

console.log(y*3);

console.log(z*3);

console.log(typeof console);

console.log(typeof console.log);