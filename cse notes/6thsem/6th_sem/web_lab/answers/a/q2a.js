function monthConverter(){

    var months = [ 
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
        "November", "December"
     ];

    var monthNo = function(monthNumber){
        if(typeof monthNumber !== 'number' || monthNumber<1 || monthNumber>12){
            return "Bad Number";
        }

        monthNumber = Math.floor(monthNumber);
        return months[monthNumber-1];
    }

    return monthNo;

}


var convertMonth = monthConverter();

console.log(convertMonth(7));
console.log(convertMonth(0));
console.log(convertMonth("April"));
console.log(convertMonth(3.5));

