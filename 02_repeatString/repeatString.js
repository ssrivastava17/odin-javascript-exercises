const repeatString = function(string, num) {
    if(num < 0){
        return "ERROR";
    }
    let myString = "";
    for(let i = 0; i < num; i++){
        myString += string;
    }
    return myString;
};

// Do not edit below this line
module.exports = repeatString;
