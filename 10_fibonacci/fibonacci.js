const fibonacci = function(number) {
    let fibNumbers = [1,1];
    if(number < 1){
        return "OOPS";
    }
    if(number < 2){
        return fibNumbers[number-1];
    }
    for(let i = 2; i < number; i++){
        fibNumbers[i] = fibNumbers[i-1] + fibNumbers[i-2];
    }

    return fibNumbers[number-1];

};

// Do not edit below this line
module.exports = fibonacci;
