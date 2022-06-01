function randRange(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

function choice(array) {
    return array[randRange(0, array.length)];
}

module.exports = {randRange, choice};