const reverseString = function(string) {
    i = string.length-1;
    output = ""
    while (i >= 0){
        output += string[i]
        i--;
    }

    return output
};

// Do not edit below this line
module.exports = reverseString;
