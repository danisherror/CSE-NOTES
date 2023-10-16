function calculateTotal(taxRate){
    var calc = (price)=>{
        if(typeof price !== 'number' || price < 0){
            return "Invalid Price"
        }
        tax=(price*taxRate)/100;
        return price+tax;
    }

    return calc;
}

calculate=calculateTotal(10);

console.log(calculate(400));
console.log(calculate(500));
console.log(calculate(750));