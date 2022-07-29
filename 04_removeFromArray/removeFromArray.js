const removeFromArray = function(array, ...theArgs) {
    let newArray = [];

    for(let i = 0; i < array.length; i++){
        newArray.push(array[i]);
        for (const arg of theArgs){
            if(array[i] === arg){
                newArray.pop()
                break;
            }else{
                continue
            }
        }
        
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
