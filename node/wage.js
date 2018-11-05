var wage = 27.9 ;
    reg = (wage).toFixed(2) ;
    ot = (1.5 * wage).toFixed(2) ;
    reghr = 160 ;
    othr = 0 ;
    regpay = (reg*reghr) ;
    otpay = (ot*othr) ;
    grosspay = (regpay+otpay) ;
    fedrate = .22 ;
    staterate = .034 ;
    ret401krate = .1 ;
    ret401k = (ret401krate*grosspay);
    fedtax = (fedrate*grosspay) ;
    statetax = (staterate*grosspay);
    netpay = (grosspay-fedtax-statetax-ret401k) ;
    totded = (fedtax+statetax+ret401k) ;

console.log("Hourly Wage $" +wage) ;
console.log("Regular Wage $" +reg) ;
console.log("Overtime Wage $" +ot) ;

console.log( ) ;

console.log("Regular Hours " +reghr) ;
console.log("Overtime Hours " +othr) ;

console.log( ) ;

console.log("Regular Pay $" +reg*reghr) ;
console.log("Overtime Pay $" +ot*othr) ;

console.log( ) ;

console.log("Gross Pay $" +grosspay) ;

console.log( ) ;

console.log("Federal Tax @~" +fedrate*100 +"% = $" +fedtax) ;
console.log("State Tax @~" +staterate*100 +"% = $"+statetax) ;
console.log("401K Deductions @~" +ret401krate*100 +"% = $"+ret401k) ;
console.log("Total Deductions = $" +totded)

console.log( ) ;

console.log("Net Pay $" +netpay);


var income = function(hrly) {
    var hrwage = (hrly*reghr) ;
    console.log(hrwage) ;
}
income() ;