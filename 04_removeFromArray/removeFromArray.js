const removeFromArray = function(userArray,...args) {
    for (let arg of args) {
        i = 0;
        while (i < userArray.length) {
            if (userArray[i] === arg) {
                userArray.splice(i,1);
            }
            else {
                i++;
            }
        }
    }
    return userArray;
    }

// Do not edit below this line
module.exports = removeFromArray;
