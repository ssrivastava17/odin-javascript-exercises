const palindromes = function (myString) {
// works for both even & off use cases
    myString = myString.toLowerCase();
    myString = myString.replace(/[^a-z]/g, ""); // find globally anything that is not in the brackets and replace with nothing
    let y = myString.length - 1;
    for(let i = 0; i < myString.length / 2; i++){       
        if(myString[i] != myString[y]){
            return false;
        }
        y -= 1;
    }
    return true;


}

// Do not edit below this line
module.exports = palindromes;
