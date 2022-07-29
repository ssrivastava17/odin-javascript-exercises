const reverseString = function(string) {
    let newString = "";
    let position = 0;
    for(let i=string.length-1; i>=0; i--){
        newString += string[i];
        position++;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
