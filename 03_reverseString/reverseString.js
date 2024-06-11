const reverseString = function(word) {
    reversedWord = "";
    for (let i = -1 ; i >= -(word.length); i--) {
        reversedWord += word.at(i);
    }
    return reversedWord;

};

// Do not edit below this line
module.exports = reverseString;
