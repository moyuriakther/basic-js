
//
//kilometer To Meter
function kilometerToMeter(kilometer) {
    if(kilometer < 0){
         return "Negative value is not accepted";
            }
    else{
        var meter = (kilometer * 1000);
        return meter;
    }
}
console.log(kilometerToMeter(7));



//Budget Calculator
function budgetCalculator(clock, mobile, laptop){
    if(clock < 0 || mobile < 0 || laptop < 0){
        return "Negative value is not accepted";
    }
    else{
    var firstPart = clock * 50;
    var secondPart = mobile * 100;
    var thirdPart = laptop * 500;
    var result = firstPart + secondPart + thirdPart;
    return result;
    }
}
console.log(budgetCalculator(12, 15, 10));



//Hotel Cost
function hotelCost(days){
    if(days < 0){
        return "Negative value is not accepted";
    }
    else{
     var taka = 0;
        if(days <= 10){
        taka = days * 100;
        }
    else if (days <= 20){
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        taka = firstPart + secondPart;
        }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        taka = firstPart + secondPart + thirdPart;
        }
    return taka;
    }
}
var result = hotelCost(5);
console.log(result);



// Mega Friend
function megaFriend(array) {
    var maxString = "";
    for(var i = 0; i < array.length; i++){
    if(array[i] > maxString){
    maxString = array[i];
      }
    }
    return maxString;
}
    console.log(megaFriend(['a', 'aa', 'aaa', 'aaaaa', 'aaaa', 'aaaaaaa']));  












