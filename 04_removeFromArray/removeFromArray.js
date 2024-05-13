const removeFromArray = function(array, ...args) {
    const outArray = []
    array.forEach((item) => {
        if (!args.includes(item)){
            outArray.push(item)
        }
    })
    return outArray;
};

// Do not edit below this line
module.exports = removeFromArray;
