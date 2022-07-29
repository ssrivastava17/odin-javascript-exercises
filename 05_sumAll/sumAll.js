const sumAll = function(value1, value2) {
    if(value1 < 0 || value2 < 0 || !Number.isInteger(value1) || !Number.isInteger(value2)){
        return 'ERROR'
    }
    let first = null;
    let last = null;

    if(value1 < value2){
        first = value1;
        last = value2;
    }else{
        first = value2;
        last = value1;
    }
    
    let sum = 0;
    for(let i = first; i <= last; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
